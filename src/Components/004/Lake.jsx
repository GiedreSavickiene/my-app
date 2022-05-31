import React  from "react";
import Fish from "./Fish";

class Lake extends React.Component {


    constructor(){
        super();
        this.state = {fish: []};
    }

    show = () => {

        const fish =[...this.state.fish];
        fish.push(1);
        
        this.setState(s =>({fish: fish}));
    }

   

    render(){
        return (
            <>
            <div className="lake">
                {
                    this.state.fish.map((_, i) => <Fish key={i} ></Fish>)
                }
                
            </div>
            <button onClick={this.show}>Cach fish</button>
            
            </>
        )
    }

}

export default Lake;