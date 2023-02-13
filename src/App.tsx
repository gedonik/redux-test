import TasksList from "./components/TasksList/TasksList";
import {useSelector} from "react-redux";
import ManagerPanel from "./components/ManagerPanel/ManagerPanel";

function App() {
    const tasks = useSelector(state => state.tasks.tasks);

    return (
        <div className="App">
            <TasksList tasks={tasks}/>
            <ManagerPanel/>
        </div>
    )
}

export default App;
