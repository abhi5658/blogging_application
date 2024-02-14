// import blogBlogs from '../constants/blogs'
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// Function to make GET requests
export const getBlogList = async () => {
  const url = `/blogs`;
  try {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(`${API_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.blogs;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getBlogById = async (id) => {
  // await new Promise(resolve => setTimeout(resolve, 1000));
  const url = `/blogs/${id}`;
  try {
    const response = await fetch(`${API_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.blog;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to make POST requests
export const createBlog = async (title, image, body, author) => {
  const url = '/blog';
  const payload = {
    title,
    image,
    body,
    author,
  };
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.blog;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
