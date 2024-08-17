import { useState } from "react";
import PropTypes from "prop-types";

const TweetBox = ({ onTweet }) => {
  const [tweetContent, setTweetContent] = useState("");

  const sendTweet = () => {
    if (tweetContent.trim() !== "") {
      onTweet(tweetContent);
      setTweetContent("");
    }
  };

  return (
    <div className="border-b p-4 space-y-4">
      <div className="flex flex-col space-y-2">
        <textarea
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          placeholder="What's happening?"
          className="w-full h-20 p-2 text-lg resize-none bg-transparent focus:outline-none"
        />
        <button
          onClick={sendTweet}
          className="bg-blue-500 text-white rounded-full py-2 px-4 font-bold self-end"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

TweetBox.propTypes = {
  onTweet: PropTypes.func.isRequired,
};

export default TweetBox;
