import axiosSecure from '.';

// Save a product to sales
export const addToSale = async (salesData) => {
	const { data } = await axiosSecure.post(`/sales`, salesData);
	return data;
};
