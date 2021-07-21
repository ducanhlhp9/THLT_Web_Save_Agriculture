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
      feature_name: "Thêm mới Danh mục chủng loại",
      cate_name: "",
      cate_icon: "",
      cate_title: "",
      cate_description: ""

    }
  }

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onHandleSubmit = (e) => {
    console.log(this.state)
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/category',
      data: {
        cate_name: this.state.cate_name,
        cate_icon: this.state.cate_icon,
        cate_title: this.state.cate_title,
        cate_description: this.state.cate_description,
      },
    }).then(response => {
      notify.success('Thêm mới thành công');
      this.props.history.push('/SpeciesCategory');
    }).catch(error => {
      console.log(error)
    });
  };

  render() {
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
                      <Label htmlFor="cate_name">Tên danh mục</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="cate_name" name="cate_name" rows="7"
                             placeholder="nhập tên danh mục Template"
                             onChange={this.onHandleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="cate_icon">Icon</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input placeholder="fa fa-home" id="cate_icon" name="cate_icon"
                             onChange={this.onHandleChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="cate_title">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="cate_title" name="cate_title" placeholder="Nhập Mô tả"
                             onChange={this.onHandleChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="cate_description">Mô tả</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" id="cate_description" name="cate_description" rows="7"
                             placeholder="Nhập Mô tả" onChange={this.onHandleChange}/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                  <Button className="mr-3" type="submit" size="sm" color="primary"
                          onClick={this.onHandleSubmit}>
                    <i className="fa fa-dot-circle-o"> </i> Thêm mới
                  </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CategoryCreate;
