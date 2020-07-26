onst express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const app = express();

const 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});