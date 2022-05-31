function ColorMark(props){

    return (
        <div className="color-mark" style={
            
            {backgroundColor: props.color,
            width: props.size + 'px',
            height: props.size + 'px'
        }
        
        }></div>
    )
}

export default ColorMark;