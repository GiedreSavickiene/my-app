import React  from "react";

class FatDog extends React.Component {//padaryti, kad paspaudus mygtuka, raides isdidetu

    constructor(){
        super();
        this.state = {font: 20, colors: 'pink'}; //cia vidinis propsas
    }

    paspaudimas = () => {
        console.log('Ivyko butono paspaudimo procesas');
        //cia padarome kad spaudinejant sokinetu dydis
        this.setState(f =>(f.font === 20 ? {font: 40 } : {font:20}));//paimamae esama steta ir pakeiciame
        
        
    }

    yellow =() => {
        this.setState({colors: 'yellow'})
    }

    render(){

        return (
            <>
            <h3 style={{color: this.state.colors, fontSize: this.state.font + 'px'}}>Fat Dog {this.props.color}</h3>
            <button onClick={this.paspaudimas}>Click Dog</button>
            <button onClick={this.yellow}>Make yellow</button>
            </>
        )
    }
}

export default FatDog;