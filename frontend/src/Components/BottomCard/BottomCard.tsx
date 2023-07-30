import BottomCardItem from "../BottomCardItem/BottomCardItem";
import "./BottomCard.scss";
import { users } from "../../data";

const BottomSection = () => {
    
    return (
        <div className="bottomCard">
            <div className="container">
                {
                    users.map((u) => {
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