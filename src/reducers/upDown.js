const initialstate = 0;
const changeNumbers = (state = initialstate, action) => {
    if (action.type === "INCREMENT") {
        return state + action.payload;
    }
    else if (action.type === "DECREMENT") {
        if (state != 0) {
            return state - action.payload;
        } else {
            return 0;
        }
    }
    else {
        return state;
    }
}

export default changeNumbers;