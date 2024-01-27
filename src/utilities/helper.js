export function validator(conditions, value) {
    let error = {};
    if (value) {
        if ("required" in conditions && value.trim() === "") {
            error["required"] = true;
        }
        if ("minLength" in conditions && value.length < conditions.minLength) {
            error["minLength"] = true;
        }
        if ("maxLength" in conditions && value.length > conditions.maxLength) {
            error["maxLength"] = true;
        }
    } else {
        error['valueError'] = "Invalid Value!";
    }
    return error;
}

export async function fakeNetwork() {
  return new Promise(res => {
    setTimeout(res, Math.random() * 2000);
  });
}