function List({obj, i, deleteItem}){

    
    return(
        
            <li><b>#{i}</b>. {obj.name} {obj.color}  <small>id:{obj.id}</small><button onClick={() => deleteItem(obj.id)}>delete</button></li>
        
    )
    
}
export default List;