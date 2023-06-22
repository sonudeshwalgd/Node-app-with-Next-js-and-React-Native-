import axios from "axios"
// Function to get metadata from a Cloudinary image URL
function getMetadataFromCloudinaryImageUrl(imageUrl) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://api.cloudinary.com/v1_1/your_cloud_name/image/url`;
    const params = {
      url: imageUrl,
      type: 'upload'
    };

    axios.get(apiUrl, { params })
      .then(response => {
        const metadata = {
          width: response.data.width,
          height: response.data.height,
          format: response.data.format,
          // Add any other desired metadata properties
        };
        resolve(metadata);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Example usage
const imageUrl = 'https://res.cloudinary.com/your_cloud_name/image/upload/your_image_public_id.jpg';
getMetadataFromCloudinaryImageUrl(imageUrl)
  .then(metadata => {
    console.log(metadata);
    // Access the metadata properties as needed
  })
  .catch(error => {
    console.error(error);
  });
