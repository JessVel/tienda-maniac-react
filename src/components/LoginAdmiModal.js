import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/Form';

export default (props) =>{

    const handleLoginAdmiClick = ()=>{
            
        let url = 'http://localhost:8888/auth';

        let params = {
                        administrador: nombreAdmi,
                        passwordadmi: passwordAdmi
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
                props.handleLoginAdmiSucess(data.loggedAdmi);
                props.handleHideAdmi();
            }else{
               
                alert(data.message);
            }
         });

    }


    const [nombreAdmi, setNombreAdmi] = useState('');

    const handleAdmiNameChange = (event)=>{
                            setNombreAdmi( event.target.value );
                            console.log(nombreAdmi)
                           
                        }

    const [passwordAdmi, setPasswordAdmi] = useState('');

    const handlePasswordAdmiChange = (event) =>{
                            setPasswordAdmi( event.target.value );
                            console.log(passwordAdmi)
                           
    }


   
    return(

    <Modal show={props.show} onHide={props.handleHideAdmi}>
        <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body>
           <Form>
               <Form.Group>
                   <Form.Label>Nombre de usuario</Form.Label>
                   <Form.Control type="text"
                                 value={nombreAdmi}
                                 onChange={handleAdmiNameChange}
                   />
               </Form.Group>
               <Form.Group>
                   <Form.Label>Contraseña</Form.Label>
                   <Form.Control type="password"
                                 value={passwordAdmi}
                                 onChange={handlePasswordAdmiChange}
                   />
               </Form.Group>
           </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                    onClick={ props.handleHideAdmi }
            >
            Cancelar
            </Button>

            <Button variant="primary"
                    onClick={ handleLoginAdmiClick }
                   
            >Aceptar

            </Button>
        </Modal.Footer>
    </Modal>
)
}