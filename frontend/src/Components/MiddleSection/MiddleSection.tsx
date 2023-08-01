import "./MiddleSection.scss";
import { useEffect } from 'react';  
import { Link, useLocation } from "react-router-dom";
import PostSection from "../PostSection/PostSection";
import OpportunitySection from "../OpportunitySection/OpportunitySection";

const MiddleSection = ({ item }: any) => {
  const current = useLocation();

  useEffect(() => {
    // alert(current.pathname)
    if (current.pathname == "/opportunities") {
      document.querySelector(".opportunities")?.classList.add("clicked");
      document.querySelector(".posts")?.classList.remove("clicked");
    } else {
      document.querySelector(".posts")?.classList.add("clicked");
      document.querySelector(".opportunities")?.classList.remove("clicked");
    }
  },[current])
  const posts = () => {
    return (
      <div className="postSection">
        <PostSection/>
      </div>
    )
  }
  const opportunities = () => {
    return (
      <div className="opportunitySection">
        <OpportunitySection/>
      </div>
    )
  }
  return (
    <div className="middleSection">
      <div className="container">
        <div className="mainheaders">
          <Link className= "postlink" to="/"><button className="posts">Posts</button></Link>
          <Link className= "oppolink" to="/opportunities"><button className="opportunities">Opportunities</button></Link>
        </div>
        <hr />
        <div className="contents">
          {
            item == "posts" ? posts() : opportunities() 
          }
        </div>
      </div>
    </div>
  )
}

export default MiddleSection