const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');

require("dotenv").config();

const items = require('./routes/api/Items.js')

// set up express

const app = express();
app.use(express.json());
app.use(cors());
//BodyParser Middleware
app.use(bodyParser.json());

// set up mongoose
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set up routes

app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todo"));
// Use Routes
app.use('/api/Items', items);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
