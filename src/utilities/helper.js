export function validator(conditions, value) {
    let error = {};
    if ("required" in conditions && value.trim() === "") {
        error["required"] = true;
    }
    if ("minLength" in conditions && value.length < conditions.minLength) {
        error["minLength"] = true;
    }
    if ("maxLength" in conditions && value.length > conditions.maxLength) {
        error["maxLength"] = true;
    }
    return error;
}