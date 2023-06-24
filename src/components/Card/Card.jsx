import styles from "../Card/Card.module.css"
import { Link, NavLink } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
   
      <div className={styles.Container}>
         <div className={styles.buttonContainer}>
            <button
               onClick={onClose}>X
            </button>
         </div>
         <div className={styles.dataContainer}>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
         </div>
          <Link to={`/detail/${id}`} >
            <img className={styles.image} src={image} alt={name} />
          </Link> 
      </div>

   );
}
