import LeftSideBar from "../components/LeftSideBar";
import TaskContainer from "../components/TaskContainer"
function Home() {
  return (
    <>
      <div className="container">
        <LeftSideBar />
        <TaskContainer />
      </div>
    </>
  );
}

export default Home;
