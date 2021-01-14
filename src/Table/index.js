
import React from 'react';
import { Table } from 'reactstrap';
import { Button,ButtonGroup } from "reactstrap";
import * as axios from 'axios';
import ModalFocusAfterClose from '../Modal/index';


const Tabela = (props) => {


  var handleDelete = (id) => {
    axios({
      method: 'DELETE',
      url: 'http://127.0.0.1:8000/produto/' + id +'/',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(function (response) {
        //handle success
        console.log(response);
        window.location.reload();

      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });


    // Whatever you want to do with that item

  }
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Ações</th>

        </tr>
      </thead>
      <tbody>
        {props.produtos.map(produto => (

          <tr>
            <th scope="row">{produto.id}</th>
            <td>{produto.nome}</td>
            <td>{produto.descricao}</td>
            <td>{produto.valor}</td>
            <td>    <ButtonGroup>


              <Button color="danger" onClick={() => handleDelete(produto.id)} size="sm">Delete</Button>{' '}

              <ModalFocusAfterClose props={produto.id} />
            </ButtonGroup>



            </td>

          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tabela;