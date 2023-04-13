const { Router } = require("express");
const {getTempDogsHandler} = require("../handlers/getTempDogsHandler")

const tempRouter = Router();

tempRouter.get("/", getTempDogsHandler);

module.exports = {
	tempRouter,
};