import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import axios from "axios";
import dayjs from "dayjs";
import {pare_url_file} from "../../../helpers";

class List extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      org_categories: [],
    }
  }

  loadOrganizationCategoriesList = () => {
    fetch('http://127.0.0.1:8000/api/organizationCategory', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        org_categories: json,
      })
    });
  };

  componentDidMount() {
    this.loadOrganizationCategoriesList();
  }


  deleteCategory = (event, org_categories) => {
    if (!window.confirm("Xác nhận xóa danh mục\n [" + org_categories.name + "]")) {
      return;
    }
    fetch('/api/organizationCategory/' + org_categories.id, {
        method: 'delete'
      },
    ).then(this.loadOrganizationCategoriesList()
    )
  };
  changeColor = (status) => {
    if (status === 1) {
      return ("ghost-primary");
    } else if (status === 0) {
      return ("ghost-danger");
    }
  };

  render() {
    let {org_categories, isLoaded} = this.state;
    var now=dayjs();
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Link to={"/organizationCategory/create"}>
            <Button color="primary" className={"mb-3"}>
              <i className="fa fa-lightbulb-o">{''}</i>&nbsp;Tạo mới
            </Button>
          </Link>
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"> </i> Quản lý Danh mục tổ chức
                </CardHeader>
                <CardBody>
                  {/*<Row className={"mb-3"}>*/}
                  {/*  <Col md="5">*/}
                  {/*    <Input type="text"*/}
                  {/*           placeholder="Tìm kiếm: tên người dùng..."*/}
                  {/*           name="username:q"*/}
                  {/*           onChange={this.onConditionChange}*/}
                  {/*    />*/}
                  {/*  </Col>*/}
                  {/*</Row>*/}
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Status</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Ngày chỉnh sửa</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {org_categories.map((org_category, index) => {
                      return <tr key={index}>
                        <td>{org_category.id}</td>
                        <td>{org_category.name}</td>
                        <td>{org_category.slug}</td>
                        <td><img src={pare_url_file(org_category.avatar)} alt="" className={"img-avatar mr-3"}
                                 width={50 + 'px'}/></td>
                        <td><Button size="sm"
                                    color={this.changeColor(org_category.status)}> {org_category.status === 1 ? "Public" : "private"}</Button>
                        </td>
                        <td>{org_category.created_at =now.format("YYYY-MM-DD")}</td>
                        <td>{org_category.updated_at =now.format("YYYY-MM-DD")}</td>
                        <td>
                          <Link to={"/organizationCategory/" + org_category.id} className={"edit-button"}><Button size="sm"
                                                                                                  color="ghost-primary"><i
                            className="fa fa-pencil"/> sửa</Button></Link>
                          <span onClick={event => this.deleteCategory(event, org_category)}
                                id={org_category.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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
