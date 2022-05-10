import React, { useState } from 'react'
import "./AddMeal.css"

function AddMeal() {
    const [clicked, setclicked] = useState(false)
    const [addedMeals, setAddedMeals] = useState({
        title: "",
        description: "",
        location: "",
        when: "",
        price: "",
        max_reservations: ""
    })
    const handelMealName = (e) => {
        setAddedMeals({...addedMeals, title: e.target.value})
    }
    const handelMealDescription = (e) => {
        setAddedMeals({...addedMeals, description: e.target.value})
    }
    const handelLocation = (e) => {
        setAddedMeals({...addedMeals, location: e.target.value})
    }
    const handelDate = (e) => {
        setAddedMeals({...addedMeals, when: e.target.value})
    }
    const handelMealPrice = (e) => {
        setAddedMeals({...addedMeals, price: e.target.value})
    }
    const handelMaxReservation = (e) => {
        setAddedMeals({...addedMeals, max_reservations: e.target.value})

    }
    const handelAddMeal = () => {
        setclicked(true)
        fetch(`/api/meals`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(addedMeals)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
        setAddedMeals({
            title: "",
            description: "",
            location: "",
            when: "",
            price: "",
            max_reservations: ""})
    }

    
  return (
    <div className='add-meal-form'>
        <h1>Add Your Favorite Meal</h1>
        <label for="meal-title">Meal title</label>
        <input type="text" onChange={handelMealName} value={addedMeals.title}/>
        <label for="meal-description">Meal description</label>
        <textarea onChange={handelMealDescription} value={addedMeals.description}></textarea>
        <label for="meal-location">Location</label>
        <input type="text" onChange={handelLocation} value={addedMeals.location}/>
        <label for="meal-Date">Date</label>
        <input type="datetime-local" onChange={handelDate} value={addedMeals.when}/>
        <label for="meal-price">Meal price</label>
        <input type="tel" onChange={handelMealPrice} value={addedMeals.price}/>
        <label for="meal-max-reservation">Max reservation</label>
        <input type="tel" onChange={handelMaxReservation} value={addedMeals.max_reservations}/>
        <button onClick={handelAddMeal}>Add meal</button>
        {clicked ? <h1>Your meal is added!</h1> : null}
    </div>
  )
}

export default AddMeal