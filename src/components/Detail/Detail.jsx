import styles from "../Detail/Detail.modules.css"
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";


export default function Detail() {

    const  {detailId}  = useParams();
    const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [detailId]);

    return (
        <div>
        <h2>Este es el Detail</h2>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
        <img src={character.image} alt={character.name} />
        </div>)
 }
