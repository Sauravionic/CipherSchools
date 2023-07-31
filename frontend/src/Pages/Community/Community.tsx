import LeftSection from "../../Components/LeftSection/LeftSection"
import MiddleSection from "../../MiddleSection/MiddleSection"
import RightSection from "../../Components/RightSection/RightSection"
import "./Community.scss";

const Community = ({item}: any) => {
    return (
        <div className="community">
            <div className="container">
                <LeftSection />
                <MiddleSection item={item} />
                <RightSection />
            </div>
        </div>
    )
}

export default Community