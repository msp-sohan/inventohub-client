import axiosSecure from '.';

// get user product
export const getProducts = async (email) => {
	const { data } = await axiosSecure.get(`/products/${email}`);
	return data;
};

// Save a Product data in db
export const addProduct = async (productData) => {
	const { data } = await axiosSecure.post(`/products`, productData);
	return data;
};

// Update a Product
export const updateProduct = async ({ productId, updatedProductData }) => {
	const { data } = await axiosSecure.put(`/product/${productId}`, updatedProductData);
	return data;
};

// Delete a Product

export const deleteProduct = async (productId) => {
	const { data } = await axiosSecure.delete(`/product/${productId}`);
	return data;
};
