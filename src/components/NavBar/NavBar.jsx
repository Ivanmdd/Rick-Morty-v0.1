import styles from "../NavBar/NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";

export default function NavBar(props) {
    return (
        <div className={styles.container}>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            
            <SearchBar
                onSearch={props.onSearch}
            />
        </div>
    );
}
