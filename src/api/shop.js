import axiosSecure from '.';

// Save a Shop data in db
export const addShop = async (shopData) => {
	const { data } = await axiosSecure.post(`/shops`, shopData);

	return data;
};

// Get All Shop Data
export const getAllShops = async () => {
	const { data } = await axiosSecure.get('/shops');
	console.log(data);
	return data;
};
