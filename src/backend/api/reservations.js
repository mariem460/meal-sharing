const express = require("express");
const { max } = require("../database");
const router = express.Router();
const knex = require("../database");
//Reservation
//	Returns all reservations
router.get("/", async (request, response) => {
    let myTable = await knex ("Reservation");
    response.json(myTable);
})
//add new reservation
router.post("/", async (request, response) => {
    const newReservation = request.body;
    const insertedReservation = await knex("Meal").insert({
      ...newReservation,
      created_date: new Date(newReservation.created_date)
    })
    const inserted = await knex("Reservation")
      .where('id', insertedReservation[0])
      response.json(inserted)
  });

//returns reservation by id
router.get("/:id", async (request, response) => {
    const requiredReservation = await knex("Reservation")
      .where("id", `${request.params.id}`);
      response.send(requiredReservation);
  });

//	Updates the reservation by id
router.put("/:id", async(request, response)=> {
    const updatedReservation = await knex('Reservation')
    .where({ id: request.params.id })
    .update({ contact_name: request.body.title})
    response.json(updatedReservation);
  });

//Deletes the reservation by id
router.delete("/:id", async(request, response)=> {
    const deletedReservation = await knex('Meal')
    .where({ id: request.params.id })
    .del()
    response.json(`${deletedReservation} is deleted`);
  });


module.exports = router;