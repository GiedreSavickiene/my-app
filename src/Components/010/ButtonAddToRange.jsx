function ButtonAddToRange ({addRangeList, deleteRange}){

    return(
        <>

        <button onClick={addRangeList}>Add to Range</button>
        <button onClick={deleteRange}>Delete Range</button>
        </>
    )
}
export default ButtonAddToRange;