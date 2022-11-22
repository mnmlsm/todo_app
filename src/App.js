import "./App.css";

import NewTaskForm from "./components/NewTaskForm";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <NewTaskForm />
      <Main />
    </div>
  );
}

export default App;
