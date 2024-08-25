import React from 'react';
import './Button.css';

const Button = props =>{
    let buttonStyle = [];
    if(props.isDisabled){
        buttonStyle = ["Button", "Disabled"].join(' ');
    }else{
        buttonStyle = ["Button",props.btnType].join(' ');
    }
    return(
        <button onClick={props.clicked} className={buttonStyle} disabled={props.isDisabled}>\
            {props.children}
        </button>
    );
}

export default Button;