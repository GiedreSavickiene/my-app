function booksReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'get_from_server':
            newState = action.payload.map((b, i) => ({ ...b, row: i, show: true }))
            break;
        case 'reload':
            newState = [];
            break
        case 'sort_books':
            newState = [...state].sort((a, b) => a.title.localeCompare(b.title))
            break;
        case 'defolt_sort':
            // cia grazina pradini masyva
            newState = [...state].sort((a, b) => a.row - b.row)
            break;
        case 'more_seven':
            // cia mapina daugiau nei 13 eur
            newState = state.map(e => e.price > 13 ? { ...e, show: true } : { ...e, show: false });
            break;
        case 'show_all':
            // cia rodo visus irasus be filtravimo
            newState = state.map(e => ({ ...e, show: true }));
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default booksReducer;