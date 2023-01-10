import axios from 'axios';
import { useState } from 'react';

export default function Wine() {
   const [food, setFood] = useState(null);
   const [maxPrice, setmaxPrice] = useState(null);
   const [response, setResponse] = useState(null);
   const [loading, setLoading] = useState(false);

   const getWine = async () => {
      try {
         setLoading(true);
         const res = await axios.get('/api/wine', {
            params: { food, maxPrice },
         });
         // const { data } = res;
         console.log(res);
         setLoading(false);
         setResponse(res.data);
         console.log(res.data);
      } catch (error) {
         console.error(error);
         setLoading(false);
      }
   };

   return (
      <div className='flex flex-col md:px-12 px-0 relative bg-background items-center min-h-screen'>
         <h1 className='text-6xl font-bold text-active mt-20'>
            Need a Wine?
         </h1>
         <form
            className='sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex'
            onSubmit={(e) => {
               getWine();
               e.preventDefault();
               e.stopPropagation();
            }}
         >
            <div className='flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active'>
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
                        setmaxPrice(e.target.value);
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
      </div>
   );
}
