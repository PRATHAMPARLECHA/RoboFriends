//import logo from './logo.svg';
//import './App.css';
import CardList from "./CardList";
import BoxSearch from './BoxSearch';
import { Roboto }  from "./Roboto";
import { useState } from 'react';
import Scrool from './Scrool';

 function App() {
  const [change , setChange] = useState({
    Roboto: Roboto,
    searchfield: '',
  }); 
  onchange = (e) => {
    setChange({...change,searchfield: e.target.value});
  }
  const filterRoboto = Roboto.filter(user => {
    return user.name.toLowerCase().includes(change.searchfield.toLowerCase());
  })
  return (
    <div className='tc'>
      <h2>RoboFriend</h2>
      <BoxSearch onchangevalue={onchange}/>
      <Scrool>
        <CardList filterRobotovalue={filterRoboto} />  
      </Scrool>
    </div>
  );
}

export default App;
