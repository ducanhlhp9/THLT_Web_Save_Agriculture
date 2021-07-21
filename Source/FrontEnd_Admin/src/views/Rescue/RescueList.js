import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import axios from "axios";
import dayjs from "dayjs";
import {pare_url_file} from "../../helpers";

class RescueList extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      rescues: [],
      spercies:[]
    }
  }

  loadRescueList = () => {
    fetch('http://127.0.0.1:8000/api/rescue', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        rescues: json,
      })
    });
  };

  componentDidMount() {
    this.loadRescueList();
    axios.get('/api/species').then(res=>{
      this.setState({
        species:res.data,
        isLoaded: true,
      })
    })
  }


  deleteRescue = (event, rescue) => {
    if (!window.confirm("Xác nhận xóa danh mục\n [" + rescue.name + "]")) {
      return;
    }
    fetch('/api/rescue/' + rescue.id, {
        method: 'delete'
      },
    ).then(this.loadRescueList()
    )
  };
  changeColor = (status) => {
    if (status === 1) {
      return ("ghost-primary");
    } else if (status === 0) {
      return ("ghost-danger");
    }
  };
  showse=(id)=>{
    let data1=this.state.species.find(value=>value.id ===id)
    return(
      <td>{data1.name}</td>
    )
  }
  render() {
    let {rescues, isLoaded} = this.state;
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
                      <th scope="col">Điện thoại</th>
                      <th scope="col">Địa chỉ</th>
                      <th scope="col">Nghề nghiệp</th>
                      <th scope="col">Tin nhắn</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rescues.map((rescue, index) => {
                      return <tr key={index}>
                        <td>{rescue.id}</td>
                        <td>{rescue.name}</td>
                        <td>{rescue.email}</td>
                        <td>{rescue.phone}</td>
                        <td>{rescue.address}</td>
                        <td>{rescue.job}</td>
                        <td>{rescue.message}</td>
                        {this.showse(rescue.species_id)}
                        <td>{rescue.created_at =now.format("YYYY-MM-DD")}</td>
                        <td>
                          <span onClick={event => this.deleteRescue(event, rescue)}
                                id={rescue.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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

export default RescueList;
