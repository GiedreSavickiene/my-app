

function User2({users2}){

    return(

        <div>{users2.firstName} {users2.lastName}{users2.img}<img src={users2.image.slice(0, users2.image.indexOf('?'))}></img></div>
    )
}

export default User2;