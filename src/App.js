// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./home"
import Reg from "./register"

function App()
{
  return(
    <>

      <h1>I am App</h1>
      <BrowserRouter>
      <Routes>
        <Route path = "/reg" element = {<Reg/>}></Route>
        <Route path = "/h" element = {<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App