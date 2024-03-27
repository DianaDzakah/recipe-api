import { Router } from "express";
import multer from"multer"
import {
  addRecipe,
  deleteRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
} from "../controllers/recipes.controller.js";

//Create multer upload middelware
const upload = multer({dest:"uploads"})
//Create recipes router
const router = Router();

//Define Route for POST
router.post("/recipes", upload.single("image"), addRecipe);
//Define Route for GET all recipes
router.get("/recipes", getRecipes);
//Define Route for GET by id
router.get("/recipes/:id", getRecipe);
//Define Route for PATCH by id
router.patch("/recipes/:id", updateRecipe);
//Define Route for DELETE by id
router.delete("/recipes/:id", deleteRecipe);

export default router;
