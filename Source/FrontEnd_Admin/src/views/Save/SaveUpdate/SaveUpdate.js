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
import {clone, create_name, pare_url_file} from "../../../helpers";
import {Link} from "react-router-dom";

class SaveUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Chỉnh sửa giải cứu",
      species:{
        spe_name: "",
        spe_category_id: "",
        spe_description: "",
        spe_hot: "",
        spe_images1: null,
        spe_images2: null,
        spe_images3: null
      },

      items: [],
      isLoaded: false,
      file1: null,
      file2: null,
      file3: null

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
    this.loadSaveInfor();
    this.loadCategoryList();

  }

  onHandleChange = (event) => {
    this.setState({
      species: {...this.state.species, [event.target.id]: event.target.value},
    });
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
  onHandleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    console.log(this.state);
    let species = JSON.parse(JSON.stringify(this.state.species));
    species.spe_images1 = create_name(this.state.file1.name);
    species.spe_images2 = create_name(this.state.file2.name);
    species.spe_images3 = create_name(this.state.file3.name);
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
        this.props.history.push('/save');
      })
      .catch(err => console.log(err));
    let form_data = new FormData();
    form_data.append('spe_images1', this.state.file1, this.state.file1.name);
    form_data.append('spe_images2', this.state.file2, this.state.file2.name);
    form_data.append('spe_images3', this.state.file3, this.state.file3.name);
    let url = 'http://127.0.0.1:8000/api/uploadFileSave';
    axios.post(url, form_data,{
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
      })
      .catch(err => console.log(err))
  };

  loadSaveInfor = () => {
    let id = this.props.match.params.id;
    fetch('http://127.0.0.1:8000/api/species/' + id, {
      method: 'get',
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        species: json,
      })
    });
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
                        <Label htmlFor="spe_category_id">Chọn danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="spe_category_id" id="spe_category_id"
                               value={species.spe_category_id}
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
                        <Label htmlFor="spe_name">Tên chủng loại</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="spe_name" name="spe_name"
                               value={species.spe_name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_images1">Hình ảnh 1</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="spe_images1" accept="image/png, image/jpeg, image/jpeg"  name="spe_images1"
                               onChange={this.handleImageChange1}
                                />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_images2">Hình ảnh 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="spe_images2" accept="image/png, image/jpeg, image/jpeg"  name="spe_images2"
                               onChange={this.handleImageChange2}
                               />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_images3">Hình ảnh 3</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="spe_images3" accept="image/png, image/jpeg, image/jpeg"  name="spe_images3"
                               onChange={this.handleImageChange3}
                               />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_description">Mô tả</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" id="spe_description" name="spe_description" rows="7"
                               placeholder="Nhập Mô tả" onChange={this.onHandleChange}
                               value={species.spe_description}
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



export default SaveUpdate;
