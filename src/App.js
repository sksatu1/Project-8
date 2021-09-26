import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Writers from './components/Writers/Writers';

function App() {
  /*  useEffect(() => {
     fetch("./writers.json")
       .then(res => res.json())
       .then(data => console.log(data))
   }, []) */
  return (
    <div className="App">
      <Header></Header>
      <Writers></Writers>
    </div>
  );
}

export default App;
