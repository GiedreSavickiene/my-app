function Button1 ({addColor, deletColor}){

    return(
        <>
        <button onClick={addColor}>Make color list</button>
        <button onClick={deletColor}>Delete Color</button>
        
        </>
    )
}
export default Button1;