import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import products from '../products'


function HomeScreen() {
    return (
        <div>
            <h1>Serviços</h1>
            <Row>
              {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
              ))}
            </Row>
            <br /><br /><br />
            <Container>
              <Row>
                <Col>
                  <img width="300px" src="https://www.fenixespaço.com.br/static/janice.jpg" alt="Janice Massoterapeuta" />
                </Col>
                <Col>
                  <br /><br />
                  Massoterapeuta Janice Pedrozo<br />
                  OSCIP Nº 98.2019<br />
                  <a
                    className="btnJanice"
                    href="https://api.whatsapp.com/send?phone=5551995351051&text=Oi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className='btn btn-light my-3'>
                      Agendamento por Whatsapp: (51) 9-9535-1051
                    </Button>
                  </a>
                  <br />
                  Atendimento em Florianópolis.<br />
                </Col>
              </Row>
            </Container>
        </div>
    )
}

export default HomeScreen
