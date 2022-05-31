function ButtonSelect({addToSelectList, deletSelectList}){

    return(
        <>
        <button onClick={addToSelectList}>Make List</button>
        <button onClick={deletSelectList}>Delete List</button>
        </>
    )
}

export default ButtonSelect;