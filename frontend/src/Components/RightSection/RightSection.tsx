import TrendingCourses from "../TrendingCourses/TrendingCourses";
import TrendingPosts from "../TrendingPosts/TrendingPosts";
import "./RightSection.scss";
import { users } from "../../data.tsx";

const RightSection = () => {
  return (
    <div className="rightSection">
      <div className="rightcontainer">
        <TrendingPosts item={ users } />
        <TrendingCourses item={users} />
      </div>
    </div>
  )
}

export default RightSection