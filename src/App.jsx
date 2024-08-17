import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <div className="flex max-w-7xl mx-auto h-screen">
      <HamburgerMenu />
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
