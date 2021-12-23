// import logo from './logo.svg';
import './App.css';
import List from "./components/mobile";

function App() {
  const style={
    marginLeft:"3%",

  }
  // return (
  //   <div className="App">
  //    <h1 style={style}>hello</h1>
  //     <img alt="test" src={logo}/>
  //   </div>
  // );

  // return <div className="App">
  //   {[1,2,3,4,5].map((e)=>(
  //      <Todo num={e}/>
  //   ))}
   
    // </div>
const arr1=["android","blackberry","iPhone","windows phone"];
const title1="Mobile Operating System";
const arr2=["Samsung","HTC","Micromax","Apple"];
const title2="Mobile Manufacturers";
const style1=["","","",""];
const style2=["square","square","","circle"];

return <div style={style}>
 {<List key="list1"  title={title1} name={arr1} style={style1}/>}
{<List key="list2" title={title2} name={arr2} style={style2} />}
 
  
  
</div>


}


// function Todo({num}){
//   return <h1>Todo:{num}</h1>
// }

export default App;
