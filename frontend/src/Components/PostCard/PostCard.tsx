import { Link } from "react-router-dom";
import "./PostCard.scss";
import { useState } from 'react';
import CommentCard from "../CommentCard/CommentCard";
import { users } from "../../data.tsx";

const PostCard = ({ item }: any) => {
    const [isfollowing, setFollowing] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [likes, setLikes] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [isComment, setComment] = useState(false);

    const button1 = () => {
        return (
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"></path></svg>
                Following
            </button>
        )
    }
    
    const button2 = () => {
        return (
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--material-symbols" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"></path></svg>
                Follow
            </button>
        )
    }
    const description = showFullDescription ? item.desc : item.desc?.slice(0, 90) + "...";
    
    const likeClickedHandler = () => {
        const likeClass = document.querySelector(".likes svg");
        if (likeClass?.classList.contains("clickedIcon")) {
            likes == 0 ? setLikes(0) : setLikes(likes - 1);
            likeClass.classList.remove("clickedIcon");
        }
        else {
            setLikes(likes + 1);
            likeClass?.classList.add("clickedIcon");
        }
    }

    const commentClickHandler = () => {
        const commentClass = document.querySelector(".comments svg");
        if (commentClass?.classList.contains("clickedIcon")) {
            setComment(!isComment);
            commentClass.classList.remove("clickedIcon");
        }
        else {
            setComment(!isComment);
            commentClass?.classList.add("clickedIcon");
        }
        setCommentCount(item.size())
    }
    return (
        <div className="postCard">
            <div className="container">
                <div className="headers">
                    <div className="info">
                        <div className="image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="name">
                            <div className="upperContent">
                                <span className="username">@{item.username}•</span>
                                <span className="time">8 days ago</span>
                            </div>
                            
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                    <div className="more">
                        <div className="followButton">
                            <div onClick={() => setFollowing(!isfollowing)}>
                                {isfollowing ?
                                    button1() : button2()
                                }
                            </div>
                        </div>
                        <div className="extra">
                            <svg onClick={() => setMenuOpen(!isMenuOpen)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="24" height="24" viewBox="0 0 24 24" ><path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"></path></svg>
                            {isMenuOpen &&
                                <div className="options" onClick={() => setMenuOpen(!isMenuOpen)}>
                                    <Link className = "link" to="/">
                                        <div className="report">
                                            <span>Report</span>
                                        </div>
                                    </Link>
                                </div>
                            }   
                        </div>
                        
                    </div>
                </div>
                <div className="contents">
                    <div className="para">
                        <p>{description}</p>
                        <button onClick={() => setShowFullDescription(!showFullDescription)}>
                            Read {showFullDescription ? "Less" : "More"}
                        </button>
                    </div>
                    <div className="image">
                        <img src="https://d3gmywgj71m21w.cloudfront.net/7cff13b383f5e3ef74690157e5868f2d.jpg"></img>
                    </div>
                </div>
                <div className="footer">
                    <div className="leftcontents">
                        <div className="comments" onClick={commentClickHandler}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84.33A15.69 15.69 0 0 0 47.67 224H132a100 100 0 0 0 0-200Zm0 184H48v-84a84 84 0 1 1 84 84Z"></path></svg>
                                {commentCount}
                            </button>
                        </div>
                        <div className="likes" onClick={likeClickedHandler}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"></path></svg>
                                {likes}
                            </button>
                        </div>
                        <div className="shares">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7c0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91c1.61 0 2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08Z"></path></svg>
                                
                            </button>
                        </div>
                    </div>
                    <div className="rightcontents">
                        <img src="https://d3gmywgj71m21w.cloudfront.net/e5f15e56c16bc817679b91a7323bf6de.jpeg"></img>
                        <img src="https://d3gmywgj71m21w.cloudfront.net/e5f15e56c16bc817679b91a7323bf6de.jpeg"></img>
                        <span className="peopleCount">+5</span>
                    </div>
                </div>
            </div>
            <div className="secondContainer">
                {isComment && <div className="commentSection">
                            <div className="entry">
                                <div className="userIcon">
                                    <img src="https://d3gmywgj71m21w.cloudfront.net/e5f15e56c16bc817679b91a7323bf6de.jpeg" alt="" />
                                </div>
                                <div className="inputcomment">
                                    <input type="text" placeholder="Type Your Comment" />
                                    <div className="icons">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="styles_icon__FlpfI iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.5c2.33 0 4.3-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5M8.5 11A1.5 1.5 0 0 0 10 9.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 7 9.5A1.5 1.5 0 0 0 8.5 11m7 0A1.5 1.5 0 0 0 17 9.5A1.5 1.5 0 0 0 15.5 8A1.5 1.5 0 0 0 14 9.5a1.5 1.5 0 0 0 1.5 1.5M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path></svg>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="inputField_icon__55uW0 iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div> 
                            <div className="comments">
                                {users.map((u) => {
                                    return (
                                        <CommentCard item={u} />
                                    )
                                })}
                            </div>
                        </div>}
            </div>
            {<hr />}
        </div>
    )
}

export default PostCard