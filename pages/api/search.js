import axios from 'axios';

export default async function handler(req, res) {
   // const options = {
   //    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
   //    params: {
   //       query: req.query.keyword,
   //       diet: req.query.diet,
   //       intolerances: req.query.intolerances,
   //       excludeIngredients: req.query.exclude,
   //       addRecipeInformation: true,
   //       number: '20',
   //       offset: '0',
   //    },
   //    headers: {
   //       'X-RapidAPI-Host':
   //          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
   //       'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
   //    },
   // };

   // try {
   //    let response = await axios(options);
   //    res.status(200).json(response.data);
   // } catch (error) {
   //    console.error(error.response);
   // }

   const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
      params: {
         query: req.query.keyword,
         diet: req.query.diet,
         excludeIngredients: req.query.exclude,
         intolerances: req.query.intolerances,
         number: '20',
         offset: '0',
      },
      headers: {
         'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
         'X-RapidAPI-Host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
   };

   try {
      let response = await axios(options);
      res.status(200).json(response.data);
   } catch (error) {
      console.error(error.response);
   }
}
