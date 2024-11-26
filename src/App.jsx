import { useEffect, useState } from "react";
import Home from "./components/Home";
import { ScaleLoader } from "react-spinners";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const handleWindowLoad = () => {
    //   // Once the page is fully loaded, hide the loading screen
    //   setIsLoading(false);
    // };

    // // // Add the window load event listener
    // window.addEventListener("load", handleWindowLoad);

    // // // Cleanup the event listener on component unmount
    // return () => {
    //   window.removeEventListener("load", handleWindowLoad);
    // };

    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <ScaleLoader color="#4f5769" size={50} />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
