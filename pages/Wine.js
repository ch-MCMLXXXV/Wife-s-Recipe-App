import axios from 'axios';
import { useState } from 'react';

export default function Wine() {
   const [food, setFood] = useState(null);
   const [price, setPrice] = useState(null);
   const [loading, setLoading] = useState(false);

   const getWine = async () => {
      try {
         setLoading(true);
         const res = await axios.get('/api/wine', {
            params: { food, maxPrice },
         });
         const data = res;
         console.log(res);
         setLoading(false);
         setFood(data.results);
      } catch (error) {
         console.error(error);
         setLoading(false);
      }
   };

   return (
      <div>
         <h1>Need a Wine?</h1>
         <form
            className='sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex'
            onSubmit={(e) => {
               getWine();
               e.preventDefault();
               e.stopPropagation();
            }}
         >
            <div className='mt-5 flex sm:flex-row flex-col justify-start'>
               <div className='sm:w-1/3 w-full'>
                  <label className='block text-primary text-sm'>
                     Food
                  </label>
                  <input
                     className='mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none'
                     type='text'
                     placeholder='Enter food'
                     onChange={(e) => {
                        setFood(e.target.value);
                     }}
                  ></input>
               </div>
               <div className='sm:ml-10 sm:w-1/3 w-full'>
                  <label className='block text-primary text-sm'>
                     Price
                  </label>
                  <input
                     className='mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none'
                     type='number'
                     placeholder='50'
                     onChange={(e) => {
                        setPrice(e.target.value);
                     }}
                  ></input>
               </div>
            </div>
         </form>
      </div>
   );
}
