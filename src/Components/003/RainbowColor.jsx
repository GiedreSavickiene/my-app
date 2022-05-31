function RainbowColor (props){

    return(

        <div  className='rcolor' style={
            {backgroundColor: props.color.color, 
            height: (props.color.size  > 30 ? props.color.size : 30) + 'px'  }} 
            
            ></div>


    )
}

export default RainbowColor;