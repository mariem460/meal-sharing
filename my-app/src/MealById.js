import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReservationForm from './ReservationForm'

function MealById() {
    const [mealsToReserve, setMeals] = useState([])
    const [mealId, setMealId] = useState("")
    const handelSearch = ()=> {
      fetch(`http://localhost:5000/api/meals/${mealId}`)
      .then((response)=> response.json())
      .then((mealToReserve)=>setMeals(mealToReserve))
    }
    const requiredMeal = mealsToReserve
        .map((meal)=> 
        <ReservationForm mealTitle={meal.title} mealPrice={meal.price}
         maxReservations={meal.max_reservations} key={meal.id} mealId= {mealId}/>)

    const handelMealId = (e) => {
          console.log(e.target.value)
          setMealId(e.target.value)
      }

  return (
    <div className='reservation-form-mealId'>
      <label for="meal-id">Meal ID:</label>
      <input type="tel" onChange={handelMealId}/>
      <button onClick={handelSearch}>Search</button>
      {requiredMeal}
    </div>
 
  )
}

export default MealById