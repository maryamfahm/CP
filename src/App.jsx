import {useState} from "react";
import Home from "./components/Home";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
     {isLoggedIn? (
      <Home changeState={setIsLoggedIn} />
     ) : (
      <Login changeState={setIsLoggedIn} />
     )
    }
    </>
  );
}

export default App;
