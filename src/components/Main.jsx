import { useState, useEffect } from 'react';
import styles from '../styles/main.module.css';
import rightArrow from '../assets/images/right-arrow.png';
import leftArrow from '../assets/images/left-arrow.png';

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

  function showNext(){
    if (index >= currentData.length -1){
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function showPrevious() {
    if (index === 0){
      setIndex(currentData.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function showData() {
    console.log(currentData);
  }
  return (
    <main className={styles.main}>
      <button onClick={showData} className={styles.btn}>click me</button>
      <div className={styles.itemsContainer}>
        {currentData.length > 0 ? (
          <div className={styles.item}>
            <button 
              onClick={showNext}
              aria-label='next button' 
              className={styles.arrowRight}
            >
              <img src={rightArrow} alt="next button" />
            </button>
            <button
              onClick={showPrevious}
              aria-label='previous button'
              className={styles.arrowLeft}
            >
              <img src={leftArrow} alt="previous button" />
            </button>
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