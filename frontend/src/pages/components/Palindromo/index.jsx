import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'

function Palindromo() {
  const [palindromo, setPalindromo] = useState([])

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const arrData = Object.fromEntries(formData);
    console.log("Teste 1", arrData)

    const { data } = await axios.post('http://localhost:3030/palindromo', {
      arg1: arrData.arg1,
      arg2: arrData.arg2
    })

    setPalindromo(data)

  }
  useEffect(() => {
    console.log("Teste 2 ", palindromo)
  }, [palindromo])


  return (
    <>
          <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Palindromo | Clique para Abrir | Clique para Fechar</Accordion.Header>
          <Accordion.Body>
      <div className='container col-6 text center' border="danger" style={{ width: '18rem' }}>
        <h1>Palindromos</h1>
        <Form onSubmit={submitHandler}>
          <div className="form-group ">
            <Row>
              <Col>
                <label> Valor Inicial </label><input type="text" name="arg1" className='form-control mb-3 ' />
              </Col>
              <Col>
                <label> Valor Final</label><input type="text" name="arg2" className='form-control mb-3 ' />
              </Col>
            </Row>
          </div>
          <button type="submit" name="TrackPalindromo" className='btn btn-primary mb-3'>Buscar</button>
        </Form>

      </div>
      <div className='container col-6' >{palindromo.join(' , ')}</div>
      </Accordion.Body>
          </Accordion.Item>
          </Accordion>

    </>
  );
}

export default Palindromo;