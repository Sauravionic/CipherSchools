import LeftSection from "../../Components/LeftSection/LeftSection"
import MiddleSection from "../../Components/MiddleSection"
import Navbar from "../../Components/Navbar/Navbar"
import RightSection from "../../Components/RightSection"
import "./Community.scss";

const Community = () => {
    return (
        <div className="community">
            <Navbar/>
            <div className="container">
                <LeftSection />
                <MiddleSection />
                <RightSection />
            </div>
        </div>
    )
}

export default Community