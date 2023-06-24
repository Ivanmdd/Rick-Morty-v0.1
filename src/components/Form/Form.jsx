import styles from "../Form/Form.modules.css";

export default function Form(props) {
    return (
        <div className={styles.container} >
        <form>
            <label>Username: </label>
            <input />
            <br/>
            <label>Password: </label>
            <input />
            <hr/>
            <button></button>
        </form>
        </div>
    )
} 