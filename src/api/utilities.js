import axios from 'axios';

export const imageUpload = async (image) => {
  try {
    if (!image || !(image instanceof File)) {
      throw new Error('Invalid image file');
    }

    // Create FormData object and append the image
    const formData = new FormData();
    formData.append('image', image);

    // Check if the API key is available
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    if (!apiKey) {
      throw new Error('API key is not defined');
    }

    // Make the POST request to upload the image
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`,
      formData,
    );

    // Log and return the response data
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Log any errors that occur
    console.error('Image upload failed:', error);
    throw error;
  }
};














// import axios from 'axios';

// export const imageUpload = async (image) => {
// 	console.log("image",image)
// 	const formData = new FormData();
// 	formData.append('image', image);
// 	const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
// 		formData,
// 	);
// 	console.log("data",data)
// 	return data;
// };
