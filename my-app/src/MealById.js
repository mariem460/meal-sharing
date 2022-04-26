import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReservationForm from './ReservationForm'

function MealById() {
    const [mealsToReserve, setMeals] = useState([])
    const {id} = useParams();
    useEffect(()=> {
        fetch(`http://localhost:5000/api/meals/${id}`)
            .then((response)=> response.json())
            .then((mealToReserve)=>setMeals(mealToReserve))
    },[])
    const requiredMeal = mealsToReserve
        .map((meal)=> 
        <ReservationForm mealTitle={meal.title} mealPrice={meal.price}
         maxReservations={meal.max_reservations} key={meal.id} id= {meal.id} 
        />)

  return (
    <div>{requiredMeal}</div>
  )
}

export default MealById