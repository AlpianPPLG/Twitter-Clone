import { useState } from "react";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      username: "User Name",
      handle: "username",
      content: content,
      avatar: "https://via.placeholder.com/50",
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="flex-grow h-screen overflow-y-scroll p-4 border-l border-r">
      <h2 className="text-2xl font-bold pb-4">Home</h2>
      <TweetBox onTweet={addTweet} />
      <div className="space-y-4">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            username={tweet.username}
            handle={tweet.handle}
            content={tweet.content}
            avatar={tweet.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
