let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");

let PORT = process.env.PORT || 8080;

let app = express();
app.use(express.static(__dirname + "/public"));

app.unsubscribe(bodyParser.urlencoded({
    extended: false
}));



app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/burgers/update", routes);
app.use("/burgers/create", routes);


app.listen(PORT);
console.log("LISTENING ON PORT: " + PORT);