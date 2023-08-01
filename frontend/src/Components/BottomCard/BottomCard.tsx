import BottomCardItem from "../BottomCardItem/BottomCardItem";
import "./BottomCard.scss";
import { users } from "../../data";

const BottomSection = () => {
    const user = users.slice(0, 7);
    return (
        <div className="bottomCard">
            <div className="container">
                {
                    user.map((u) => {
                        return (
                            <BottomCardItem props={u} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BottomSection