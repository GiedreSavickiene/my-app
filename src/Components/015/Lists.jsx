function Lists({cars}){


    return(
        <div className="lc">

            <div className="list">
                {
                    cars.map(c => <div key={c.id}>{c.type}</div>)
                }

            </div>

            <div className="list">
                {
                    cars.map((c, i)=> <div key={i}>{c.type} - <u>{c.price}</u></div>)
                }

            </div>

            <div className="list">
                {
                    cars.filter(c => c.type === 'MB').map((c, i)=> <div key={i}>{c.type} - <u>{c.price}</u></div>)
                }

            </div>

            <div className="list">
                {
                    cars.map((c, i)=> <div key={i}>{c.type} - {c.price} {c.price < 10000 ? <i>Akcija!</i> : null}</div>)
                }

            </div>

            <div className="list">
                {
                    cars.map((c, i)=> <div key={i}><span style={{color: 'blue'}}>{c.type}</span> - {c.price}</div>)
                }

            </div>
        </div>
    )
}

export default Lists;