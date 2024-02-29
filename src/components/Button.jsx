import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Button(){
    const theme = useSelector((state) => state.theme.value)
    return (
        <button
            className={theme ? "--dark-btn-bg" : "--light-btn-bg"}
        >
        <Link to="/"
            className={theme ? "dark--button" : "light--button"}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </Link>
        </button>
    )
}