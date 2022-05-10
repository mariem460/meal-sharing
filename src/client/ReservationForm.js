import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ReservationForm.css"
function ReservationForm({mealTitle, mealPrice, maxReservations, mealId}) {
    const [clicked, setClicked] = useState(false)
    const [reservation, setReservation]= useState([])
    const [inputsValues, setInputValues]= useState(
        {   id: mealId,
            phoneNumber: "",
            name: "",
            email: "",
            guests: ""
        })

    useEffect(()=> {
        fetch(`/api/reservations/${mealId}`)
            .then((response)=> response.json())
            .then((data)=> setReservation(data))
    }, [])
    const numberOfGuests = reservation.map((reservation)=> reservation.number_of_guests);
    const availbleSeats = maxReservations - numberOfGuests;
    console.log("number of guets", numberOfGuests );
    console.log("type of number of guets", typeof numberOfGuests );
    console.log("max resev", maxReservations)
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
        fetch(`/api/reservations`,
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
                id: mealId,
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
        <h3>Available seats:{availbleSeats} </h3>
        {availbleSeats <= maxReservations ? <div className='reservation-form'>
        <label for="phoneNumber">Enter your Phone Number</label>
        <input type="tel" value={inputsValues.phoneNumber} onChange={handelTelNumber}/>
        <label for="name">Enter your Name</label>
        <input type="text" value={inputsValues.name} onChange={handelName}/>
        <label for="email">Enter your email</label>
        <input type="email" value={inputsValues.email} onChange={handelEmail}/>
        <label for="guests">Number of guests</label>
        <input type="number" value={inputsValues.guests} onChange={handelNumberOfGuests}/>
        {availbleSeats === 0  ? <h1>Oups! we dont have seats for this meal </h1> : null}
        {inputsValues.guests> availbleSeats ? <h2>You have only {availbleSeats} available seats.</h2>: null}
        {inputsValues.guests <= availbleSeats && inputsValues.guests !== 0 ? <button onClick={handelClick}>Create reservation</button> : null}
        {clicked ? <h1>Your reservation is done!</h1> : null}
        </div> 
         :
         <h3>Oups!</h3>}
        {availbleSeats === numberOfGuests ? <h3>There is no available seats!</h3> : null}
         
    </div>
  )
}
export default ReservationForm