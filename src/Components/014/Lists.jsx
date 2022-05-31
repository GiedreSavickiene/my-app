import { useState } from "react";

function Lists(){

    const [show, setShow] = useState("")

    const showList = () => {
        setShow(sizes )
    }

    const sizes = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL'
    ];

    return(
        <div className="lc">
            <div className="list">

            {
            sizes.map((s, i) => <div key={i} >{s}</div>)
            }
              </div>

            <div className="list">

            {
            sizes.map((s, i) => <div key={i} style={{color: i % 2 ? 'red' : 'yellow'}} >{s}</div>)
            }
              </div>

              <div className="list">

            {
            sizes.filter(i => i[0] != 'X' ).map((s, i) => <div key={i} >{s}</div>)
            }
                </div>
                <div className="list">
            {
            sizes.sort(function(a, b) {return b.length - a.length} ).map((s, i) => <div key={i} >{s}</div>)
            }
              </div>

            <div className="list" >{show}</div>
            <button type="button" onClick={showList}>Show List</button>  




            
        </div>
        
        
        
    )

    
}

export default Lists;