import { useState } from "react";
import "./CommentCard.scss";

const CommentCard = ({ item }: any) => {
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [isComment, setIsComment] = useState(false);
    const [isLike, setIsLike] = useState(false);

    const commentClickHandler = () => {
        const comment = document.querySelector(".footers .comments svg");
        if (!isComment) {
            comment?.classList.add("clicked");
            setIsComment(true);
        }
        else {
            comment?.classList.remove("clicked");
            setIsComment(false);
        }
        setCommentCount(item.size())
    }
    const likesClickHandler = () => {
        const likes = document.querySelector(".footers .likes svg");
        if (!isLike) {
            likes?.classList.add("clicked");
            setIsLike(true);
            setLikeCount(likeCount + 1);
        }
        else {
            likes?.classList.remove("clicked");
            setIsLike(false);
            setLikeCount(likeCount - 1);
        }
    }
    return (
        <div className="commentCard">
            <div className="container">
                <div className="profilepic">
                    <img src={item.image} alt="" />
                </div>
                <div className="commentedsection">
                    <div className="headers">
                        <div className="names">
                            <span className="username">@{item.username}</span>
                            <span className="dot">•</span>
                            <span className="time">1 hours ago</span>
                        </div>
                        <div className="more">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="mid">
                        <p>Commented</p>
                    </div>
                    <div className="footers">
                        <div className="comments" onClick={commentClickHandler}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84.33A15.69 15.69 0 0 0 47.67 224H132a100 100 0 0 0 0-200Zm0 184H48v-84a84 84 0 1 1 84 84Z"></path></svg>
                                {commentCount}
                            </button>
                        </div>
                        <div className="likes" onClick={likesClickHandler}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"></path></svg>
                                {likeCount}
                            </button>
                        </div>
                        <div className="reply">
                            <span>Reply</span>
                        </div>
                    </div>
                </div>
            </div>

            { isComment && 
                <div className="secondcontainer">
                    {item.subcomments && <CommentCard item={item} />}
                </div>
            }
        </div>
    )
}

export default CommentCard