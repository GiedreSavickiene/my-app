
function textReducer(state, action1) {
    let newState;
    switch (action1.type) {
        case 'make_random':
            newState = action1.payload;
            break;
        case 'make_text':
            newState = action1.payload;
            break;

        default:
            newState = state;
    }

    return newState;



}

export default textReducer;