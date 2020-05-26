import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import ListaProductos from './ListaProductos';

export default (props) =>
<>
<Row>
<Col  xs={6} md={4}>
    <Nav className="navbar bg-light">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#">Link 1</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link 2</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link 3</a>
            </li>
        </ul>
    </Nav>
</Col>
<Col  xs={12} md={8}></Col>
</Row>
</>