import "./TrendingPostsCard.scss";

const TrendingPostsCard = ({ item }: any) => {

    const description = item.desc?.slice(0, 40) + "...";

    return (
        <div className="trendingPostsCard">
            <div className="trendingPostsCardContainer">
                <div className="contents">
                    <div className="user">
                        <span className="username">•{item.username}</span>
                        <span className="time">•23 days ago</span>
                    </div>
                    <div className="desc">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="image">
                    <img src="https://d3gmywgj71m21w.cloudfront.net/ff8ed909126d4f8a1aeff4898703f05a.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default TrendingPostsCard