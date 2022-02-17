import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function Button(props){
    return (
        <button
            className={props.darkMode ? "dark--button" : "light--button"}
            onClick={props.handleClick}
        >
        <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </button>
    )
}