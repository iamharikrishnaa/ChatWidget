import FloatingButton from "./components/FloatingButton/FloatingButton";
import './App.css'

function App() {
  const user_id = window.chatbotId;
  console.log(user_id, 'testUserId')
  return (
    <div className="widget">
      <div className="widget-button">
        <FloatingButton user_id = {user_id} />
      </div>
    </div>
  );
}

export default App;
