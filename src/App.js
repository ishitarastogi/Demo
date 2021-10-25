import "./index.css";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
function App() {

  return (
    <div>
      <h1>My Todos</h1>

      <Todo text="NFT Project"/>
      <Todo text="Complete React project"/>

      <Todo text="Write something"/>
      <Modal/>
<Backdrop/>
    </div>
  );
}

export default App;
