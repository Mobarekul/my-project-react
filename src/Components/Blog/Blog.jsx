import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className=" mt-20">
      <img className="mb-8" src={cover} alt="Cover picture of the title" />
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img className="w-14 h-14 rounded-full" src={author_img} alt="" />

          <div className="ml-6">
            <h3 className="text-3xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} mins read</span>
          <button className="text-2xl text-yellow-400 ml-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a> #{hash}</a>
        </span>
      ))}
    </div>
  );
};

export default Blog;
