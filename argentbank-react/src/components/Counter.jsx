import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../features/counter/counterSlice";

const Counter = () => {
   const dispatch = useDispatch();

   const count = useSelector((state) => {
      state.counter;
   });

   const testIncrement = () => {
      dispatch(counterSlice.actions.increment);
   };

   return (
      <>
         <div>
            <h2>Mon Premier Redux en React JSX</h2>
            <div>Compteur: {count ? count : "pas encore..."}</div>
            <div>
               <button onClick={() => testIncrement()}>Increment</button>
               <button
                  onClick={() => dispatch(counterSlice.actions.decrement())}
               >
                  Decrement
               </button>
            </div>
         </div>
      </>
   );
};

export default Counter;
