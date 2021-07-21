import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {authenticate, login} from "../../../services/HttpService";
import {GlobalContext} from "../../../GlobalContext";

class Login extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);

    this.state = {
      authentication : {
        email: null,
        password: null,
      },
    };
  }
  onChange = (event) => {
    const { authentication } = this.state;

    authentication[event.target.name] = event.target.value;

    this.setState({authentication: {...authentication}});

    // if (validate[event.target.name] !== undefined) {
    //
    //   delete validate[event.target.name];
    //
    //   this.setState({validate: {...validate}});
    // }
  };

  onSubmit = () => {
    login(this.state.authentication).then(result => {
      console.log(result);
      this.context.setAuthenticated(result.data.token, () => {
        this.props.history.push('/')
      })
    })
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Đăng nhập</h1>
                      <p className="text-muted">Đăng nhập vào tài khoản của bạn</p>
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
                {/*<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>*/}
                {/*  <CardBody className="text-center">*/}
                {/*    <div>*/}
                {/*      <h2>Sign up</h2>*/}
                {/*      <Link to="/register">*/}
                {/*        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>*/}
                {/*      </Link>*/}
                {/*    </div>*/}
                {/*  </CardBody>*/}
                {/*</Card>*/}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
