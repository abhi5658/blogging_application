import React, { useState, useEffect } from "react";

import "./BlogList.css";
import ShortBlog from "../ShortBlog/ShortBlog";
import { getBlogList } from '../../service/blogService';


const BlogList = () => {
  const [blogs, setBlogs] = useState(null); // State to manage loading status
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogList = await getBlogList();

        setBlogs(blogList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cancel any ongoing fetch requests, clean up resources, etc.
    };
  }, []);

  return (

    <div className="posts-container">
      {
        loading
          ? (
            <div>
              <br></br>
              <div>Loading...</div>
              <br></br>
              <div>Cold booting backend ❄️ might a add delay of upto 1 minute. Please wait ⏳</div>
            </div>
          ) // Render loader while loading is true
          : blogs.map((post, index) => (
            <ShortBlog key={index} index={index} post={post} />
          ))
      }
    </div>
  );
};

export default BlogList;