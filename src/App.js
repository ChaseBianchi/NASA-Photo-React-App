import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Header from './header'
import {API_KEY, BASEURL} from './Constants'
import ContentBox from './contentBox'


function App() {
const [nasaData, setNasaData] = useState({})

useEffect(()=>{
  axios.get(`${BASEURL}?api_key=${API_KEY}`)
  .then(res => setNasaData(res.data))
  .catch(err => console.log(err))
},[])


  return (
    <div className="App">
      <Header nasaData={nasaData}/>
      <ContentBox nasaData={nasaData}/>
    </div>
  );
}

export default App;
