import React, {Component} from 'react';
import axios from "axios";
import notify from "../../../../helpers/notification";
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
import {clone, create_name} from "../../../../helpers";
import {Link} from "react-router-dom";
let fileReader;

class SpeciesArticlesUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Chỉnh sửa bài viết",
      articleSpecies: {
        as_name: "",
        as_category_id: "",
        as_images1: " ",
        as_images2: " ",
        as_images3: " ",
        as_description: "",
        as_description_seo: "",
        as_hot: "",
        as_content1:"",
        as_content2:"",
        as_content3:"",
        as_link:""
      },
      items: [],
      isLoaded: false,
      file1: null,
      file2: null,
      file3: null,
      editor: null,

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
    this.loadArticleInfor();
    this.loadCategoryList();
  }

  onHandleChange = (event) => {
      this.setState({
        articleSpecies: {...this.state.articleSpecies, [event.target.name]: event.target.value},
      });
    };
  fileSelectedHandler = (event) => {
    this.setState({
      as_images1: event.target.files[0],
    });
    console.log(event.target.files[0])

  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    console.log(this.state);
    let articleSpecies = JSON.parse(JSON.stringify(this.state.articleSpecies));
    articleSpecies.as_images1 = create_name(this.state.file1.name);
    articleSpecies.as_images2 = create_name(this.state.file2.name);
    articleSpecies.as_images3 = create_name(this.state.file3.name);
    console.log(articleSpecies);
    axios({
      method: 'put',
      url:'http://127.0.0.1:8000/api/articleSpecies/'+id,
      data: articleSpecies
    })
      .then(res => {
        this.setState({articleSpecies}, () => {
          notify.success('Chỉnh sửa thành công');
        });
        this.props.history.push('/articles/Species');
      })
      .catch(err => console.log(err));
    let form_data = new FormData();
    form_data.append('as_images1', this.state.file1, this.state.file1.name);
    form_data.append('as_images2', this.state.file2, this.state.file2.name);
    form_data.append('as_images3', this.state.file3, this.state.file3.name);
    let url = 'http://127.0.0.1:8000/api/uploadFileArticles';
    axios.post(url, form_data,{
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
      })
      .catch(err => console.log(err))
  };

  loadArticleInfor = () => {
    let id = this.props.match.params.id;
    fetch('http://localhost:8000/api/articleSpecies/' + id, {
      method: 'get',
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        articleSpecies: json,
      })
    });
  };
  handleContentChange1 = (event, editor) => {
    const data = editor.getData();

    this.setState({articleSpecies: update(this.state.articleSpecies, {'as_content1': {$set: data}})});
  };
  handleContentChange2 = (event, editor) => {
    const data = editor.getData();

    this.setState({articleSpecies: update(this.state.articleSpecies, {'as_content2': {$set: data}})});
  };
  handleContentChange3 = (event, editor) => {
    const data = editor.getData();

    this.setState({articleSpecies: update(this.state.articleSpecies, {'as_content3': {$set: data}})});
  };
  handleFileRead = (event) => {
    const as_content1 = fileReader.result;
    const as_content2 = fileReader.result;
    const as_content3 = fileReader.result;
    this.state.editor.setData(as_content1);
    this.state.editor.setData(as_content2);
    this.state.editor.setData(as_content3);
  };
  handleImageChange1 = (e) => {
    this.setState({
      file1: e.target.files[0],
    })
  };
  handleImageChange2 = (e) => {
    this.setState({
      file2: e.target.files[0],

    })
  };
  handleImageChange3 = (e) => {
    this.setState({
      file3: e.target.files[0],

    })
  };


  render() {
    let {items, isLoaded, articleSpecies} = this.state;
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
                        <Label htmlFor="as_category_id">Chọn danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="as_category_id" id="as_category_id"
                               value={articleSpecies.as_category_id}
                               onChange={this.onHandleChange}>
                          <option value="">Chọn danh mục</option>
                          {items.map((category, index) => {
                            return <option key={index}
                                           value={category.id}>{category.cate_name}</option>
                          })}
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_name">Tên chủng loại</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="as_name" name="as_name"
                               value={articleSpecies.as_name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_title">Tên bài viết</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Nhập tiêu đề" id="as_title" name="as_title"
                               value={articleSpecies.as_title}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_title_seo">Title seo</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Nhập tiêu đề rút gọn" id="as_title_seo" name="as_title_seo"
                               value={articleSpecies.as_title_seo}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_images1">Hình ảnh 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="as_images1" accept="image/png, image/jpeg, image/jpeg"  name="as_images1"
                               onChange={this.handleImageChange1}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_images2">Hình ảnh 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="as_images2" accept="image/png, image/jpeg, image/jpeg"  name="as_images2"
                               onChange={this.handleImageChange2}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_images3">Hình ảnh 3</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="as_images3" accept="image/png, image/jpeg, image/jpeg"  name="as_images3"
                               onChange={this.handleImageChange3}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_description">Mô tả</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Nhập mô tả" id="as_description" name="as_description"
                               value={articleSpecies.as_description}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_description_seo">Description seo</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Nhập mô tả ngắn gọn" id="as_description_seo" name="as_description_seo"
                               value={articleSpecies.spe_name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_link">Link </Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="URL" id="as_link" name="as_link"
                               value={articleSpecies.as_link}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="as_content1">Nội dung 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <CKEditor
                                  editor={ClassicEditor}
                                  value={articleSpecies.as_content1}
                                  data={articleSpecies.as_content1 || ''}
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
                        <Label htmlFor="as_content2">Nội dung 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <CKEditor
                                  editor={ClassicEditor}
                                  value={articleSpecies.as_content2}
                                  data={articleSpecies.as_content2 || ''}
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
                        <Label htmlFor="as_content3">Nội dung 3</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <CKEditor
                                  editor={ClassicEditor}
                                  value={articleSpecies.as_content3}
                                  data={articleSpecies.as_content3 || ''}
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
                  <Link to={"/articles/species"}>
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

export default SpeciesArticlesUpdate;
