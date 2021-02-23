import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const friends = ['Tamim', 'Piash', 'Shamim', 'shakib', 'Read', 'shajjad', 'maruf', 'hasan']
  const products = [
    {name: 'PhotoShop', price: '$333'},
    {name: "illustrator", price: "$444"},
    {name: "premierPro", price: "$555"},
    {name: "afterEffect", price: "$666"}
  ];
  
  return (
    <div className="App">
      <header className="App-header">
       
        <ul>
         {
         friends.map(friend => <li>{friend}</li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
        </ul>
        <p>i am a react person</p>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd =><AdobeSoft product = {pd}></AdobeSoft>)
        }
        {/* <AdobeSoft product = {products[0]}></AdobeSoft>
        <AdobeSoft product = {products[1]}></AdobeSoft>
        <AdobeSoft product = {products[2]}></AdobeSoft> */}
         <Person name = "Shakibul Hasan" job = "cricketer" wife = "shisir" ></Person>
         <Person name = "Tamim Iqbal" job = "cricketer" wife = "Aysaha"></Person>
         <Person name = "Jankar Mahbub" job = "Devloper" wife = "karina"></Person>
        
      </header>
    </div>
  );
}
function Counter() { 
  const [count, setCount] = useState(10)
  return(
    <div>
      <h1>count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>increase</button>
      <button onClick={ () => setCount(count - 1)}>decrease</button>
    </div>
  ) 
}
function Users() {
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h1>Dynamic user:{users.length}</h1>
        <ul>
         {
            users.map(user => <li>{user.name}</li>)
         }
        </ul>
    </div>
  )
}
function AdobeSoft(props){
  const styleAdobe = {
    border: '2px solid red',
    borderRadius: '5px',
    backgroundColor: 'gray',
    width: '200px',
    height: '240px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={styleAdobe}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>buy now</button>

    </div>
  )
}
function Person(props) {
 const personStyle ={
   border:'2px solid red',
   margin: '10px'
 }
  return (<div style={{float:'let'}}>
    <div style={{border:'2px solid yellow', margin: '20px', backgroundColor: 'lightblue'}}>
            <h1>Name:{props.name}</h1>
            <h3>profession: {props.job}</h3>
            <h6>wife: {props.wife}</h6>
         </div>
  </div>)
  
}
export default App;
