import PropTypes from "prop-types";

const Widgets = () => {
  return (
    <div className="p-4 w-80">
      <input
        type="text"
        placeholder="Search Twitter"
        className="bg-gray-100 p-2 rounded-full w-full mb-4"
      />
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Whats happening</h3>
        <TrendingTopic topic="React vs. Vue" />
        <TrendingTopic topic="JavaScript" />
        <TrendingTopic topic="Tailwind CSS" />
      </div>
    </div>
  );
};

const TrendingTopic = ({ topic }) => (
  <div className="mb-3">
    <h4 className="text-gray-500">Trending in Technology</h4>
    <p className="font-bold">{topic}</p>
  </div>
);

TrendingTopic.propTypes = {
  topic: PropTypes.string.isRequired, // topic should be a string
};

export default Widgets;
