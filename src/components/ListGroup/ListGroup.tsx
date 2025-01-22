import { useState } from "react";
import "./ListGroup.css";


//{items: [] of string, heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  //(item:string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //The hook (stateHook) returns an array. The first element of the array is a
  //variable and the second is an updater function. When button is clicked, we
  //call the updater function which will assign the given index to selectedIndex
  //Here it is defaulted at -1

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* Inline css is considered bad practice */}
      <ul className='list-group' style={{backgroundColor: 'yellow'}}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import './ListGroup.css';
// import styled from 'styled-components';

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// interface ListItemProps {
//   active: boolean;
// }

// const ListItem = styled.li<ListItemProps>`
// padding: 5px 0;
// background: ${(props => props.active ? 'blue': 'none')}
// `;

// //{items: [] of string, heading: string}
// interface ListGroupProps {
//   items: string[];
//   heading: string;
//   //(item:string) => void
//   onSelectItem: (item: string) => void;
// }

// function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
//   //Hook
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   //The hook (stateHook) returns an array. The first element of the array is a
//   //variable and the second is an updater function. When button is clicked, we
//   //call the updater function which will assign the given index to selectedIndex
//   //Here it is defaulted at -1

//   return (
//     <>
//       <h1>{heading}</h1>
//       {items.length === 0 && <p>No item found</p>}
//       <List>
//         {items.map((item, index) => (
//           <ListItem
//           active = {index === selectedIndex}
//             className={
//               selectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             key={item}
//             onClick={() => {
//               setSelectedIndex(index);
//               onSelectItem(item);
//             }}
//           >
//             {item}
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// }

// export default ListGroup;
