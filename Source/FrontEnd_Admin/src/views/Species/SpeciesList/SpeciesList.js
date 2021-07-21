import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {pare_url_file} from "../../../helpers";
import axios from "axios";
import dayjs from "dayjs";

class SpeciesList extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      items: [],
      error: {},
      limit: 15,
      totalPage: 0,
      users: [],
      speciesCategories:[]
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

  componentDidMount() {
    this.loadSpeciesList();
  }

  categoryHandle = (category) => {
    if (category === 15) {
      return ("Nông sản");
    } else if (category === 16) {
      return ("Động vật");
    }
  };
  speciesCategoryHandle = (speciesCategory) => {
    if (speciesCategory === 17) {
      return ("Nông sản");
    } else if (speciesCategory === 18) {
      return ("Động vật");
    } else if (speciesCategory === 19) {
      return ("Trẻ em");
    } else if (speciesCategory === 20) {
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
  changeColor = (status) => {
    if (status === 0) {
      return ("ghost-primary");
    } else if (status === 1) {
      return ("ghost-danger");
    }
  };
  changeActive = (event, category) => {
    var url = '/api/species/changeActive/' + category.id;
    axios.post(url
    ).then(this.loadSpeciesList()
    );
  };

  show=(id)=>{
    let index=this.state.speciesCategories.findIndex(value=>value.id===id)

    let data1=this.state.speciesCategories
    data1= Object(data1)

    let data=this.state.speciesCategories.find(value=>value.id===id)
    // console.log(index,data,data1[index].name)

    if (data1[index]!==undefined) {
      // console.log(data1[index].name , typeof (data1[index]))
      return(
        <td>{data1[index].name}</td>
      )
    } else {
      return(
        <td></td>
      )
    }
  }
  render() {
    var now = dayjs();
    let {items,speciesCategories, isLoaded} = this.state;
    // console.log(speciesCategories)
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Link to={"/Species/create"}>
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
                      <th scope="col">Phân loại</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Tình trạng</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((species, index) => {
                      return <tr key={index}>
                        <td>{species.id}</td>
                        <td>{species.name}</td>
                        {/*<td>{species.spe_cat_id}</td>*/}
                        {this.show(species.spe_cat_id)}
                        <td>
                          <span onClick={event => this.changeStatus(event, species)}><Button size="sm"
                                                                                             color={this.changeColor(species.status)}> {species.status === 1 ? "Public" : "private"}</Button></span>
                        </td>
                        <td>
                          <span onClick={event => this.changeActive(event, species)}><Button size="sm"
                                                                                             color={this.changeColor(species.active)}> {species.active === 1 ? "Khẩn cấp" : "Ổn định"}</Button></span>
                        </td>
                        <td>{species.description_seo}</td>
                        <td>
                          <img src={pare_url_file(species.image1)} alt="" className={"img-avatar mr-3"}
                               width={20 + 'px'}/>
                          <img src={pare_url_file(species.image2)} alt="" className={"img-avatar mr-3"}
                               width={20 + 'px'}/>
                          <img src={pare_url_file(species.image3)} alt="" className={"img-avatar mr-3"}
                               width={20 + 'px'}/>
                        </td>
                        <td>
                          <Link to={"/Species/" + species.id} className={"edit-button"}><Button size="sm"
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

export default SpeciesList;
