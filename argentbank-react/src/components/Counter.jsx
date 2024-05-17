import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
// import { fetchUsers } from "../features/counter/counterSlice";
import { useState } from "react";
import axios from "axios";

const Counter = () => {
   // const [users, setUsers] = useState([]);
   const [userData, setUserData] = useState([]);
   //////////////////////////////////////////////////////////////////

   // useEffect(() => {
   //    const fetchData = async () => {
   //       const { test123 } = await axios.get(
   //          "http://localhost:3001/api/v1/user"
   //       );
   //       setUserData(test123);
   //       console.log(userData);
   //    };
   //    fetchData();
   // }, []);

   //////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////
   // useEffect(() => {
   //    const getAds = async () => {
   //       const res = await axios.get("127.0.0.1:3001");
   //       console.log(res.data);
   //    };
   //    getAds();
   // }, []);
   //////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////
   const dispatch = useDispatch();
   const totalCounter = useSelector((state) => state.counter.totalCounter);
   // const user = useSelector((state) => state.user);

   // useEffect(() => {
   //    dispatch(fetchUsers());
   // }, []);
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
            {/* <div>{userData.firstName}</div>
            <div>{userData.lastName}</div>
            <div>{userData.email}</div> */}
         </div>
      </>
   );
};

export default Counter;
