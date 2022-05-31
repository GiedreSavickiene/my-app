import randColor from '../../Funkcijos/randColor'

function Raide ({l,i}){
    return(

        <span style={{color: randColor(), backgroundColor: i % 2  ? 'white' : 'black'}} >
            {l} 
        </span>

    )

}

export default Raide;