import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import { useDispatch, useSelector } from "react-redux";
import './CatDogFood.css';
import { getAllFoods, deleteFood } from "../../Redux/Actions/foodActions";

const CatDogFood = () => {
    const [foods,setFoods]=useState([]);
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     fetch('./Petsfood.json')
    //     .then(res=>res.json())
    //     .then(data=>setFood(data))
    // },[])
     React.useEffect(() => {
       dispatch(getAllFoods());
     }, []);

     React.useEffect(() => {
       setFoods(foods);
     }, [foods]);
    return (
      <div className="text-center mt-5">
        <h1 className='mb-3 food-text'>
          ALL <span style={{ color: "brown" }}>AIR-DRIED FOOD</span> FOR PETS
        </h1>
        <div className="all-food">
          <p>
            Inspired by the centuries-old technique of naturally preserving
            meats, ready to serve <br /> raw-inspired foods with nature’s
            goodness locked in.Food is assential for all pets.
          </p>
        </div>
        <div className="display-grid">
          {foods.map((food) => (
            <Foods food={food}></Foods>
          ))}
        </div>
      </div>
    );
};

export default CatDogFood;