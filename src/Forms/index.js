import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as axios from 'axios';
import { ButtonToggle } from "reactstrap";


class FormModal extends React.Component {


  componentDidMount = () => {
    if(this.props.props){
      axios.get('http://127.0.0.1:8000/produto/' + this.props.props + '/')
      .then(res => {
        this.setState({ nome: res.data.nome });
        this.setState({ descricao: res.data.descricao });
        this.setState({ valor: res.data.valor });


      })
      .catch(err => console.log(err))
    }

  }

  constructor(props) {

    super(props);
    this.state = {

      nome: '',
      descricao: '',
      valor: '',

    }


  };


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });


  }


  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      'nome': this.state.nome,
      'descricao': this.state.descricao,
      'valor': this.state.valor
    };
    if (this.props.props) {
      axios({
        method: 'put',
        url: 'http://127.0.0.1:8000/produto/'+this.props.props+'/',
        data: data,
        headers: { 'Content-Type': 'application/json' }
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



    } else {
          axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/produto/',
        data: data,
        headers: { 'Content-Type': 'application/json' }
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
    }

  }


  render() {


    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Nome</Label>
          <Col sm={10}>
            <Input type="text" required="true" name="nome" id="exampleEmail" value={this.state.nome} placeholder="Nome" onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>Descrição</Label>
          <Col sm={10}>
            <Input type="textarea"  required="true"  name="descricao" id="exampleText" placeholder="Descrição" value={this.state.descricao} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleValue" sm={2}>Valor</Label>
          <Col sm={10}>
            <Input type="number"  required="true" name="valor" id="exampleValue" placeholder="Valor" value={this.state.valor} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <ButtonToggle type="submit" >Salvar</ButtonToggle>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default FormModal;