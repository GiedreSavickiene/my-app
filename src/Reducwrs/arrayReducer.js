import rand from "../Funkcijos/rand";

function arrayReducer(state, action1) {
    let newState;
    switch (action1.type) {
        case 'make_array':
            newState = [...Array(10)].map(_ => rand(100, 999))

            break;


        default:
            newState = [...state];
    }

    return newState;



}

export default arrayReducer;