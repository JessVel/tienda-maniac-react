import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModalAdmi = (props)=>{

    
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (event)=>{
        setNombreUsuario( event.target.value )
    }

    const handlePasswordChange = (event) =>{
        setPassword( event.target.value)
    }



    return(
        <Modal show={ props.show } onHide={ props.hideModal }>
    <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
    </Modal.Header>

    <Modal.Body>
            <Form.Group>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text"
                             value={ nombreUsuario }
                             onChange={ handleUserNameChange }/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password"
                              value={ password }
                              onChange={ handlePasswordChange }/> 
            </Form.Group>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary"
                onClick={props.hidleHide}       
        >
            Cancelar
        </Button>

        <Button variant="primary"
                 onClick={ props.handleLoginClick }
                >
            Aceptar
        </Button>       
    </Modal.Footer>    
</Modal>

    )
}

export default ModalAdmi;
