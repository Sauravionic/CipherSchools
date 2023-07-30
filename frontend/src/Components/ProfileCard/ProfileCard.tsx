import "./ProfileCard.scss";
const ProfileCard = () => {
    return (
        <div className="profileCard">
            <div className="container">
                <div className="image">
                    <img className = "pluttonC" src="https://www.plutonn.com/static/media/Mask.c87a2edc5f7bc40a251cbff35040b1cb.svg"></img>
                    <span></span>
                    <img className = "user" src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1686246266~exp=1686246866~hmac=9dd0ca7a06d40b92e9999b2ce502d00850e4defcfb5ced1106a836a3528bbf42" alt="" />
                </div>
                <div className="follow">
                    <div className="followers">
                        <p className="num">0</p>
                        <p className="numText">Followers</p>
                    </div>
                    <div className="following">
                        <p className="num">0</p>
                        <p className="numText">Following</p>
                    </div>
                </div>
                <div className="content">
                    <h2>Saurav Srivastava</h2>
                    <h3>@sauravionic</h3>
                    <p>Add an awesome bio right now</p>
                </div>
                <div className="postButton">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="iconify iconify--fa6-regular" width="25" height="25" viewBox="0 0 512 512" data-darkreader-inline-color=""><path fill="currentColor" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376v103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3l123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6L190.1 336l1.2 1l-123.1-51.3zm335.1 139.7l-166.6-69.5l214.1-239.3l-47.5 308.8z"></path></svg>
                        {/* <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-send-social-media-prettycons-lineal-prettycons.png" alt="external-send-social-media-prettycons-lineal-prettycons"/> */}
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard