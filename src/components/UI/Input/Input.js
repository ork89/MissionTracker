import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.shouldValidate && props.edited && props.invalid) {
        inputClasses.push(classes.Invalid);
    }

	switch (props.elementType) {
		case "input":
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
			break;
		case "textarea":
            inputElement = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
			break;
		case "select":
			inputElement = (
                <select 
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed} >
					{props.elementConfig.options.map((opt) => (
						<option key={opt.value} value={opt.value}>{opt.displayValue}</option>
					))}
				</select>
			);
			break;
		default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
			break;
    }
    
    let validationError = null;
    if(props.edited && props.invalid) {
        let filedName = props.elementConfig.placeholder ?? '';
        validationError = <p className={classes.ErrorMsg}>The value in {filedName} is invalid</p>
    }

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
            {validationError}
		</div>
	);
};

export default input;
