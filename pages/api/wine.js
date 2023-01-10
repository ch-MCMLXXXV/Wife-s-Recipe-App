import axios from 'axios';

export default async function handler(req, res) {
   const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing',
      params: {
         food: req.query.food,
         maxPrice: req.query.price,
      },
      headers: {
         'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
         'X-RapidAPI-Host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
   };

   try {
      const response = await axios(options);
      res.status(200).json(response.data);
   } catch (error) {
      console.log(error);
      res.status(500).json(error);
   }
}
