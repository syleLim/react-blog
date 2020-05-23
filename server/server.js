const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const cors = require("cors");
const json = require("../DB/information.json")



app.use(cors());
app.use(bodyParser.json());
app.use("/api", (req, res) => res.json(json));

const server = app.listen(port, () => {
	console.log("server : ", server.address().address);
	console.log("port : ", server.address().port)
})