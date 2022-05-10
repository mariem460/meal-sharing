import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReservationForm from './ReservationForm'
import Meals from './Meals'

function MealById() {
    const [mealsToReserve, setMeals] = useState([])
    const [mealId, setMealId] = useState("")
    const [clicked, setClicked] = useState(false)
    const handelSearch = ()=> {
      setClicked(true)
      fetch(`/api/meals/${mealId}`)
      .then((response)=> response.json())
      .then((mealToReserve)=>setMeals(mealToReserve))
    }
    const requiredMeal = mealsToReserve
        .map((meal)=> 
        <ReservationForm mealTitle={meal.title} mealPrice={meal.price}
         maxReservations={meal.max_reservations} key={meal.id} mealId= {mealId}/>)

    const handelMealId = (e) => {
          setMealId(e.target.value)
      }

  return (
    <div className='reservation-form-mealId'>
      <label for="meal-id">Meal ID</label>
      <input type="tel" onChange={handelMealId}/>
      <button onClick={handelSearch}>Book seat</button>
      {requiredMeal}
      {clicked ? null : <Meals></Meals>}
    </div>
 
  )
}

export default MealById