import { Resume } from "./Content"
import "./app.css"
import { Navigation } from "./nav"
import { Menu } from "./menu"
import Image from "./image"

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Image></Image>
      <Menu></Menu>
      <Resume></Resume>
    </>
  );
}

console.log("test");

export default App;
