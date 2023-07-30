import { useState } from "react";
import "./BottomCardItem.scss";

const BottomCardItem = ({ props }: any) => {

    const [isfollowing, setFollowing] = useState(false);
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
    return (
        <div className="bottomCardItem">
            <div className="container">
                <div className="twoContent">
                    <div className="image">
                        <img src={props.image}></img>
                    </div>
                    <div className="content">
                        <span>@{props.username}•</span>
                        <h3>{ props.name }</h3>
                    </div>
                </div>
                <div className="followButton">
                    <span onClick={() => setFollowing(!isfollowing)}>
                        {isfollowing ?
                            button1() : button2()
                        }
                        
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BottomCardItem