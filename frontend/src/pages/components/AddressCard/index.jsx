import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cep from './Cep';
import Accordion from 'react-bootstrap/Accordion'

function AddressCard() {

  const [eventCep, setEventCep] = useState()

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const arrData = Object.fromEntries(formData);

    const { data } = await axios.post('http://localhost:3030/cep/body', {
      cep: [...Object.values(arrData)]

    })
    setEventCep(data)
  }

  useEffect(() => {
    console.log("Teste 2 ", eventCep)
  }, [eventCep])

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Busca CEP | Clique para Abrir | Clique para Fechar</Accordion.Header>
          <Accordion.Body>
            <div className='container col-4 '>
              <h1>Busca CEP</h1>
              <form onSubmit={submitHandler}>
                <div className="form-group ">
                  <input type="text" name="cep_1" className='form-control mb-3' placeholder='cep 1' />
                  <input type="text" name="cep_2" className='form-control mb-3' placeholder='cep 2' />
                  <input type="text" name="cep_3" className='form-control mb-3' placeholder='cep 3' />
                  <input type="text" name="cep_4" className='form-control mb-3' placeholder='cep 4' />
                  <input type="text" name="cep_5" className='form-control mb-3' placeholder='cep 5' />
                </div>
                <button type="submit" name="TrackCEP" className='btn btn-primary mb-5'>Buscar</button>
              </form>
            </div>
            <div className='container col-4  mb-3'>
              {!!eventCep && eventCep?.map((item, idx, cep, logradouro, complemento, bairro, localidade, uf) => {
                return (<Cep
                  key={idx}
                  idx={idx + 1}
                  cep={item.cep}
                  logradouro={item.logradouro}
                  complemento={item.complemento}
                  bairro={item.bairro}
                  localidade={item.localidade}
                  uf={item.uf}
                />)
              })}

            </div>
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>

        </>
        );                 
}

        export default AddressCard;