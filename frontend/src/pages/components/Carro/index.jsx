import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import CarroModelo from './Carro';

function Carro() {
  const [carroEvent, setCarroEvent] = useState([])

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const arrData = Object.fromEntries(formData);
    console.log("Teste 1", arrData)

    const { data } = await axios.post('http://localhost:3030/carro/add', {
      modelo: arrData.modelo,
      ano: arrData.ano,
      marca: arrData.marca,
      qPortas: arrData.qPortas
    })

    setCarroEvent(data)

  }
  useEffect(() => {
    console.log("Teste 2 ", carroEvent)
  }, [carroEvent])


  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Carros| Clique para Abrir | Clique para Fechar</Accordion.Header>
          <Accordion.Body>
            <div>
              <h1>Cadastrar Carros</h1>
              <Form onSubmit={submitHandler}>
                <div className="form-group ">
                  <Row>
                    <Col>
                      <label> Modelo </label><input type="text" name="modelo" className='form-control mb-3 ' />
                    </Col>
                    <Col>
                      <label>Ano</label><input type="text" name="ano" className='form-control mb-3 ' />
                    </Col>
                    <Col>
                      <label>Marca</label><input type="text" name="marca" className='form-control mb-3 ' />
                    </Col>
                    <Col>
                      <label>Nº de Portas</label><input type="text" name="qPortas" className='form-control mb-3 ' />
                    </Col>
                  </Row>
                </div>
                <button type="submit" name="TrackPalindromo" className='btn btn-primary mb-3'>Buscar</button>
              </Form>
            </div>

            <div> {!!carroEvent && carroEvent?.map((item, idx, modelo, ano, marca, qPortas, uf) => {
                return (<CarroModelo
                  key={idx}
                  idx={idx + 1}
                  modelo={item.modelo}
                  ano={item.ano}
                  marca={item.marca}
                  qPortas={item.qPortas}
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

export default Carro;