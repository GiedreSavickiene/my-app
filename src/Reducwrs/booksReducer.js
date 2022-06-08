function booksReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'get_from_server':
            newState = action.payload.map((b, i) => ({ ...b, row: i }))
            break;
        case 'sort_books':
            newState = [...state].sort((a, b) => a.title.localeCompare(b.title))
            break;
        case 'defolt_sort':
            // cia grazina pradini masyva
            newState = [...state].sort((a, b) => a.row - b.row)
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default booksReducer;