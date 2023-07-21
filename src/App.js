import Inputform from "./Components/Inputform";
import Tables from "./Components/Tables";
import Button from "./UI/Button";
import Navbar from "./UI/Navbar";

function App(props) {
  return (
    <>
      <Navbar />
      <Inputform />
      <Button />
      <Tables title={"table 1"} />
      <Tables title={"table 2"} />
      <Tables title={"table 3"} />
    </>
  );
}

export default App;
