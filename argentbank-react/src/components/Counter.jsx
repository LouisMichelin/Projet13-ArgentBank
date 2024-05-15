import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { fetchUsers } from "../features/counter/counterSlice";
import { useState } from "react";
import axios from "axios";

const Counter = () => {
   // const [users, setUsers] = useState([]);
   const [userData, setUserData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         await axios.get("http://localhost:3001/").then((res) => {
            setUserData(res.data);
            console.log(userData);
         });
      };
      fetchData();
   }, []);

   //////////////////////////////////////////////////////////////////
   const dispatch = useDispatch();
   const totalCounter = useSelector((state) => state.counter.totalCounter);
   // const user = useSelector((state) => state.user);

   useEffect(() => {
      dispatch(fetchUsers());
   }, []);
   //////////////////////////////////////////////////////////////////
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
         <div>
            <h1>ICI, ON VEUT FETCH LES USERS DATA</h1>
            {/* {user.loading && <div>Loading...</div>} */}
            {/* {!user.loading && user.error ? (
               <div>Error: {user.error}</div>
            ) : null} */}
            {/* {!user.loading && user.users.length ? (
               <ul>
                  {user.users.map((user) => (
                     <li key={user.id}>{user.name}</li>
                  ))}
               </ul>
            ) : null} */}
            {/* <div key={user.id}>{user.name}</div> */}
         </div>
      </>
   );
};

export default Counter;
