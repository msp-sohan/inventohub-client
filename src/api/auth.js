import axiosSecure from '.';
// save user data in database
export const saveUser = async (user, name, image) => {
	const currentUser = {
		name: user?.displayName || name,
		email: user?.email,
		image: user?.photoURL || image,
		role: 'user',
		status: 'Verified',
	};
	const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
	return data;
};

// get token from server
export const getToken = async (email) => {
	const { data } = await axiosSecure.post('/jwt', { email });
	console.log('Token Received:', data);
	return data;
};

// remove token from browsser
export const clearCookie = async () => {
	const { data } = await axiosSecure.get('/logout');
	return data;
};

// get all users
export const getAllUsers = async () => {
	const { data } = await axiosSecure('/users');
	return data;
};

export const getRole = async (email) => {
	const { data } = await axiosSecure(`/user/${email}`);
	return data?.role;
};
