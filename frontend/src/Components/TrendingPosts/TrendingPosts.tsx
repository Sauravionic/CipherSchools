import TrendingPostsCard from "../TrendingPostsCard/TrendingPostsCard";
import "./TrendingPosts.scss";

const TrendingPosts = ({item}: any) => {
  return (
    <div className="trendingPosts">
      <div className="trendingcontainer">
        <div className="trendingheader">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="trending_cardIcon__zmz6C iconify iconify--ph" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h8v-64a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v64h16V88a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v112h16V40a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8v160h8a8 8 0 0 1 8 8Z"></path></svg>
          <h2>Trending Posts</h2>
        </div>
        <div className="trendingPostsCard">
          {item.map((i:any) => {
            return (
              <TrendingPostsCard item={ i } />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TrendingPosts