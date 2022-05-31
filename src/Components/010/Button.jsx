function Button({list, delet}){

    return (
        <>
        <button onClick={list} >Make list</button>
        <button onClick={delet}>Delete List</button>
        </>
    )
}

export default Button;