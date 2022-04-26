import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ReservationForm.css"
function ReservationForm({mealTitle, mealPrice, maxReservations}) {
    const {id} = useParams();
    const [clicked, setClicked] = useState(false)
    const [reservation, setReservation]= useState([])
    const [inputsValues, setInputValues]= useState(
        {   id: id,
            phoneNumber: "",
            name: "",
            email: "",
            guests: ""
        })

    useEffect(()=> {
        fetch(`http://localhost:5000/api/reservations/${id}`)
            .then((response)=> response.json())
            .then((data)=> setReservation(data))
    })
    const numberOfGuests = reservation.map((reservation)=> reservation.number_of_guests);
    const availbleSeats = maxReservations - numberOfGuests;
    const handelTelNumber = (e) => {
        setInputValues({...inputsValues, phoneNumber: e.target.value })
    }
    const handelName = (e) => {
        setInputValues({...inputsValues, name: e.target.value })
    }
    const handelEmail = (e) => {
        setInputValues({...inputsValues, email: e.target.value})
    }
    const handelNumberOfGuests = (e) => {
        setInputValues({...inputsValues, guests: e.target.value})
    }
    const handelClick = () => {
        fetch("http://localhost:5000/api/reservations",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(inputsValues)
        })
        .then(function() { 
            setClicked(true)
            setInputValues({
                id: id,
                phoneNumber: "",
                name: "",
                email: "",
                guests: ""})
        })
        .catch(function(res){
             console.log(res) 
            })
    }
    
  return (
    <div>
        <h3>Meal: {mealTitle}</h3>
        <h3>Price: {mealPrice} kr</h3>
        <h3>Max Reservations: {maxReservations}</h3>
        
        {availbleSeats !== maxReservations ?  <h3>Available seats: {availbleSeats}</h3> : null }
        {availbleSeats === maxReservations ? <h1> Oups! There Is No longer Available Seats For This Meal </h1>
          :<div className='reservation-form'>
          <label for="phoneNumber">Enter your Phone Number</label>
          <input type="tel" value={inputsValues.phoneNumber} onChange={handelTelNumber}/>
          <label for="name">Enter your Name</label>
          <input type="text" value={inputsValues.name} onChange={handelName}/>
          <label for="email">Enter your email</label>
          <input type="email" value={inputsValues.email} onChange={handelEmail}/>
          <label for="guests">Number of guests</label>
          <input type="number" value={inputsValues.guests} onChange={handelNumberOfGuests}/>
          {inputsValues.guests> availbleSeats ? <h2>You have only {availbleSeats} available seats.</h2>: null}
          </div>}
          {inputsValues.guests <= availbleSeats && inputsValues.guests !== 0 ? <button onClick={handelClick}>Create reservation</button> : null}
          {clicked ? <h1>Your reservation is done!</h1> : null}

         
    </div>
  )
}
export default ReservationForm