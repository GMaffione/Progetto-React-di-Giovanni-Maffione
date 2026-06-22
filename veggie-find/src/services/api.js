import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/recipes";
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

export const searchRecipes = async (query) => {
  const response = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      query,
      diet: "vegetarian",
      addRecipeInformation: true,
      number: 12,
      apiKey: API_KEY,
    },
  });
  return response.data.results;
};

export const getRecipeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });
  return response.data;
};