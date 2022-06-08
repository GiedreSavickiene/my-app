function booksReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'get_from_server':
            newState = action.payload
            break;
        case 'sort_books':
            newState = [...state].sort((a, b) => a.title.localeCompare(b.title))
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default booksReducer;