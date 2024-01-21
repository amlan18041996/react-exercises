const FormFeed = ({ classes = "form-feed-error", children, errors }) => {
    let message = children;
    if (Object.keys(errors).length > 0) {
        if ("required" in errors) message = "Field is required";
        if ("minLength" in errors)
            message = "You have not yet reached the minimum-length for this field";
        if ("maxLength" in errors)
            message = "You have reached the maximum-length for this field";
    }
    return <span className={classes}>{message}</span>;
};

export default FormFeed;
