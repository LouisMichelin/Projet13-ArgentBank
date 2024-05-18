import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
// import { fetchUsers } from "../features/counter/counterSlice";

const Counter = () => {
   const dispatch = useDispatch();
   const totalCounter = useSelector((state) => state.counter.totalCounter);

   return (
      <>
         <div>
            <h2>Mon Premier Redux en React JSX</h2>
            <div>Compteur: {totalCounter}</div>
            <div>
               <button onClick={() => dispatch(increment())}>(+++)</button>
               <button onClick={() => dispatch(decrement())}>(---)</button>
            </div>
         </div>
      </>
   );
};

export default Counter;
