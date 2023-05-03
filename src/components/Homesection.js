import React, { useState, useEffect } from 'react';
import food from "../assets/Ellipse 3.png";

const Homesection = () => {
  const [foodItem, setFoodItem] = useState('Healthy Food');

  useEffect(() => {
    const foodItems = ['Food','Pizza', 'Coffee'];
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      setFoodItem(foodItems[currentIndex]);
      currentIndex = (currentIndex + 1) % foodItems.length;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="row mt-2">
      <div className="col-lg-12 mt-3" style={{background: '#E1FFC9', height: '500px'}}>
        <div className="container d-flex mt-5">
          <div className="col-lg-6">
            <h3 className="mt-1 mx-5 fs-4 fw-bold text-uppercase">Enjoy your Healthy <br />
              Delicious <span style={{color: '#B20A0D'}}>{foodItem}</span>
            </h3>
            <p className="mt-4 mx-5" style={{fontStyle: 'normal', color: '#808080'}}>
              You can taste the food as you like to feel <br />
              the real combination of delicious item <br />
              cheers.
            </p>
            <button className="btn mt-5 mx-5 px-3" style={{background: '#CB5554', color: '#FFFFFF', borderRadius: '30px'}} type="submit">Book a table </button>
            <button className="btn fw-bold mt-5">Watch Video</button>
          </div>
          <div className="col-lg-6">
            <img src={food} className="img-fluid mt-5 mx-lg-5" alt="Responsive image" height="235" width="235" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homesection;
