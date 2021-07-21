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

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Thêm mới Danh mục tổ chức",
      name: "",
      avatar: null,
      isLoaded: false,
      items: [],
      files: ''

    }
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleAvatarChange = (e) => {
    this.setState({
      avatar: e.target.files[0],
    })
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('avatar', this.state.avatar, this.state.avatar.name);
    form_data.append('name', this.state.name);
    let url = 'http://127.0.0.1:8000/api/organizationCategory';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        this.props.history.push('/organizationCategory');
        notify.success('Thêm mới thành công');
      })
      .catch(err => console.log(err))
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
                        <Label htmlFor="name">Tên Danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="Tên danh mục" id="name" name="name"
                               value={this.state.name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="spe_images3">Avatar</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="avatar" accept="image/png, image/jpeg, image/jpeg"
                               name="avatar"
                               onChange={this.handleAvatarChange}/>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="mr-3" type="submit" size="sm" color="primary"
                          onClick={this.onHandleSubmit}>
                    <i className="fa fa-dot-circle-o"> </i> Thêm mới
                  </Button>
                  <Link to={"/organizationCategory"}>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"> </i> Hủy bỏ</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      )
  }
}

export default Create;
