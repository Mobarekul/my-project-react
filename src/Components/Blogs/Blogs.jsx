import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleMarkread }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          handleMarkread={handleMarkread}
          handleBookmark={handleBookmark}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
