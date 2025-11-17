import Cardone from './components/Cardone';
import './App.css';
import ParentChild from './components/ParentChild';
import { useState } from 'react';
import Cmpts from './useEffects/Cmpts';
import LoginContextProvider from './Context/LoginContextProvider';
import Maincompnt from './components/Maincompnt';
import UseRef from './useRef/UsingRef';
import UsingReduce from './useReducer/UsingReduce';
// import Practicereducer from './useReducer/Practicereducer';
// import UsingMemo from './useMemo/UsingMemo';
import UseFetch from './customhooks/UseFetch';
import UseReduxx from './components/UseReduxx';

//i am tiksha.....
function App() {

  const [name, setname] = useState('Amit');

  const changename =  ()=>{
    setname("Prem");
  }

  // console.log();
  // return (
  //    <LoginContextProvider>
  //     <Maincompnt/>
  //    </LoginContextProvider>
  // );
let data = UseFetch();
  const handleclick = ()=>{
    console.log(data);
  }
  return (

    //here we can use userdetail value all over the cjild components
    <LoginContextProvider>
    <div className="App">
      <div>hello there</div>
      {/* <Cardone/> */}
      {/* <ParentChild propchivalue={name} navchange={changename}/> */}
      {/* <button onClick={changename}>Change the name</button> */}
      {/* <Cmpts/> */}
      {/* <UseRef/> */}
      {/* <UsingReduce/> */}
      {/* <Practicereducer/> */}
      {/* <UsingMemo/> */}
      <button onClick={handleclick}>custom hook</button>

      <UseReduxx/>

    </div>
    </LoginContextProvider>
  );
}

export default App;
