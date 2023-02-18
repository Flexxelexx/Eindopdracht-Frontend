// import React, { useState } from "react";
// import { MenuItems } from "./MenuItems";
// import "./Dropdown.css";
// import { NavLink } from "react-router-dom";
//
// function Dropdown() {
//
//   const [click, setClick] = useState(false);
//
//   const handleClick = () => setClick(!click);
//
//   return (
//     <>
//         <ul
//           onClick={handleClick}
//           className={click ? "dropdown-menu clicked" : "dropdown-menu"}
//         >
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <NavLink
//                   className={item.cName}
//                   to={item.path}
//                   onClick={() => setClick(false)}
//                 >
//                   {item.icon}
//                   {item.title}
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//     </>
//   );
// }
//
//
//
// const [click, setClick] = useState(false);
// const [dropdown, setDropdown] = useState(false);
//
// // const handleClick = () => setClick(!click);
// const closeMobileMenu = () => setClick(false);
//
// const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//         setDropdown(false);
//     } else {
//         setDropdown(true);
//     }
// };
//
// const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//         setDropdown(false);
//     } else {
//         setDropdown(false);
//     }
// };
// export default Dropdown;
