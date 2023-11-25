import axiosSecure from '.';

// Save a Shop data in db
export const addShop = async (shopData) => {
	const { data } = await axiosSecure.post(`/shops`, shopData);
	return data;
};
