function Animals({animal, index}){
    return(
        <li>{index} -  {animal.name} -  {['cat', 'dog', 'rat', 'racoon'][animal.type -1]} - {animal.age} -
        {['No', 'Yes'][animal.has_owner]} 
        <button>Edit</button>
        <button>Delete</button>
        </li>
    )
}

export default Animals;