import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
// import { fetchUsers } from "../features/counter/counterSlice";

const Counter = () => {
   const dispatch = useDispatch();
   const totalCounter = useSelector((state) => state.counter.totalCounter);

   const TOKEN_TEST = useSelector((state) => state.token.token);

   return (
      <>
         <div>
            <h1 style={{ color: "white" }}>TOKEN TEST</h1>
            <div style={{ color: "white" }}>{TOKEN_TEST}</div>
            <span style={{ color: "white" }}>
               ------------------------------------------
            </span>
         </div>
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
