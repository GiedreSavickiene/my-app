function List({obj, index, deleteItem, setModal}){

    
    return(
        <>
            <li><b>#{index}</b>. {obj.name} {obj.color}  <small>id:{obj.id}</small>  {obj.select} 
             {obj.range} {obj.count}
            <button onClick={() => deleteItem(obj.id)}>delete</button>
            <button onClick={() => setModal(obj)}>Edit</button>
            </li>
        </>
    )
    
}
export default List;