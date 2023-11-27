import axiosSecure from '.';

// Save a product to checkout
export const getCheckOut = async (email) => {
	const { data } = await axiosSecure.post(`/checkout/${email}`);
	return data;
};
// Save a product to checkout
export const addToCheckOut = async (checkOutData) => {
	const { data } = await axiosSecure.post(`/checkout`, checkOutData);
	return data;
};
