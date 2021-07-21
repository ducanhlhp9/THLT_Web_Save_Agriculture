import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import axios from "axios";
import dayjs from "dayjs";
import {pare_url_file} from "../../helpers";

class List extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      contacts: [],
    }
  }

  loadContactList = () => {
    fetch('http://127.0.0.1:8000/api/contact', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        contacts: json,
      })
    });
  };

  componentDidMount() {
    this.loadContactList();
  }


  deleteContact = (event, contact) => {
    if (!window.confirm("Xác nhận xóa danh mục\n [" + contact.name + "]")) {
      return;
    }
    fetch('/api/contact/' + contact.id, {
        method: 'delete'
      },
    ).then(this.loadContactList()
    )
  };

  render() {
    let {contacts, isLoaded} = this.state;
    var now=dayjs();
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"> </i> Quản lý Danh mục
                </CardHeader>
                <CardBody>
                  <Row className={"mb-3"}>
                    {/*<Col md="5">*/}
                    {/*  <Input type="text"*/}
                    {/*         placeholder="Tìm kiếm: tên người dùng..."*/}
                    {/*         name="username:q"*/}
                    {/*         onChange={this.onConditionChange}*/}
                    {/*  />*/}
                    {/*</Col>*/}
                  </Row>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Số điện thoại</th>
                      <th scope="col">Tin nhắn</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact, index) => {
                      return <tr key={index}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.message}</td>

                        <td>{contact.created_at =now.format("YYYY-MM-DD")}</td>
                        <td>
                          <span onClick={event => this.deleteContact(event, contact)}
                                id={contact.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
                        </td>
                      </tr>
                    })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

export default List;
