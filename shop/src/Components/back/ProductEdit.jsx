import { useEffect } from "react";
import { useContext, useState, useRef } from "react";
import BackContext from "../../Contexts/BackContext";
import getBase64 from "../../Functions/getBase64";

const empty = {
    title: '',
    price: '',
    code: '',
    description: ''
};




function ProductEdit(){
    const { modalProductData,setModalProductData, setEditProductData  } = useContext(BackContext);

    const [inputs, setInputs] = useState(empty);
    const fileInput = useRef();


    const handleInputs = (e, input) => setInputs(i => ({ ...i, [input]: e.target.value }));

    const edit = () => {
        const file = fileInput.current.files[0];
        if (file) {
            getBase64(file)
                .then(photo => setEditProductData({ ...inputs, photo, price: parseFloat(inputs.price), id: modalProductData.id }));
        } else {
            setEditProductData({ ...inputs, price: parseFloat(inputs.price), id: modalProductData.id });
        }
        
       setModalProductData (null);
    }

    useEffect(() =>{
        if(modalProductData === null) return
        setInputs({
            title: modalProductData.title,
            price: modalProductData.price,
            code: modalProductData.code,
            description: modalProductData.description
        })
    }, [modalProductData])
    

     if (modalProductData === null) {
        return null;
    }


    return(
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Redaguoti produktą</h2>
                        <button type="button" className="close" onClick={() =>setModalProductData(null)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="fu gray">Pavadinimas:</label>
                                                <input type="text" className="form-control" value={inputs.title} onChange={e => handleInputs(e, 'title')} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label className="fu gray">Kaina:</label>
                                                <input type="text" className="form-control" value={inputs.price} onChange={e => handleInputs(e, 'price')} />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="form-group">
                                                <label className="fu gray">Kodas:</label>
                                                <input type="text" className="form-control" value={inputs.code} onChange={e => handleInputs(e, 'code')} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="fu gray">Aprašymas:</label>
                                                <textarea className="form-control" rows="3" value={inputs.description} onChange={e => handleInputs(e, 'description')}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="fu gray">Nuotrauka:</label>
                                                <input type="file" ref={fileInput} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="edit-photo">
                                                {
                                                    modalProductData.photo ? <img src={modalProductData.photo} alt={modalProductData.title} /> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary fu up" onClick={() => setModalProductData(null) }>Uzdaryti</button>
                        <button type="button" className="btn btn-outline-primary fu up"  onClick={edit}>Issaugoti</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductEdit;