import { validator } from "./helper";

const FormActionType = {
    RESET_FORM: "RESET_FORM",
    UPDATE_VALUE: "UPDATE_VALUE",
}

export function formReducer(formState, action) {
    switch (action.type) {
        case FormActionType.RESET_FORM:
            const resetState = Object.keys(formState).map((keyName) => {
                formState[keyName] = "";
                return { keyName: formState[keyName] };
            });
            return resetState;
        case FormActionType.UPDATE_VALUE:
            const updatedState = { ...formState };
            if (action.name in formState) {
                if (!updatedState[action.name].validate)
                    updatedState[action.name].value = action.value;
                else {
                    const validResults = validator(
                        updatedState[action.name].condition,
                        action.value
                    );
                    if (validResults.length === 0)
                        updatedState[action.name].value = action.value;
                    else {
                        updatedState[action.name].value = action.value;
                        updatedState[action.name].error = validResults;
                    }
                }
            }
            return updatedState;
        default:
            throw Error("Unknown action: " + action.type);
    }
}
