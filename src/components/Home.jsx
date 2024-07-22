import {useState, useEffect} from "react";

const Home = ({changeState}) => {
  const [profileObj, setProfileObj] = useState({
    name: "Maryam Fahm",
    Age: 21,
    email: "maryamfahm@yahoo.com",
    about: "A studious student",
  });

  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };
  const handleHideProfile = () => {
setShowProfile(false);
  };
  return (
    <div>
      <h1>Hello there</h1>
      <div>
        {showProfile ? (
        <div>
          <h3>Name: {profileObj.name}</h3>
          <h3>Age: {profileObj.age}</h3>
          <h3>Email:{profileObj.email}</h3>
          <p>About: {profileObj.about}</p>
        </div>
        ) : (
          <h2>Profile Hidden</h2>
        )}

        <div>
          <button onClick={handleShowProfile}>Show</button>
          <button onClick={handleHideProfile}>Hide</button>
        </div>
      </div>

      </div>
  );
};

export default Home