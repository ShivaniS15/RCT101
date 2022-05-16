import './App.css';
import Functional,{Functional1} from './Components/Functional.jsx';

function App() {
  let info = [
    { os: "Android" },
    { os: "Blackberry" },
    { os: "iPhone" },
    { os: "Windows Phone" }
  ];

  let info1 = [
    { mm: "Samsung" },
    { mm: "HTC" },
    { mm: "Micromax" },
    { mm: "Apple" }
  ];

  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
        <Functional {...info[0]} />
        <Functional {...info[1]} />
        <Functional {...info[2]} />
        <Functional {...info[3]} />
      <h1>Mobile Manufactures</h1>
      <Functional1 {...info1[0]} />
      <Functional1 {...info1[1]} />
      <Functional1 {...info1[2]} />
      <Functional1 {...info1[3]} />
    </div>
  );
}

export default App;
