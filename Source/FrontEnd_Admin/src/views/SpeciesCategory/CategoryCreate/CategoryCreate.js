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
import {Link} from "react-router-dom";

class CategoryCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Thêm mới",
      name: "",
      items: [],
    }
  }

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('cat_id', this.state.cat_id);
    form_data.append('name', this.state.name);
    let url = 'http://127.0.0.1:8000/api/speciesCategory';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.history.push('/speciesCategory');
      })
      .catch(err => console.log(err))
  };
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
                        <Label htmlFor="cat_id">Chọn danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="cat_id" id="cat_id"
                               onChange={this.onHandleChange}>
                          <option value={this.state.cat_id}>Chọn danh mục</option>
                          {items.map((category, index) => {
                            return <option key={index}
                                           value={category.id}>{category.name}</option>
                          })}
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="name">Tên chủng loại</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="name" name="name"
                               value={this.state.name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>

                <CardFooter>
                  <Button className="mr-3" type="submit" size="sm" color="primary"
                          onClick={this.onHandleSubmit}>
                    <i className="fa fa-dot-circle-o"> </i> Thêm mới
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

export default CategoryCreate;
