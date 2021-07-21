import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {authenticate, login, PostData} from "../../../services/HttpService";

class Login extends Component {
  constructor() {
    super();
    this.state={
      email:'',
      password:'',
      errors:{}
    }
  }
  onChange=(e) => {
    this.setState({[e.target.name]: e.target.value})

  };

  onSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state);
    const user ={
      email: this.state.email,
      password:this.state.password,
    };
    login(user).then(res=>{
      if(res){
        this.props.history.push('/')
      }
    })
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="email" value={this.state.email} name="email" autoComplete="email"  onChange={this.onChange}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" value ={this.state.password} name="password" placeholder="Password" autoComplete="current-password"  onChange={this.onChange}/>
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button onClick={this.onSubmit} color="primary" className="px-4" value="Login" >Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
