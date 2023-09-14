import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 m-4 p-4">
      <h3 className="text-3xl ">{title}</h3>
    </div>
  );
};
Bookmark.prpTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
