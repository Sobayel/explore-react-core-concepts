import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClickTwo = () =>{
    alert('button two clicked')
  }

  const addToFive =(num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      {/* function handleClick */}
      <button onClick={handleClick}>Click Me</button>
      {/* Arrow function handleClick */}
      <button onClick={handleClickTwo}>Click Two Me</button>
      {/* direct Arrow function handleClick */}
      <button onClick={() => {alert('button third Clicked')}}>Click Third Me</button>
      {/* parameter pass */}
      <button onClick={() => addToFive(6)}>Click Four Me</button>
    </>
  )
}

export default App
