import {useState} from 'react'
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Main/Main";

function App() {
  const [amountOfShoes, setAmountOfShoes] = useState(0);

  return (
    <>
      <Navbar
        amountOfShoes={amountOfShoes}
        setAmountOfShoes={setAmountOfShoes}
      />
      <Main amountOfShoes={amountOfShoes} setAmountOfShoes={setAmountOfShoes} />
    </>
  );
}

export default App;
