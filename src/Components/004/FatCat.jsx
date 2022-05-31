import React  from "react";

class FatCat extends React.Component {


    constructor(){
        super();
        this.state = {
            weight: 24,
            color: 'blue' }; //cia vidinis propsas
    }

    paspaudimas = () => {
        console.log('Ivyko butono paspaudimo procesas');
        this.setState(s =>({weight: s.weight + 1}));//paimamae esama steita ir pakeiciame
        // this.setState({weight: 28});
        // console.log(this)
    }

    makeRed = () =>{
        this.setState({color: 'red'});
    }

    render(){
        return (
            <>
            <h2 style={{color:this.state.color }}>Fat Cat {this.props.color} {this.state.weight} kg</h2>
            <button onClick={this.paspaudimas}>Click Cat</button>
            <button onClick={this.makeRed}>Make red</button>
            </>
        )
    }

}

export default FatCat;