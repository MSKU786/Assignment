import Topbar from "./components/topbar/Topbar"
import Main from "./components/mainContainer/Main"
import BottomLayout from "./components/mainContainer/BottomLayout"
function App() {
  return (
    <div className="App">
        <div id = "topContainer">
          <Topbar />
          <Main />
        </div>
        <BottomLayout />
    </div>
  );
}

export default App;
