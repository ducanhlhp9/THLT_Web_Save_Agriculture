import React, {Component} from 'react';
import axios from "axios";
import notify from "../../../helpers/notification";
import {toast} from "react-toastify";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import update from 'immutability-helper';
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
import {clone, create_name} from "../../../helpers";
import {Link} from "react-router-dom";
let fileReader;

class SpeciesUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Chỉnh sửa bài viết",
      species: {
        name: "",
        spe_cat_id: "",
        image1: null,
        image2: null,
        image3: null,
        description: "",
        description_seo: "",
        content1:"",
        content2:"",
        content3:"",
      },
      items: [],
      isLoaded: false,
      file1: null,
      file2: null,
      file3: null,
      editor: null,

    }
  }

  loadSpeciesCategoryList = () => {
    fetch('http://127.0.0.1:8000/api/speciesCategory', {
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
    this.loadSpeciesCategoryList();
    this.loadSpeciesInfor();
  }

  onHandleChange = (event) => {
    this.setState({
      species: {...this.state.species, [event.target.name]: event.target.value},
    });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    console.log(this.state);
    let species = JSON.parse(JSON.stringify(this.state.species));
    species.image1 = create_name(this.state.file1.name);
    species.image2 = create_name(this.state.file2.name);
    species.image3 = create_name(this.state.file3.name);
    console.log(species);
    axios({
      method: 'put',
      url:'http://127.0.0.1:8000/api/species/'+id,
      data: species
    })
      .then(res => {
        this.setState({species}, () => {
          notify.success('Chỉnh sửa thành công');
        });
        this.props.history.push('/species');
      })
      .catch(err => console.log(err));
    let form_data = new FormData();
    form_data.append('image1', this.state.file1, this.state.file1.name);
    form_data.append('image2', this.state.file2, this.state.file2.name);
    form_data.append('image3', this.state.file3, this.state.file3.name);
    let url = 'http://127.0.0.1:8000/api/uploadFileSpecies';
    axios.post(url, form_data,{
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
      })
      .catch(err => console.log(err))
  };

  loadSpeciesInfor = () => {
    let id = this.props.match.params.id;
    fetch('http://localhost:8000/api/species/' + id, {
      method: 'get',
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        species: json,
      })
    });
  };
  handleContentChange1 = (event, editor) => {
    const data = editor.getData();

    this.setState({species: update(this.state.species, {'content1': {$set: data}})});
  };
  handleContentChange2 = (event, editor) => {
    const data = editor.getData();

    this.setState({species: update(this.state.species, {'content2': {$set: data}})});
  };
  handleContentChange3 = (event, editor) => {
    const data = editor.getData();

    this.setState({species: update(this.state.species, {'content3': {$set: data}})});
  };
  handleFileRead = (event) => {
    const content1 = fileReader.result;
    const content2 = fileReader.result;
    const content3 = fileReader.result;
    this.state.editor.setData(content1);
    this.state.editor.setData(content2);
    this.state.editor.setData(content3);
  };
  handleImage1Change = (e) => {
    this.setState({
      file1: e.target.files[0],
    })
  };
  handleImage2Change = (e) => {
    this.setState({
      file2: e.target.files[0],

    })
  };
  handleImage3Change = (e) => {
    this.setState({
      file3: e.target.files[0],

    })
  };


  render() {
    let {items, isLoaded, species} = this.state;
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
                        <Label htmlFor="spe_cat_id">Chọn danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="spe_cat_id" id="spe_cat_id"
                               value={species.spe_cat_id}
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
                        <Label htmlFor="name">Tên chủng loại</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="name" name="name"
                               value={species.name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="image1">Hình ảnh 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="image1" accept="image/png, image/jpeg, image/jpeg"  name="image1"
                               onChange={this.handleImage1Change}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="image2">Hình ảnh 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="image2" accept="image/png, image/jpeg, image/jpeg"  name="image2"
                               onChange={this.handleImage2Change}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="image3">Hình ảnh 3</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="image3" accept="image/png, image/jpeg, image/jpeg"  name="image3"
                               onChange={this.handleImage3Change}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="title_seo">Tiêu đề ngắn</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Tiêu đề ngắn" id="title_seo" name="title_seo"
                               value={species.title_seo}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="title">Tiêu đề</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Tiêu đề" id="title" name="title"
                               value={species.title}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="description_seo">Description seo</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Nhập mô tả ngắn gọn" id="description_seo" name="description_seo"
                               value={species.description_seo}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="description">Mô tả</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Nhập mô tả" id="description" name="description"
                               value={species.description}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="content1">Nội dung 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <CKEditor
                          editor={ClassicEditor}
                          value={species.content1}
                          data={species.content1 || ''}
                          onInit={editor => {
                            this.setState({editor: editor})
                          }}
                          onChange={this.handleContentChange1}
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
                          value={species.content2}
                          data={species.content2 || ''}
                          onInit={editor => {
                            this.setState({editor: editor})
                          }}
                          onChange={this.handleContentChange2}
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
                          value={species.content3}
                          data={species.content3 || ''}
                          onInit={editor => {
                            this.setState({editor: editor})
                          }}
                          onChange={this.handleContentChange3}
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
                    <i className="fa fa-dot-circle-o"> </i> Chỉnh sửa
                  </Button>
                  <Link to={"/species"}>
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

export default SpeciesUpdate;
