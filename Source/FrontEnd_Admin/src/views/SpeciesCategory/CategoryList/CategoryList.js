import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import axios from "axios";
import dayjs from "dayjs";
import {pare_url_file} from "../../../helpers";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      speciesCategories: [],
    }
  }

  loadSpeciesCategoryList = () => {
    fetch('http://127.0.0.1:8000/api/speciesCategory', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        speciesCategories: json,
      })
    });
  };
  categoryHandle = (category) => {
    if (category === 3) {
      return ("Nông sản");
    } else if (category === 4) {
      return ("Động vật");
    }
  };

  componentDidMount() {
    this.loadSpeciesCategoryList();
  }


  deleteSpeciesCategory = (event, speciesCategories) => {
    if (!window.confirm("Xác nhận xóa danh mục\n [" + speciesCategories.name + "]")) {
      return;
    }
    fetch('/api/speciesCategory/' + speciesCategories.id, {
        method: 'delete'
      },
    ).then(this.loadSpeciesCategoryList()
    )
  };
  changeColor = (status) => {
    if (status === 1) {
      return ("ghost-primary");
    } else if (status === 0) {
      return ("ghost-danger");
    }
  };
  changeStatus = (event, speciesCategory) => {
    var url = '/api/speciesCategory/changeStatus/' + speciesCategory.id;
    axios.post(url
    ).then(this.loadSpeciesCategoryList()
    );
  };
  changeActive = (event, speciesCategory) => {
    var url = '/api/speciesCategory/changeHot/' + speciesCategory.id;
    axios.post(url
    ).then(this.loadSpeciesCategoryList()
    );
  };

  render() {
    let {speciesCategories, isLoaded} = this.state;
    var now=dayjs();
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Link to={"/speciesCategory/create"}>
            <Button color="primary" className={"mb-3"}>
              <i className="fa fa-lightbulb-o">{''}</i>&nbsp;Tạo mới
            </Button>
          </Link>
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"> </i> Phân loại theo danh mục
                </CardHeader>
                <CardBody>
                  <Row className={"mb-3"}>
                    <Col md="5">
                      <Input type="text"
                             placeholder="Tìm kiếm ..."
                             name="username:q"
                             onChange={this.onConditionChange}
                      />
                    </Col>
                  </Row>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Danh mục</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Active</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Ngày chỉnh sửa</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {speciesCategories.map((speciesCategory, index) => {
                      return <tr key={index}>
                        <td>{speciesCategory.id}</td>
                        <td>{this.categoryHandle(speciesCategory.cat_id)}</td>
                        <td>{speciesCategory.name}</td>
                        <td>{speciesCategory.slug}</td>
                        <td>
                          <span onClick={event => this.changeStatus(event, speciesCategory)}><Button size="sm"
                                                                                             color={this.changeColor(speciesCategory.status)}> {speciesCategory.status === 1 ? "Ổn định" : "Khẩn cấp"}</Button></span>
                        </td>
                        <td>
                          <span onClick={event => this.changeActive(event, speciesCategory)}><Button size="sm"
                                                                                          color={this.changeColor(speciesCategory.active)}> {speciesCategory.active === 1 ? "Public" : "private"}</Button></span>
                        </td>
                        <td>{speciesCategory.created_at =now.format("YYYY-MM-DD")}</td>
                        <td>{speciesCategory.updated_at =now.format("YYYY-MM-DD")}</td>
                        <td>
                          <Link to={"/speciesCategory/" + speciesCategory.id} className={"edit-button"}><Button size="sm"
                                                                                                  color="ghost-primary"><i
                            className="fa fa-pencil"/> sửa</Button></Link>
                          <span onClick={event => this.deleteSpeciesCategory(event, speciesCategory)}
                                id={speciesCategory.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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

export default CategoryList;
