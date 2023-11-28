import axiosSecure from '.';

export const createPaymentIntent = async (price) => {
	const { data } = await axiosSecure.post('/create-payment-intent', price);
	return data;
};

// update product limit after payment in db
export const updatelimit = async (email, paymentInfo) => {
	const { data } = await axiosSecure.patch(`/shops/limit/${email}`, paymentInfo);
	return data;
};
