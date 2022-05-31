import { useState } from 'react';
import './App.scss';
import Button from './Components/010/Button';
import Button1 from './Components/010/Button1';
import ButtonAddToRange from './Components/010/ButtonAddToRange';
import ButtomCheckBox from './Components/010/ButtonCheckBox';
import ButtonPutInSelect from './Components/010/ButtonPutInSelect';
import ButtonSelect from './Components/010/ButtonSelect';




function App() {

    const [text, setText] = useState('')
    const [list1, setList1]= useState([])


    const handlText = e => {
        // setList1(l => [...l, e.target.value])
        setText(e.target.value)
        }

    const addTextToList = () => {
        if(text !== ""){
        setList1(l => [...l, text])
        setText("")
        }
    }    
    const deleteList =() =>{
        setList1([]);
    }

    const [color, setColor] = useState('')
    const [colorList, setColorList] = useState([])

    const handlColor = e => {
        setColor(e.target.value)
    }
    const addColortoList = ()=>{
        setColorList(l => [...l, color ? color : '#000000'])
    }
    const deleteColor = ()=>{
        setColorList([])
    }


    const [select, setSelect] = useState('')
    const [selectList, setSelectList] = useState([])

    const handleSelect = e => setSelect(e.target.value)
    const addSelectToList = () => {setSelectList(s => [...s, select])}
    const deleteSelectList = () => {setSelectList([])}

    const [textas, setTextas] = useState('')
    const [listSelect, setListSelect] = useState([])

    const handlTextas = e => {
        setTextas(e.target.value)
        }

    const addTextToSelect = ()=>{
        setListSelect (l => [...l, textas])
    }

    //CheckBox

    const [list4, setList4] = useState([])
    const [checkbox, setCheckbox] = useState({a: false, b: false, c:true, d:true })

    const handleCheckbox = which => {
        setCheckbox (c => ({...c, [which]: !c[which]}))
    }

    const addCheckBoxToList = ()=> {
        setList4(c=> [...c,((checkbox.a ? 'A' : '') +
                            (checkbox.b ? 'B' : '') +
                            (checkbox.c ? 'C' : '') +              
                            (checkbox.d ? 'D' : ''))
                        ])
    }

    //CheckRadio
    const [list6, setList6] = useState([])
    const [radio, setRadio] = useState ('option2')  
    
    const handleRadio = e => setRadio(e.target.value)
    //nepadarytas mygtukas
    const addRadioToList = () => {
        setList6(l => [...l, radio])
    }

    //RangeList
    const [range, setRange] = useState('')
    const [list7, setList7]= useState([])

    const handlRange = e => {
        setRange(e.target.value)
        }

    const addRangeList = () => {
        setList7(l => [...l, range])

    }

    const deleteRange = ()=> {
        setList7([])
    }

    
    

  return (
    <div className="App">
      <header className="App-header">
        
       <h1>FORMS</h1>
        
        <input type='text'onChange={handlText} value={text}></input>
        <Button list={addTextToList} delet={deleteList}></Button>
        <ul>
        {
            list1.map((t, i) => <li key={i}>{t}</li>)
        }
        </ul>

        <input type='color' onChange={handlColor} value={color}></input>
        <Button1 addColor={addColortoList} deletColor={deleteColor} ></Button1>
        <ul>
        {
            colorList.map((t, i) => <li key={i} style={{backgroundColor:t}}>{t}</li>)
        }
        </ul>
        
        <input type="text" onChange={handlTextas} value={textas}></input>
        <ButtonPutInSelect addTextToSelect={addTextToSelect}></ButtonPutInSelect>
                   
        <label>Select</label>
        <select onChange={handleSelect} value={select}>
            <option value='' disabled>SELECT</option>
            {
                listSelect.map((l, i) =>  <option key={i} value={l}>{l}</option>)
            }
            
        </select>
        <ul>
        {
            selectList.map((t, i) => <li key={i}>{t}</li>)
        }
        </ul>
        <ButtonSelect addToSelectList={addSelectToList} deletSelectList={deleteSelectList}></ButtonSelect>
        
        {/* CheckBox */}
        <input type='checkbox' value='A' onChange={()=> handleCheckbox('a')} checkbox={checkbox.a}></input>
        <label>Check for A</label>
        <input type='checkbox' value='B' onChange={()=> handleCheckbox('b')} checkbox={checkbox.b}></input>
        <label>Check for B</label>
        <input type='checkbox' value='C' onChange={()=> handleCheckbox('c')} checkbox={checkbox.c}></input>
        <label>Check for C</label>
        <input type='checkbox' value='D' onChange={()=> handleCheckbox('d')} checkbox={checkbox.d}></input>
        <label>Check for D</label>

        <ul>
            {
                 list4.map((t, i) => <li key={i} >{t}</li>)
             }
        </ul>

        <ButtomCheckBox addCheckBoxToList={addCheckBoxToList}></ButtomCheckBox>
        
        
        {/* RadioButton , vardai turi buti vienodi*/}
        <input type='radio' name='ra' value='option1' onChange={handleRadio} checked={'option1' === radio} ></input>
        <label>Check for A</label>
        <input type='radio' name='ra' value='option2' onChange={handleRadio} defaultChecked checked={'option2' === radio}></input>
        <label>Check for B</label>
        <input type='radio' name='ra' value='option3' onChange={handleRadio}checked={'option3' === radio} ></input>
        <label>Check for C</label>
        <ul>
        {
            list6.map((t, i) => <li key={i}>{t}</li>)
        }
        </ul>

        <input type='range' value={range}  min='1' max='100' onChange={handlRange}></input>
        <ul>
        {
            list7.map((t, i) => <li key={i}>{t}</li>)
        }
        </ul>

        <ButtonAddToRange addRangeList={addRangeList} deleteRange={deleteRange}></ButtonAddToRange>
        {/* sumuojasi skaiciai */}
        <span>{list7.reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0 )}</span>
        
        

   
    
      </header>
    </div>
  );
}

export default App;
