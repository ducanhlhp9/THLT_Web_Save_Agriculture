import React, {Component} from 'react';
import axios from "axios";

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
import {clone} from "../../../helpers";

class CategoryUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Chỉnh sửa Danh mục chủng loại",
      items:{
        cate_name: "",
        cate_icon: "",
        cate_title: "",
        cate_description: ""
      }
    }
  }

  onHandleChange = (event) => {
    this.setState({
      items: {...this.state.items, [event.target.name]: event.target.value},
    });
  };
  onHandleSubmit = (e) => {
    let items = clone(this.state.items);
    let id = this.props.match.params.id;
    axios({
      method: 'put',
      url: 'http://127.0.0.1:8000/api/category/'+ id,
      data: items
    }).then(response => {
      console.log(response);
      this.props.history.push('/SpeciesCategory');
    }).catch(error => {
      console.log(error)
    });
  };
  loadCategoryInfor = () => {
    let id = this.props.match.params.id;
    fetch('http://127.0.0.1:8000/api/category/' + id, {
      method: 'get',
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  };

  componentDidMount() {
    this.loadCategoryInfor();
  }

  render() {
    let {items} = this.state;
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
                             value={items.cate_name}
                             onChange={this.onHandleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="cate_icon">Icon</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input placeholder="fa fa-home"
                             id="cate_icon"
                             name="cate_icon"
                             value={items.cate_icon}
                             onChange={this.onHandleChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="cate_title">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"
                             id="cate_title"
                             name="cate_title"
                             placeholder="Nhập Mô tả"
                             value={items.cate_title}
                             onChange={this.onHandleChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="cate_description">Mô tả</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea"
                             id="cate_description"
                             name="cate_description"
                             rows="7"
                             value={items.cate_description}
                             placeholder="Nhập Mô tả"
                             onChange={this.onHandleChange} />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="mr-3" type="submit" size="sm" color="primary"
                        onClick={this.onHandleSubmit}>
                  <i className="fa fa-dot-circle-o"> </i> Chỉnh sửa
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CategoryUpdate;
