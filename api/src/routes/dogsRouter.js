const { Router } = require("express");
const { getDogsHandler } = require("../handlers/getDogsHandler");
const { getDogByIdHandler } = require("../handlers/getDogByIdHandler");
const { findDogsHandler } = require("../handlers/findDogsHandler");
const { postNewDogHandler } = require("../handlers/postNewDogHandler");

const dogsRouter = Router();

dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/name", findDogsHandler);
dogsRouter.get("/:id", getDogByIdHandler);
dogsRouter.post("/", postNewDogHandler);

module.exports = {
	dogsRouter,
};
