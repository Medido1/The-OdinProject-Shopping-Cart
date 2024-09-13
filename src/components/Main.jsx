import { useState } from 'react';
import styles from '../styles/main.module.css';

function Main() {
  const [currentData, setCurrentData] = useState([]);
  
  function updateData(data){
    setCurrentData(data)
  }  
  
  async function getData() {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products',
        {mode: "cors"}
      );
      updateData(await response.json());
      console.log(currentData);
    } catch(err){
      console.log(err);
      return;
    }
  }

  function showData(){
    currentData.forEach((info) => {
      console.log(info.category)
    })
  }
  return (
    <main className={styles.main}>
      <button onClick={showData}>click me</button>
    </main>
  )
}

export default Main;