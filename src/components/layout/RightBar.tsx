import PopularTags from "../PopularTags";
import Recommendations from "../Recommendations";
import Search from "../Search";
import Footer from "../Footer";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <Footer />
    </div>
  );
};

export default RightBar;
