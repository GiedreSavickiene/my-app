import RandomColor from "../Funkcijos/randColor";

function colorReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'make_black':
            newState = 'black';
            break;
        case 'make_blue':
            newState = 'blue';
            break;
        case 'make_blue_black':
            newState = state === 'blue' ? 'black' : 'blue';
            break;
        case 'make_random':
            newState = RandomColor();
            break;
        case 'make_random2':
            newState = action.payload;
            break;
        case 'make_color':
            newState = action.payload;
            break;
        default:
            newState = state;
    }

    return newState;



}

export default colorReducer;