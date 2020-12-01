const express = require("express");
const app = express();
const postsRoute = require('./routes/posts');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.json())
app.use(cors());


app.use('/posts', postsRoute);



//Connect to DB
const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('DB CONNECTED')
});



//Port listener
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
