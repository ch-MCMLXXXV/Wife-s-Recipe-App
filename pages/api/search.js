import axios from 'axios';

export default async function handler(req, res) {
   const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      params: {
         query: req.query.keyword,
         diet: req.query.diet,
         intolerances: req.query.intolerances,
         excludeIngredients: req.query.excludeIngredients,
      },
      headers: {
         'X-RapidAPI-Host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
         'X-RapidAPI-Key': NEXT_PUBLIC_RAPIDAPI_KEY,
      },
   };

   try {
      let response = await axios(options);
      res.status(200).json(response.data);
   } catch (error) {
      console.error(error.response);
   }
}
