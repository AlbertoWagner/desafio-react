/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Form } from 'reactstrap';
import  FormModal  from '../Forms/index'


const ModalFocusAfterClose = (props) => {
    if (props.props){
        var titulo_modal = "Edita produto"
    }else{
        var titulo_modal = "Novo produto"

    }
    var id = props.props

    console.log('x',props.props)
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }

    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>

                </FormGroup>
                <Button color="success"  onClick={toggle} size="sm">{titulo_modal}</Button>{' '}

            </Form>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
            <ModalHeader toggle={toggle}>{titulo_modal}</ModalHeader>

                <ModalBody>
                    <FormModal props={id} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Fechar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalFocusAfterClose;