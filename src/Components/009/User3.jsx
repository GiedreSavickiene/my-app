function User3({users3, wich}){

    return(

        <div style={{borderBottom: wich % 2 ? 'none' : "1px solid white"}}><span style={{color: 'red'}}>{users3.userId}</span> {users3.title}</div>
    )
}

export default User3;