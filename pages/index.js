import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home() {
   const [keyword, setKeyword] = useState('');
   const [diet, setDiet] = useState('');
   const [exclude, setExclude] = useState(null);
   const [intolerances, setIntolerances] = useState(null);
   const [response, setResponse] = useState(null);
   const [loading, setLoading] = useState(false);

   const getRecipes = async () => {
      try {
         diet === 'none' ? diet == '' : null;
         setLoading(true);
         const res = await axios.get('api/search/', {
            params: {
               keyword,
               exclude,
               diet,
               intolerances,
            },
         });
         const { data } = res;
         console.log(res);
         setLoading(false);
         setResponse(data.results);
      } catch (error) {
         console.error(error);
         setLoading(false);
      }
   };

   return (
      <div className=' flex flex-col md:px-12 px-0 relative bg-background items-center min-h-screen'>
         <h1 className=' text-6xl font-bold text-active mt-20'>
            Need a Recipe?
         </h1>
         <h2 className=' text-primary text-2xl font-light mt-5'>
            Lets look it up!
         </h2>
         <form
            className='sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex'
            onSubmit={(e) => {
               getRecipes();
               e.preventDefault();
               e.stopPropagation();
            }}
         >
            <input
               type='text'
               className=' flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active'
               placeholder='Enter a recipe or ingredient'
               onChange={(e) => {
                  setKeyword(e.target.value);
                  setResponse(null);
               }}
            />

            <div className=' mt-5 flex sm:flex-row flex-col justify-start'>
               <div className=' sm:w-1/3 w-full'>
                  <label className=' block text-primary text-sm'>
                     {' '}
                     Diet
                  </label>
                  <select
                     className=' mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none'
                     onChange={(e) => {
                        setDiet(e.target.value);
                     }}
                  >
                     {[
                        'none',
                        'vegetarian',
                        'vegan',
                        'ovo vegetarian',
                        'lacto vegetarian',
                        'pescetarian',
                     ].map((diet) => {
                        return (
                           <option key={diet} value={diet}>
                              {diet}
                           </option>
                        );
                     })}
                  </select>
               </div>
               <div className=' sm:ml-10 sm:w-1/3 w-full'>
                  <label className=' block text-primary text-sm'>
                     Allergy
                  </label>
                  <input
                     className='mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none '
                     type='text'
                     placeholder='Type of Allergy ?'
                     onChange={(e) => {
                        setIntolerances(e.target.value);
                     }}
                  />
               </div>
               <div className=' sm:ml-10 sm:w-1/3 w-full'>
                  <label className=' block text-primary text-sm'>
                     Exclude Ingredients
                  </label>
                  <input
                     className='mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none '
                     type='text'
                     placeholder='Durian'
                     onChange={(e) => {
                        setExclude(e.target.value);
                     }}
                  ></input>
               </div>
            </div>
            <button
               className='mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10'
               type='submit'
            >
               {loading ? <>Loading...</> : <>Search</>}
            </button>
         </form>
         {response && (
            <div classname='mt=10'>
               <div className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                  {response.map((recipe) => (
                     <div key={recipe.id} className='pt-6'>
                        <div className=' flow-root bg-light rounded-lg px-4 pb-8'>
                           <div className=' mt-6'>
                              <div className=' flex items-center justify-center'>
                                 <span className=' p-2'>
                                    <Image
                                       src={
                                          `http://spoonacular.com/recipeImages/` +
                                          recipe.image
                                       }
                                       className=' w-full h-full rounded-lg'
                                       alt={recipe.id}
                                    />
                                 </span>
                              </div>
                              <div className=' text-center justify-center items-center'>
                                 <h3 className=' mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight'>
                                    {recipe.title}
                                 </h3>
                                 <span className=' mt-2 text-sm text-secondary block'>
                                    Ready in {recipe.readyInMinutes}
                                    {''}
                                    minutes - {recipe.servings}
                                    {''}
                                    Servings
                                 </span>
                                 <a
                                    className=' mt-4 text-sm text-active block'
                                    href={recipe.sourceUrl}
                                 >
                                    See Recipe
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
}
