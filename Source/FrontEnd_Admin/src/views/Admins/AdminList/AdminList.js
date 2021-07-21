import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import axios from "axios";

class AdminList extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      admin: [],
      users: [],
    }
  }

  loadAdminList = () => {
    fetch('http://127.0.0.1:8000/api/admin', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        admin: json,
      })
    });
  };

  componentDidMount() {
    this.loadAdminList();
  }


  deleteAdmin = (event, category) => {
    if (!window.confirm("Xác nhận xóa danh mục\n [" + category.cate_name + "]")) {
      return;
    }
    fetch('/api/admin/' + category.id, {
        method: 'delete'
      },
    ).then(this.loadAdminList()
    )
  };


  render() {
    let {admin, isLoaded} = this.state;
    console.log(admin)
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Link to={"/admin/create"}>
            <Button color="primary" className={"mb-3"}>
              <i className="fa fa-lightbulb-o">{''}</i>&nbsp;Tạo mới
            </Button>
          </Link>
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"> </i> Quản lý Admin
                </CardHeader>
                <CardBody>
                  <Row className={"mb-3"}>
                    <Col md="5">
                      <Input type="text"
                             placeholder="Tìm kiếm: tên người dùng..."
                             name="username:q"
                             onChange={this.onConditionChange}
                      />
                    </Col>
                  </Row>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {admin.map((admin, index) => {
                      return <tr key={index}>
                        <td>{admin.id}</td>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                        <td>{admin.phone}</td>
                        <td>{admin.address}</td>
                        <td>
                          <span onClick={event => this.deleteAdmin(event, admin)}
                                id={admin.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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

export default AdminList;
