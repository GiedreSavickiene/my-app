import rand from "../Funkcijos/rand";
import RandomColor from "../Funkcijos/randColor";

function arrayReducer(state, action1) {
    let newState;
    switch (action1.type) {
        case 'make_array':
            // for(let i = 0; i < 10; i++){
            //     newState.push({number: rend(100, 999), color: RandomColor()})
            // }
            newState = [...Array(10)].map((_, i) => ({
                number: rand(100, 999),
                color: RandomColor(),
                show: true,
                row: i
            }))
            break;
        case 'sort_array':
            newState = [...state].sort((a, b) => b.number - a.number);
            break;
        case 'black_number':
            newState = [...state, { number: rand(100, 999), color: 'black' }]
            break;
        case 'filter_number':
            // newState = state.filter(n => n.number > 500) - taip negalima daryti
            newState = state.map(e => e.number > 500 ? { ...e, show: true } : { ...e, show: false })
            break;
        case 'less_number':
            newState = state.map(e => e.number < 400 ? { ...e, show: true } : { ...e, show: false })
            break;
        case 'show_all':
            // newState = state.map(e => e.number ? { ...e, show: true } : { ...e, show: false })
            newState = state.map(e => ({ ...e, show: true }))
            break;
        case 'def_sort_list':
            // cia grazina pradini masyva
            newState = [...state].sort((a, b) => a.row - b.row)
            break;
        case 'imput_filter_list':

            newState = state.map(e => e.number > action1.payload ? { ...e, show: true } : { ...e, show: false })
            break;


        default:
            newState = [...state];
    }

    return newState;



}

export default arrayReducer;