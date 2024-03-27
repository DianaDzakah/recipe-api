import { RecipeModel } from "../models/recipe.js";
//always put the codes in the controllers a try catch and hand over to next

export const addRecipe = async (req, res, next) => {
  try {
    console.log(req.body)
    //Add recipe to the data base
    const createResult = await RecipeModel.create({
      ...req.body,
      image:req.file.filename
    });
    //Return response
    res.status(201).json(createResult);
  } catch (error) {
    next(error);
  }
};

export const getRecipes = async (req, res, next) => {
  try {
    //Get all recipes from dadabase
    const findResults = await RecipeModel.find();
    //Return response
    res.status(200).json(findResults);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
  //Get single recipe by id
  try {
    const findByIdResult = await RecipeModel.findById(req.params.id);
    // return 404 if no recipe is found
    if (findByIdResult === null) {
      res.status(404).json({
        message: `Recipe with ID:${req.params.id} not found`,
      });
    } else {
      // return response
      res.status(200).json(findByIdResult);
    }
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = (req, res, next) => {
  try {
    res.send("patch single recipe");
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe = (req, res, next) => {
  try {
    res.send("recipe deleted");
  } catch (error) {
    next(error);
  }
};
