import React, { useEffect, useState } from 'react'
import "./Meals.css"

function Meals() {
  const [meals, setMeals] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/api/meals")
          .then((response)=> response.json())
          .then((data)=>setMeals(data))
    },[meals])

  const displayedMeals = meals.map((meal)=>
 <div className="items">
    <h2 className='meal-title'>{meal.title}</h2> 
    <h4 className='meal-description'>{meal.description}</h4> 
 </div>
  )

  return (
    <div className='container-meals' >
      {displayedMeals}
    </div>
  )
}

export default Meals