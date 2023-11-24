const express = require('express');
const App = express();


App.get("/rest/v1/tours", (req,res) => {
  res.status(200).json([{
    name: "Mangalore Tour",
    place: "Mangalore"
  },
  {
    name: "Bangalore Tour",
    place: "Bangalore"
  },
  {
    name: "Mysore Tour",
    place: "Mysore"
  }
])
});

App.listen(3000, () => {
  console.log("Listening on the port 3000");
})

