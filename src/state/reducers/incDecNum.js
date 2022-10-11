const reducer = (state = 0, action) => {
    if (action.type === 'decrement') {
        return state - 1;
    }
    else if (action.type === 'increment') {
        return state + 1;
    }
    else {
        return state;
    }
}

export default reducer;