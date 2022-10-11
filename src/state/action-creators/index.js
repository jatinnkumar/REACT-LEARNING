const decrementNumber = () => {
    return (dispatch) => {
        dispatch({
            type: "decrement"
        })
    }
}

const incrementNumber = () => {
    return (dispatch) => {
        dispatch({
            type: "increment"
        })
    }
}

export { decrementNumber, incrementNumber };