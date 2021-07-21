import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import axios from "axios";
import dayjs from "dayjs";

class RegistToBeRescued extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      items: [],
      cl:[]
    }
  }

  loadItemList = () => {
    fetch('http://127.0.0.1:8000/api/registToBeRescued', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  };

  componentDidMount() {
    this.loadItemList();
    axios.get('/api/speciesCategory').then(res=>{
      console.log(res.data)
      this.setState({
        isLoaded: true,
        cl:res.data
      })
    })
  }


  deleteItem = (event, item) => {
    if (!window.confirm("Xác nhận xóa \n [" + item.name + "]")) {
      return;
    }
    fetch('/api/registToBeRescued/' + item.id, {
        method: 'delete'
      },
    ).then(this.loadItemList()
    )
  };
  changeColor = (status) => {
    if (status === 1) {
      return ("ghost-primary");
    } else if (status === 0) {
      return ("ghost-danger");
    }
  };
  changeStatus = (event, item) => {
    var url = '/api/registToBeRescued/changeStatus/' + item.id;
    axios.post(url
    ).then(this.loadItemList()
    );
  };
  showcat=(id)=>{
    let data1=this.state.cl.find(value=>value.id = id)
    return(
      <td>{data1.name}</td>
    )
  }
  render() {
    let {items, isLoaded} = this.state;
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
                  <i className="fa fa-align-justify"> </i> Quản lý Danh sách người đăng kí nhận giải cứu
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
                      <th scope="col">Tên người gửi</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Địa chỉ</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Tên danh mục</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Tin nhắn</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Ngày chỉnh sửa</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => {
                      return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.spe_name}</td>
                        {this.showcat(item.species_category_id)}
                        <td>{item.description}</td>
                        <td>{item.message}</td>
                        <td>
                          <span onClick={event => this.changeStatus(event, item)}><Button size="sm"
                                                                                              color={this.changeColor(item.status)}> {item.status === 1 ? "public" : "private"}</Button></span>
                        </td>
                        <td>{item.updated_at =now.format("YYYY-MM-DD")}</td>
                        <td>
                          <span onClick={event => this.deleteCategory(event, item)}
                                id={item.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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

export default RegistToBeRescued;
