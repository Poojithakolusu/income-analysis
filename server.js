const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const d = req.body;

  let total =
    Number(d.rent || 0) +
    Number(d.homeEmi || 0) +
    Number(d.vehicleEmi || 0) +
    Number(d.petrol || 0) +
    Number(d.food || 0) +
    Number(d.education || 0) +
    Number(d.bills || 0) +
    Number(d.shopping || 0) +
    Number(d.gifts || 0) +
    Number(d.insurance || 0) +
    Number(d.medical || 0);

  let income = Number(d.income || 0);
  let savings = income - total;

  res.json({
    income,
    totalExpenses: total,
    savings,
    emergency: Math.floor(savings * 0.2),
    investment: Math.floor(savings * 0.3)
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});