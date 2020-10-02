require("dotenv").config();

const express = require('express');
const app = express();

//My routes 
const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes");

//Middlewares
app.use(express.json());

//Paths
app.use("/auth/", authRoutes);
app.use("/api/", emailRoutes);

app.get('*', (req, res) => {
    res.status(404).send('route is undefined');
  });

//PORT
const port = process.env.PORT || 3000;

//Starting a server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});