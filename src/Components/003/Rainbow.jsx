import RainbowColor from "./RainbowColor";

function Rainbow(props){

    return (

        <div>

              {/* { props.colors.sort((a, b) =>b.size - a.size).map((c, i)=> <h3 key={i} className='rcolor' style={{backgroundColor: c.color, height: c.size + 'px'  }} ></h3>)}  } */}

              {/* Nuimti rūšiavimą. Juostas, kurių aukštis mažesnis nei 30 atvaizduoti 30 px aukščio DONE! */}
             {/* { props.colors.map((c, i)=>  <h3 key={i}  className='rcolor' style={{backgroundColor: c.color, height: (c.size  > 30 ? c.size : 30) + 'px'  }} ></h3>)} */}

             {/* spalvas su pozicija top sudėti viršuje, tada nupiešti 20px aukščio juodą juostą ir tada sudėti bottom pozicijas DONE! */}
             {/* { props.colors.filter(c => c.pos === 'top').map((c, i)=>  <div key={i}  className='rcolor' style={{backgroundColor: c.color, height: (c.size  > 30 ? c.size : 30) + 'px'  }} ></div>)}


            <div className="rcolor" style={{backgroundColor: 'black', height:'20px' }}></div>

           
            { props.colors.filter(c => c.pos === 'bottom').map((c, i)=>  <div key={i}  className='rcolor' style={{backgroundColor: c.color, height: (c.size  > 30 ? c.size : 30) + 'px'  }} ></div>)} */}
       
       

            {/* Sukurti komponentą RainbowColor ir į jį perkelti splvą DONE! */}

            {
                props.colors.filter(c => c.pos === 'top').map((c, i) => <RainbowColor key={i} color={c}></RainbowColor>)
            }

            <RainbowColor color={{ color: 'black', size: 20 }}></RainbowColor>

            {
                props.colors.filter(c => c.pos === 'bottom').map((c, i) => <RainbowColor key={i} color={c}></RainbowColor>)
            }

            
        </div>
    )

    


}

export default Rainbow;