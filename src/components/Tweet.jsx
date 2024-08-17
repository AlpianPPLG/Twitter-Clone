import { FaRegComment, FaRetweet, FaRegHeart, FaShare } from "react-icons/fa";
import PropTypes from "prop-types";

const Tweet = ({ username, handle, content, avatar }) => {
  return (
    <div className="flex space-x-4 p-4 border-b">
      <img src={avatar} alt="Profile" className="rounded-full h-12 w-12" />
      <div className="flex flex-col w-full">
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">{username}</h4>
          <p className="text-gray-500 text-sm">@{handle}</p>
        </div>
        <p className="text-lg mt-2 break-words">{content}</p>
        <div className="flex justify-between mt-4 text-gray-500 text-sm">
          <FaRegComment className="cursor-pointer hover:text-blue-500" />
          <FaRetweet className="cursor-pointer hover:text-green-500" />
          <FaRegHeart className="cursor-pointer hover:text-red-500" />
          <FaShare className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};

export default Tweet;
