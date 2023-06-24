import styles from "../Detail/Detail.modules.css"
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

const detail = function (props) {
   // console.log(useParams())
   {/* const  {id}  = useParams();
    const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${character.id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]); */ }

    return (
        <div>
            <h2>Este es el Detail</h2>
        </div>)
}

export default detail;