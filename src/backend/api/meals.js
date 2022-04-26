const express = require("express");
const { max } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  let myTable = knex ("Meal");
  //Get meals that has a price smaller than maxPrice
  if ("maxPrice" in request.query) {
    myTable = myTable.where("price", "<=", request.query.maxPrice);
  }
  //Get meals that still has available reservations
  if ("availableReservations" in request.query) {
    const reservationtable = knex("Reservation")
     myTable = myTable
    .join(`${reservationtable}`, "Meal.id", "=", `${reservationtable}.meal_id`)
    .where(`${reservationtable}.number_of_guests`, "<", "Meal.max_reservations");
  }
  //Get meals that partially match a title
  if ("title" in request.query) {
    myTable = myTable.where("title", "like", `%${req.query.title}%`);
  }
  //	Get meals that has been created after the date
  if ("createdAfter" in request.query) {
    myTable = myTable.where("created_date", ">=", new Date(req.query.createdAfter));
  }
  //Only specific number of meals
  if ("limit" in request.query) {
    myTable = myTable.limit(request.query.limit);
  }
  //Only specific number of meals with a specific max price
  if ("limit" in request.query && "maxPrice" in request.query) {
    myTable = myTable.where("price", "<=", request.query.maxPrice).limit(request.query.limit);
  }
  const meals = await myTable;
  response.json(meals);
});


//Returns meal by id
router.get("/:id", async (request, response) => {
  const requiredMeal = await knex("Meal")
    .where("id", `${request.params.id}`);
    response.send(requiredMeal);
});

//Updates the meal by id
router.put("/:id", async(request, response)=> {
  const updatedMeal = await knex('Meal')
  .where({ id: request.params.id })
  .update({ title: request.body.title})
  response.json(updatedMeal);
})

//add new  meal
router.post("/", async (request, response) => {
  const newMeal = request.body;
  const insertedMeal = await knex("Meal").insert({
    ...newMeal,
    when: newMeal.when,
    created_date: new Date()
  })
  const inserted = await knex("Meal")
    .where('id', insertedMeal[0])
    response.json(inserted)
});

//Delete the meal by id
router.delete("/:id", async(request, response)=> {
  const deletedMeal = await knex('Meal')
  .where({ id: request.params.id })
  .del()
  response.json(`${deletedMeal} is deleted`);
});








module.exports = router;
