import React from "react";

const BaseInput = ({
    id,
    name,
    value,
    classes,
    error = [],
    type = "text",
    condition = {},
    validate = false,
    emitChange = () => {},
    validateMode = "on-change",
  ...otherProps
}) => {
    const [state, setState] = React.useState({
        value,
        error,
        type,
        validate,
        condition,
    });

    const handleChange = (event) => {
        console.log("handleChange");
        if (!validate) {
            setState({
                ...state[name],
                value: event.target.value,
            });
        }
    };

    return (
        <input
            type={type}
            name={name}
            id={id}
            className={classes}
            onChange={handleChange}
            {...otherProps}
        />
    );
};

export default BaseInput;
