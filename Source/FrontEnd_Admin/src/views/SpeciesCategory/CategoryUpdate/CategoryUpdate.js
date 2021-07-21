import React, {Component} from 'react';
import axios from "axios";
import notify from "../../../helpers/notification";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import {Link} from "react-router-dom";

class CategoryUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Chỉnh sửa Danh mục chủng loại",
      speciesCategory: {
        name: "",
        cat_id: "",
      },
      items: [],
      isLoaded: false,
    }
  }
  loadCategoryList = () => {
    fetch('http://127.0.0.1:8000/api/category', {
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
    this.loadSpeciesCategoryInfor();
    this.loadCategoryList();
  }

  onHandleChange = (event) => {
    this.setState({
      speciesCategory: {...this.state.speciesCategory, [event.target.id]: event.target.value},
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    let speciesCategory = JSON.parse(JSON.stringify(this.state.speciesCategory));
    console.log(speciesCategory);
    axios({
      method: 'put',
      url: 'http://127.0.0.1:8000/api/speciesCategory/' + id,
      data: speciesCategory
    })
      .then(res => {
        this.setState({speciesCategory}, () => {
          notify.success('Chỉnh sửa thành công');
        });
        this.props.history.push('/speciesCategory');
      })
      .catch(err => console.log(err));
  };

  loadSpeciesCategoryInfor = () => {
    let id = this.props.match.params.id;
    fetch('http://127.0.0.1:8000/api/speciesCategory/' + id, {
      method: 'get',
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        speciesCategory: json,
      })
    });
  };

  render() {
    let {items, isLoaded, speciesCategory} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="6">
              <Card>
                <CardHeader>
                  <strong>{this.state.feature_name}</strong>
                </CardHeader>
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="cat_id">Chọn danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="cat_id" id="cat_id"
                               value={speciesCategory.cat_id}
                               onChange={this.onHandleChange}>
                          <option value="">Chọn danh mục</option>
                          {items.map((category, index) => {
                            return <option key={index}
                                           value={category.id}>{category.name}</option>
                          })}
                        </Input>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_name">Tên chủng loại</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="name" name="name"
                               value={speciesCategory.name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="mr-3" type="submit" size="sm" color="primary"
                          onClick={this.onHandleSubmit}>
                    <i className="fa fa-dot-circle-o"> </i> Chỉnh sửa
                  </Button>
                  <Link to={"/speciesCategory"}>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"> </i> Hủy bỏ</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}


export default CategoryUpdate;
