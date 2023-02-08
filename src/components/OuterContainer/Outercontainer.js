// import React from 'react';
// import styles from '../OuterContainer/Outercontainer.module.css';
// import Innercontainer from "../InnerContainer/Innercontainer";
// import useLocalStorage from "use-local-storage";
//
// const OuterContainer = ({ children }) => {
//
//     const defaultDark = window.matchMedia('(prefers-color-scheme: donker)').matches;
//     const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'donker' : 'licht');
//
//     const switchTheme = () => {
//         const newTheme = theme === 'donker' ? 'licht' : 'donker';
//         setTheme(newTheme)
//     }
//
//     return (
//         <div className={styles.container}>
//             <Innercontainer>
//                 {children}
//             </Innercontainer>
//         </div>
// );
// };
//
// export default OuterContainer;
