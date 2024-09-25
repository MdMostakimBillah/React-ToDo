import classes from "../styles/Home.module.css";
import Navigation from "./Navigation";
import TodoListOperation from "./TodoListOperation";
const Home = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <TodoListOperation />
    </div>
  );
};

export default Home;
