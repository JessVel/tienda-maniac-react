import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/Form';

export default (props) =>{

    const handleLoginClick = ()=>{
            
        let url = 'http://localhost:8888/auth';

        let params = {
                        user: nombreUsuario,
                        password: password
                     };

        fetch(url, {
                        method : 'POST',
                        credentials : 'include',
                        body: JSON.stringify( params ),
                        headers: {
                                    'Content-Type' : 'application/json'
                                 }
                   }
        ).then( response => response.json() )
         .then( data => {
            if ( data.status === 'ok' ){
                props.handleLoginSucess(data.loggedUser);
                props.handleHide();
            }else{
                console.log(data)
                alert(data.message);
            }
         });

    }


    const [nombreUsuario, setNombreUsuario] = useState('');

    const handleUserNameChange = (event)=>{
                            setNombreUsuario( event.target.value );
                            console.log(nombreUsuario)
                        }

    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) =>{
                            setPassword( event.target.value );
                            console.log(password)
    }


   
    return(

    <Modal show={props.show} onHide={props.handleHide}>
        <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body>
           <Form>
               <Form.Group>
                   <Form.Label>Nombre de usuario</Form.Label>
                   <Form.Control type="text"
                                 value={nombreUsuario}
                                 onChange={handleUserNameChange}
                   />
               </Form.Group>
               <Form.Group>
                   <Form.Label>Contraseña</Form.Label>
                   <Form.Control type="password"
                                 value={password}
                                 onChange={handlePasswordChange}
                   />
               </Form.Group>
           </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                    onClick={ props.handleHide }
            >
            Cancelar
            </Button>

            <Button variant="primary"
                    onClick={ handleLoginClick }
                   
            >Aceptar

            </Button>
        </Modal.Footer>
    </Modal>
)
}