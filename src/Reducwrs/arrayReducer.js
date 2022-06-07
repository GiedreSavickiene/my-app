import rand from "../Funkcijos/rand";
import RandomColor from "../Funkcijos/randColor";

function arrayReducer(state, action1) {
    let newState;
    switch (action1.type) {
        case 'make_array':
            newState = [...Array(10)].map(_ => ({ number: rand(100, 999), color: RandomColor() }))
            break;
        case 'sort_array':
            newState = [...state].sort((a, b) => b - a);
            break;
        default:
            newState = [...state];
    }

    return newState;



}

export default arrayReducer;