import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
  //Add recipe to the data base
  const createResult = await RecipeModel.create(req.body);
  //Return response
  res.status(201).json(createResult);
};

export const getRecipes = async (req, res) => {
  //Get all recipes from dadabase
  const findResults = await RecipeModel.find();
  //Return response
  res.status(200).json(findResults);
};

export const getRecipe = (req, res) => {
  res.send("acquire single recipe");
};

export const updateRecipe = (req, res) => {
  res.send("patch single recipe");
};

export const deleteRecipe = (req, res) => {
  res.send("recipe deleted");
};
