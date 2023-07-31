import PostCard from "../PostCard/PostCard";
import "./PostSection.scss";
import { users } from "../../data.tsx";

const PostSection = () => {
    return (
        <div className="postSection">
            <div className="container">
                {users.map((u) => {
                    return (
                        <PostCard item={u} />
                    )
                })}
            </div>
        </div>
    )
}

export default PostSection