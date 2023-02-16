const router = require("express").Router();
const catchAsync = require("../middlewares/catchAsync");

router.get(
	"/",
	catchAsync(async (req, res, next) => {
		throw new Error("Exception occured on the server!");
	}),
);

// router.get("/", async (res, req, next) => {
// 	throw new Error("Exception occured on the server!");
// });

module.exports = router;
