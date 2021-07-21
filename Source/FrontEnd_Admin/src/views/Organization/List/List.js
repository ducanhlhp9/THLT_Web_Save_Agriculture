import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {pare_url_file} from "../../../helpers";
import axios from "axios";
import dayjs from "dayjs";

class List extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      items: [],
      error: {},
      limit: 15,
      totalPage: 0,
      users: [],
    }
  }

  loadOrganizationList = () => {
    fetch('http://localhost:8000/api/organization', {
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
    this.loadOrganizationList();
  }


  deleteOrganization = (event, organization) => {
    if (!window.confirm("Xác nhận xóa \n [" + organization.spe_name + "]")) {
      return;
    }
    fetch('http://127.0.0.1:8000/api/organization/' + organization.id, {
        method: 'delete'
      },
    ).then(
      this.loadOrganizationList()
    )
  };
  changeStatus = (event, category) => {
    var url = '/api/organization/changeStatus/' + category.id;
    axios.post(url
    ).then(this.loadOrganizationList()
    );
  };
  // changeHot = (event, category) => {
  //   var url = '/api/organization/changeStatus/' + category.id;
  //   axios.post(url
  //   ).then(this.loadOrganizationList()
  //   );
  // };
  changeColor = (status) => {
    if (status === 1) {
      return ("ghost-primary");
    } else if (status === 0) {
      return ("ghost-danger");
    }
  };


  render() {
    var now = dayjs();
    let {items, isLoaded} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Link to={"/organization/create"}>
            <Button color="primary" className={"mb-3"}>
              <i className="fa fa-lightbulb-o">{''}</i>&nbsp;Tạo mới
            </Button>
          </Link>
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"> </i> Quản lý Thông tin giải cứu
                </CardHeader>
                <CardBody>
                  <Row className={"mb-3"}>
                  </Row>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Danh mục Tổ chức</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Tiêu đề</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Ngày chỉnh sửa</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((organization, index) => {
                      return <tr key={index}>
                        <td>{organization.id}</td>
                        <td>{organization.name}</td>
                        <td>{organization.cat_id}</td>
                        <td>
                          <span onClick={event => this.changeStatus(event, organization)}><Button size="sm"
                                                                                             color={this.changeColor(organization.status)}> {organization.status === 1 ? "Public" : "private"}</Button></span>
                        </td>
                        <td>{organization.title_seo}</td>
                        <td>{organization.description_seo}</td>
                        <td>
                          <img src={pare_url_file(organization.image1)} alt="" className={"img-avatar mr-3"}
                               width={15 + 'px'}/>
                          <img src={pare_url_file(organization.image2)} alt="" className={"img-avatar mr-3"}
                               width={15 + 'px'}/>
                          <img src={pare_url_file(organization.image3)} alt="" className={"img-avatar mr-3"}
                               width={15 + 'px'}/>
                        </td>
                        <td>{organization.updated_at = now.format("YYYY-MM-DD")}</td>
                        <td>
                          <Link to={"/organization/" + organization.id} className={"edit-button"}><Button size="sm"
                                                                                                color="ghost-primary"><i
                            className="fa fa-pencil"/> sửa</Button></Link>
                          <span onClick={event => this.deleteSpecies(event, organization)}
                                id={organization.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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
