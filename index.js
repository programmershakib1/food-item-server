const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const foods = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Banana", price: 30 },
  { id: 3, name: "Orange", price: 80 },
];

app.get("/", (req, res) => {
  res.send("Food item server is running");
});

app.get("/foods", (req, res) => {
  res.send(foods);
});

app.post("/foods", (req, res) => {
  console.log("ok");
  console.log(req.body);
  const newFood = req.body;
  newFood.id = foods.length + 1;
  foods.push(newFood);
  res.send(newFood);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
