import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {pare_url_file} from "../../../helpers";
import axios from "axios";

class SaveList extends Component {

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

  loadSpeciesList = () => {
    fetch('http://localhost:8000/api/species', {
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
    this.loadSpeciesList();
  }

  categoryHandle = (category) => {
    if (category === 17) {
      return ("Nông sản");
    } else if (category === 18) {
      return ("Động vật");
    } else if (category === 19) {
      return ("Trẻ em");
    } else if (category === 20) {
      return ("Người già");
    }
  };

  deleteSpecies = (event, species) => {
    if (!window.confirm("Xác nhận xóa \n [" + species.spe_name + "]")) {
      return;
    }
    fetch('http://127.0.0.1:8000/api/species/' + species.id, {
        method: 'delete'
      },
    ).then(
      this.loadSpeciesList()
    )
  };
  changeStatus = (event, category) => {
    var url = '/api/species/changeStatus/' + category.id;
    axios.post(url
    ).then(this.loadSpeciesList()
    );
  };
  changeHot = (event, category) => {
    var url = '/api/species/changeHot/' + category.id;
    axios.post(url
    ).then(this.loadSpeciesList()
    );
  };
  changeColor = (status) => {
    if (status === 1) {
      return ("ghost-primary");
    } else if (status === 0) {
      return ("ghost-danger");
    }
  };


  render() {

    let {items, isLoaded} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Link to={"/save/create"}>
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
                      <th scope="col">Thông tin giải cứu</th>
                      <th scope="col">Danh mục</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Tình trạng</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((species, index) => {
                      return <tr key={index}>
                        <td>{species.id}</td>
                        <td>{species.spe_name}</td>
                        <td>{this.categoryHandle(species.spe_category_id)}</td>
                        <td>
                          <img src={pare_url_file(species.spe_images1)} alt="" className={"img-avatar mr-3"}
                               width={50 + 'px'}/>
                          <img src={pare_url_file(species.spe_images2)} alt="" className={"img-avatar mr-3"}
                               width={50 + 'px'}/>
                          <img src={pare_url_file(species.spe_images3)} alt="" className={"img-avatar mr-3"}
                               width={50 + 'px'}/>
                        </td>
                        <td>
                          <span onClick={event => this.changeStatus(event, species)}><Button size="sm"
                                                                                             color={this.changeColor(species.spe_status)}> {species.spe_status === 1 ? "Public" : "private"}</Button></span>
                        </td>
                        <td>
                          <span onClick={event => this.changeHot(event, species)}><Button size="sm"
                                                                                          color={this.changeColor(species.spe_hot)}> {species.spe_hot === 1 ? "Ổn định" : "Khẩn cấp"}</Button></span>
                        </td>
                        <td>
                          <Link to={"/save/" + species.id} className={"edit-button"}><Button size="sm"
                                                                                             color="ghost-primary"><i
                            className="fa fa-pencil"/> sửa</Button></Link>
                          <span onClick={event => this.deleteSpecies(event, species)}
                                id={species.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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

export default SaveList;
