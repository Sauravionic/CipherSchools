import OptionCard from "../OptionCard/OptionCard";
import ProfileCard from "../ProfileCard/ProfileCard"
import BottomCard from "../BottomCard/BottomCard";
import "./LeftSection.scss";

const LeftSection = () => {
  return (
    <div className="leftSection">
      <div className="container">
        <ProfileCard />
        <OptionCard />
        <BottomCard />
      </div>
    </div>
  )
}

export default LeftSection