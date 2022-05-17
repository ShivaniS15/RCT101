import './App.css';

function App() {

  const arr = ["Services", "Projects", "About"]
  return (
    <div className="App">
        <Logo value= {"LOGOBACKERY"}  />
        <div className='opt'>{arr.map((e)=>{
          return <Option arr={e} />
        })}

        </div>
        <Button />
    </div>
  );
}


function Logo ({value}){
  return (
    <div className='logo'>
      <h2>{value}</h2>
    </div>
  )
}

function Option({arr}){
  return (
    <div className='option'>
      <p>{arr}</p>
    </div>
  )
}

function Button (){
  return(
    <div>
      <button className='btn'>Connect</button>
    </div>
  )
}
export default App;
