const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./routes/html')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});