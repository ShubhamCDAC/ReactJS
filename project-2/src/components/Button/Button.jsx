
import {MdMessage} from "react-icons/md"    
import styles from "./Button.module.css"

const Button = (props) => {
    const { isOutline, text, icons, ...rest} = props;   // restructuring
    // we can instead directly pass it in props
    // const Button = (props) => {
    // const Button = ({ isOutline, text, icons } ) => {
        
    return(
        <button 
            {...rest}
            className={isOutline ? styles.outline_btn : styles.primary_btn}>
            {icons}
            {text}
        </button>  

        
    );
};

export default Button;