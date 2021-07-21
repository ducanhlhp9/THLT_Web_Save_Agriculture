import React, {Component} from 'react';
import axios from "axios";
import notify from "../../../helpers/notification";
import {toast} from "react-toastify";
import CKEditor from "@ckeditor/ckeditor5-react";


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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import update from "immutability-helper";

let fileReader;

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Thêm mới bài viết tổ chức",
      cat_id: "",
      image1: null,
      image2: null,
      image3: null,
      description: "",
      description_seo: "",
      title: "",
      title_seo: "",
      isLoaded: false,
      items: [],
      files: '',
      editor: null,
      content: {
        content1: "",
        content2: "",
        content3: "",
      },
    }
  }

  loadOrganizationCategoryList = () => {
    fetch('http://127.0.0.1:8000/api/organizationCategory', {
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

  handleContent1Change = (event, editor) => {
    const data = editor.getData();

    this.setState({content: update(this.state.content, {'content1': {$set: data}})});
  };
  handleContent2Change = (event, editor) => {
    const data = editor.getData();

    this.setState({content: update(this.state.content, {'content2': {$set: data}})});
  };
  handleContent3Change = (event, editor) => {
    const data = editor.getData();

    this.setState({content: update(this.state.content, {'content3': {$set: data}})});
  };

  componentDidMount() {
    this.loadOrganizationCategoryList();
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleImage1Change = (e) => {
    this.setState({
      image1: e.target.files[0],
    })
  };
  handleImage2Change = (e) => {
    this.setState({
      image2: e.target.files[0],
    })
  };
  handleImage3Change = (e) => {
    this.setState({
      image3: e.target.files[0],
    })
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image1', this.state.image1, this.state.image1.name);
    form_data.append('image2', this.state.image2, this.state.image2.name);
    form_data.append('image3', this.state.image3, this.state.image3.name);
    form_data.append('cat_id', this.state.cat_id);
    form_data.append('name', this.state.name);
    form_data.append('description', this.state.description);
    form_data.append('description_seo', this.state.description_seo);
    form_data.append('title', this.state.title);
    form_data.append('title_seo', this.state.title_seo);
    form_data.append('content1', this.state.content.content1);
    form_data.append('content2', this.state.content.content2);
    form_data.append('content3', this.state.content.content3);
    let url = 'http://127.0.0.1:8000/api/organization';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
      }
    })
      .then(res => {
        this.props.history.push('/organization');
        notify.success('Thêm mới thành công');
      })
      .catch(err => console.log(err))
  };

  render() {
    let {items, isLoaded, content} = this.state;
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
                          {items.map((item, index) => {
                            return <option key={index}
                                           value={item.id}>{item.name}</option>
                          })}
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="name">Tên Tổ chức</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="name" name="name"
                               value={this.state.name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="image1">Hình ảnh 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="image1" accept="image/png, image/jpeg, image/jpeg"
                               name="image1"
                               onChange={this.handleImage1Change}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="image2">Hình ảnh 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="image2" accept="image/png, image/jpeg, image/jpeg"
                               name="image2"
                               onChange={this.handleImage2Change}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="image3">Hình ảnh 3</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="image3" accept="image/png, image/jpeg, image/jpeg"
                               name="image3"
                               onChange={this.handleImage3Change}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="title_seo">Tiêu đề ngắn</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Tiêu đề ngắn" id="title_seo" name="title_seo"
                               value={this.state.title_seo}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="title">Tiêu đề</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Tiêu đề" id="title" name="title"
                               value={this.state.title}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="description_seo">Mô tả ngắn</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" id="description_seo" name="description_seo" rows="2"
                               placeholder="Nhập Mô tả ngắn" onChange={this.onHandleChange}
                               value={this.state.description_seo}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="description">Mô tả</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" id="description" name="description" rows="5"
                               placeholder="Nhập Mô tả" onChange={this.onHandleChange}
                               value={this.state.description}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="content1">Nội dung 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <CKEditor
                          editor={ClassicEditor}
                          value={content.content1}
                          data={content.content1 || ''}
                          onInit={editor => {
                            this.setState({editor: editor})
                          }}
                          onChange={this.handleContent1Change}
                          onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                          }}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="content2">Nội dung 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <CKEditor
                          editor={ClassicEditor}
                          value={content.content2}
                          data={content.content2 || ''}
                          onInit={editor => {
                            this.setState({editor: editor})
                          }}
                          onChange={this.handleContent2Change}
                          onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                          }}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="content3">Nội dung 3</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <CKEditor
                          editor={ClassicEditor}
                          value={content.content3}
                          data={content.content3 || ''}
                          onInit={editor => {
                            this.setState({editor: editor})
                          }}
                          onChange={this.handleContent3Change}
                          onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                          }}
                        />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="mr-3" type="submit" size="sm" color="primary"
                          onClick={this.onHandleSubmit}>
                    <i className="fa fa-dot-circle-o"> </i> Thêm mới
                  </Button>
                  <Link to={"/organization"}>
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

export default Create;
