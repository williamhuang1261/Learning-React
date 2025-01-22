

// import userService, { User } from "./services/user-service";
// import useUsers from "./hooks/useUsers";

// const App = () => {
//     const {users, error, isLoading, setUsers, setError} = useUsers();

//   const deleteUser = (user: User) => {
//     //A problem with this method occurs when the end user's connection is slow
//     //and error occurs. It will constantly created a new Original users only
//     //with the items that are still visble in the ui. Thus, if I have time to
//     //Delete 5/10 items in my UI, not all 10 will reappear, but only the last
//     //one I create, so 6 will be remaining

//     const originalUsers = [...users];

//     setUsers(users.filter((u) => u.id != user.id));
//     userService.delete(user.id).catch((err) => {
//       setError(err.message);
//       setUsers(originalUsers);
//     });
//   };

//   const addUser = () => {
//     const originalUsers = [...users];
//     const newUser = { id: 0, name: "Mosh" };
//     setUsers([...users, newUser]);
//     userService
//       .create(newUser)
//       .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
//       .catch((err) => {
//         setError(err.message);
//         setUsers(originalUsers);
//       });
//   };

//   const updateUser = (user: User) => {
//     const originalUsers = [...users];
//     const updatedUser = { ...user, name: user.name + "!" };
//     setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

//     userService.update(updatedUser).catch((err) => {
//       setError(err.message);
//       setUsers(originalUsers);
//     });
//   };

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       {isLoading && <div className="spinner-border"></div>}
//       <button className="btn btn-primary mb-3" onClick={addUser}>
//         Add
//       </button>
//       <ul className="list-group">
//         {users.map((user) => (
//           <li
//             key={user.id}
//             className="list-group-item d-flex justify-content-between"
//           >
//             {user.name}
//             <div>
//               <button
//                 className="btn btn-outline-secondary mx-1"
//                 onClick={() => updateUser(user)}
//               >
//                 Update
//               </button>
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => deleteUser(user)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import ProductList from "./components/ProductList";

// const App = () => {
//   const [category, setCategory] = useState("");
//   useEffect(() => {});

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category}/>
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////

//  // useEffect()

// import { useEffect, useRef } from "react";

// const connect = () => {
//   console.log("Connecting");
// };
// const disconnect = () => {
//   console.log("Disconnecting");
// };

// const App = () => {
//   const ref = useRef<HTMLInputElement>(null);

//   //afterRender
//   useEffect(() => {
//     // //Side effect
//     // if (ref.current) ref.current.focus();

//     connect();
//     return () => disconnect();
//   });

//   useEffect(() => {
//     document.title = "My App";
//   });

//   return (
//     <div>
//       <input ref={ref} type="text" className="form-control" />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////

// // FORM
// import Form from './components/Form';

// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App

// import { useState } from "react";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";

// const App = () => {
//   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////

//  UPDATING ARRAY

// import { useState } from "react";
// import {produce} from "immer";

// function App() {
//   // const [tags, setTags] = useState(['happy', 'cheerful']);

//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     // //Add
//     // setTags([...tags, 'exciting']);
//     // //Remove
//     // setTags(tags.filter(tag => tag !== 'happy'));
//     // //Update
//     // setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
//     // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////

//  NESTED OBJECT EXAMPLE

// import { useState } from "react";

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "San Francisco",
//       zipCode: 94111,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 94112 },
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////

// import { useState } from "react";

// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({
//       ...drink,
//       price: 6,
//     });
//   };

//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////

// import Message from "./components/Message";

// function App() {
//   return (
//     <div>
//       <Message />
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////

// import { useState } from "react";

// function App() {
//   // const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('')
//   const [person, setPerson] = useState({
//     firstName: "",
//     lastName: "",
//   });
//   //Avoid deeply nested structure for hooks

//   const [isLoading, setLoading] = useState(false);

//   return <div></div>;
// }

// export default App;
///////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";

// function App() {
//   const [isVisible, setVisiblity] = useState(false);
//   let count = 0;

//   const handleClick = () => {
//     setVisiblity(true);
//     count++;
//     console.log(isVisible);
//   };

//   return <div>
//     <button onClick={handleClick}>Show</button>
//   </div>;
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////

// import Like from './components/Like';

// const App = () => {
//   return (
//     <div>
//       <Like onClick={() => console.log('Clicked')}/>
//     </div>
//   )
// }

// export default App

////////////////////////////////////////////////////////////////////////////////

// import Button from './components/Button/Button';

// function App() {
//   return (
//     <div>
//       <Button onClick={()=> {console.log('Clicked')}}>
//         Button
//       </Button>
//     </div>
//   )
// }

// export default App

////////////////////////////////////////////////////////////////////////////////

// import { AiFillApple } from "react-icons/ai";

// function App() {
//   return (
//     <div>
//       <AiFillApple color='blue' size='60'/>
//     </div>
//   )
// }

// export default App

////////////////////////////////////////////////////////////////////////////////

// import ListGroup from "./components/ListGroup/index";
// import './App.css';

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   ); //<Message /> Self closing syntax
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   ); //<Message /> Self closing syntax
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////

// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import { useState } from "react";

// const App = () => {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <>
//       {/* <div>
//         <Alert>
//           Hello <span>World</span>
//         </Alert>
//       </div> */}
//       <div>
//         {alertVisible && (
//           <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//         )}
//         <Button
//           color="primary"
//           onClick={() => {
//             setAlertVisibility(true);
//           }}
//         >
//           Button
//         </Button>
//       </div>
//     </>
//   );
// };

// export default App;

///////////////////////////////////////////////////////////////////////////////
