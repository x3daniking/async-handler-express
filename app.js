const express = require("express");
const app = express();
const testRouter = require("./routes/testRouter");

app.use(express.json());

app.listen(4200, () => {
	console.log("Server started listening on port 4200");
});

app.use(testRouter);

app.use((err, req, res, next) => {
	if (err) {
		res.status(500).json({ error: "Exception occurred on the server!" });
	}
});
