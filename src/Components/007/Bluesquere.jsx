import {useState} from 'react';
import randColor from '../../Funkcijos/randColor'
import ButtonHolder from './ButtonHoldr';
import Small from './Small';

function Bluesquere ({sc}) {

    const [bg, setbg] = useState('blue');
    
    

    

    const changeBg = () => {
        setbg(c => c === 'blue' ? 'red' : 'blue');
    }

    const changeRd = () =>{
        setbg(randColor())
    }

    const [border, setBorder] = useState(1);

    const changeBorder =() =>{
        setBorder(c => c === 10 ?  1 : 10 )
    }

    
    
    return(
        <div className='kvadratas' style={{backgroundColor: bg, 
           
            borderRadius: sc ? '50%': '0' 
            }}>
                
                <Small border={border}side='left' top={-60} sc={sc} ></Small>
                <Small border={border}side='right' top={-60} sc={sc} ></Small>
                <Small border={border}side='' top={140} sc={sc} ></Small>
               

            <button onClick={changeBg}>Make Red</button>
            <button onClick={changeRd}>Make Rand</button>
            <ButtonHolder virvute={changeBorder} border={border}></ButtonHolder>

            
        </div>
    )

    

    
}
export default Bluesquere;
