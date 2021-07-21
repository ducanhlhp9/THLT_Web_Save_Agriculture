import React, {Component} from 'react';
import axios from "axios";
import notify from "../../../helpers/notification";
import {toast} from "react-toastify";

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
import CategoryCreate from "../../SpeciesCategory/CategoryCreate";
import {Link} from "react-router-dom";

class SaveCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Thêm mới giải cứu",
      spe_name: "",
      spe_category_id: "",
      spe_images1: null,
      spe_images2: null,
      spe_images3: null,
      spe_description: "",
      spe_hot: "",
      isLoaded: false,
      items: [],
      files: ''

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
    this.loadCategoryList();
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange1 = (e) => {
    this.setState({
      spe_images1: e.target.files[0],
    })
  };
  handleImageChange2 = (e) => {
    this.setState({
      spe_images2: e.target.files[0],
    })
  };
  handleImageChange3 = (e) => {
    this.setState({
      spe_images3: e.target.files[0],
    })
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('spe_images1', this.state.spe_images1, this.state.spe_images1.name);
    form_data.append('spe_images2', this.state.spe_images2, this.state.spe_images2.name);
    form_data.append('spe_images3', this.state.spe_images3, this.state.spe_images3.name);
    form_data.append('spe_category_id', this.state.spe_category_id);
    form_data.append('spe_name', this.state.spe_name);
    form_data.append('spe_description', this.state.spe_description);
    let url = 'http://127.0.0.1:8000/api/species';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.history.push('/save');
      })
      .catch(err => console.log(err))
  };

  render() {
    let {items, isLoaded} = this.state;
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
                        <Label htmlFor="spe_category_id">Chọn danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="spe_category_id" id="spe_category_id"
                               onChange={this.onHandleChange}>
                          <option value={this.state.spe_category_id}>Chọn danh mục</option>
                          {items.map((category, index) => {
                            return <option key={index}
                                           value={category.id}>{category.cate_name}</option>
                          })}
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_name">Tên chủng loại</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="spe_name" name="spe_name"
                               value={this.state.spe_name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_images1">Hình ảnh 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="spe_images1" accept="image/png, image/jpeg, image/jpeg"
                               name="spe_images1"
                               onChange={this.handleImageChange1}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_images2">Hình ảnh 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="spe_images2" accept="image/png, image/jpeg, image/jpeg"
                               name="spe_images2"
                               onChange={this.handleImageChange2}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_images3">Hình ảnh 3</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="spe_images3" accept="image/png, image/jpeg, image/jpeg"
                               name="spe_images3"
                               onChange={this.handleImageChange3}/>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_description">Mô tả</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" id="spe_description" name="spe_description" rows="7"
                               placeholder="Nhập Mô tả" onChange={this.onHandleChange}
                               value={this.state.spe_description}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label>Inline Radios</Label>
                      </Col>
                      <Col md="9">
                        <FormGroup check inline>
                          <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                          <Label className="form-check-label" check htmlFor="inline-radio1">Khẩn cấp</Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="mr-3" type="submit" size="sm" color="primary"
                          onClick={this.onHandleSubmit}>
                    <i className="fa fa-dot-circle-o"> </i> Thêm mới
                  </Button>
                  <Link to={"/save"}>
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

export default SaveCreate;
