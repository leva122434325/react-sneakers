
import { Content } from "./components/Content/Content";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";



function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <Content />
    </div>
  );
}

export default App;
