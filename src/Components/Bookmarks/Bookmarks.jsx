import Bookmark from "../boookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-100 text-center ml-4">
      <div className="text-3xl">
        <h3>Reading time : {readingTime}</h3>
      </div>
      <h2 className="text-center">BookMarks : {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
