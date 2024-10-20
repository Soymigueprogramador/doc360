
import styles from "./Dropdown.module.scss"
import { useNavigate } from "react-router-dom";
export const Dropdown=({ options, onClose })=>{
   const navigate = useNavigate();
   return(
       <div className={styles.dropdown}>
             <ul>
             {options.map((option, index) => (
         <li key={index} onClick={() => {
           if (option.path) {
             navigate(option.path);
           }
           if (option.action) {
             option.action();
           }
           onClose();
         }}>
           {option.label}
         </li>
       ))}
             </ul>
       </div>
   )
}
