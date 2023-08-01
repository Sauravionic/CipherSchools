import "./TrendingCoursesCard.scss";

const TrendingCoursesCard = () => {
    return (
        <div className="trendingCoursesCard">
            <div className="trendingCoursesCardContainer">
                <div className="image">
                    <img src="https://d3gmywgj71m21w.cloudfront.net/498f10428c3b24c94e57a4bff1176c93" alt="" />
                </div>
                <div className="contents">
                    <h3>JavaScript (JS)</h3>
                    <p className="free">Free</p>
                    <p className="enrolled">1.09K Enrolled</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingCoursesCard