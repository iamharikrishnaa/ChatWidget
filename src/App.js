import FloatingButton from "./components/FloatingButton/FloatingButton";
import "./App.css";

function App() {
  const scriptTag = document.getElementsByTagName("script")[0];
  const userId = scriptTag.getAttribute("userId");
  return (
    <div className="widget">
      <div className="widget-button">
        <FloatingButton user_id={userId} />
      </div>
    </div>
  );
}

export default App;
