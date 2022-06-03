function Tree({tree, index, setDeleteTreeData, setEditTreeModalData }){

    return(
        <>
        <li>
        {index}-{tree.title}-{['Leaf', 'Spike', 'Palm'][tree.type-1]}-{tree.height}m.
        
        <button onClick={() => setEditTreeModalData(tree)}>Edit</button>
        <button onClick={() => setDeleteTreeData(tree)}>Delete</button>
        </li>
        </>
    )
}
export default Tree;