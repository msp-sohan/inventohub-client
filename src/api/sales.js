import axiosSecure from '.';

// Save a product to sales
export const addToSale = async (salesData) => {
	const { data } = await axiosSecure.post(`/sales`, salesData);
	return data;
};

// Add all sale from chekout
export const addToAllSale = async (salesData) => {
	const { data } = await axiosSecure.post(`/allsales`, { salesData });
	return data;
};
