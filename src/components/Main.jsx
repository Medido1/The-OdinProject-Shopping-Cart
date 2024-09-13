import { useState, useEffect } from 'react';
import styles from '../styles/main.module.css';

function Main() {
  const [currentData, setCurrentData] = useState([]);
  const [index, setIndex] = useState(0);

  async function getData() {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products',
        {mode: "cors"}
      );
      const fullData = await response.json();
      const menClothingData = fullData.filter(info => info.category === "men's clothing");
      setCurrentData(menClothingData);
    } catch(err){
      console.log(err);
      return;
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  function renderStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++){
      if (rating > i) {
        stars.push(<li key={i} className={styles.star}></li>)
      } else {
        stars.push(<li key={i} className={`${styles.star}${styles.empty}`}></li>)
      }
    }
    return stars;
  }

  function showData() {
    console.log(currentData[0]);
    let rating = currentData[0].rating.rate;
    console.log(Math.ceil(rating));
  }
  return (
    <main className={styles.main}>
      <button onClick={showData} className={styles.btn}>click me</button>
      <div className={styles.itemsContainer}>
        {currentData.length > 0 ? (
          <div className={styles.item}>
            <h2>{currentData[index].title}</h2>
            <img 
              src={currentData[index].image} 
              alt={currentData[index].title} 
              className={styles.img}
              />
            <p>{currentData[index].description}</p>
            <div className={styles.flexGrp}>
              <p className={styles.price}>{`${currentData[index].price}$`}</p>
              <ul className={styles.rating}>
                {renderStars(Math.ceil(currentData[index].rating.rate))}
              </ul>
            </div>
          </div>
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </main>
  )
}

export default Main;