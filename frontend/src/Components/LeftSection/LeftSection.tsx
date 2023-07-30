import OptionCard from "../OptionCard/OptionCard";
import ProfileCard from "../ProfileCard/ProfileCard"
import "./LeftSection.scss";

const LeftSection = () => {
  return (
    <div className="leftSection">
      <div className="container">
        <ProfileCard />
        <OptionCard/>
      </div>
    </div>
  )
}

export default LeftSection