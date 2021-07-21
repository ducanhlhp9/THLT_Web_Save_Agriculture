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

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_name: "Chỉnh sửa Danh mục",
      org_categories: {
        name: "",
        avatar: null,
      },

      isLoaded: false,
      files: null

    }
  }

  componentDidMount() {
    this.loadOrganizationCategoryInfor();

  }

  onHandleChange = (event) => {
    this.setState({
      org_categories: {...this.state.org_categories, [event.target.id]: event.target.value},
    });
  };

  handleAvatarChange = (e) => {
    this.setState({
      files: e.target.files[0],
    })
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    let org_categories = JSON.parse(JSON.stringify(this.state.org_categories));
    org_categories.avatar = create_name(this.state.files.name);
    console.log(org_categories.avatar)
    axios({
      method: 'put',
      url: 'http://127.0.0.1:8000/api/organizationCategory/' + id,
      data: org_categories
    })
      .then(res => {
        this.setState({org_categories}, () => {
          notify.success('Chỉnh sửa thành công');
        });
        this.props.history.push('/organizationCategory');
      })
      .catch(err => console.log(err));
    let form_data = new FormData();
    form_data.append('avatar', this.state.files, this.state.files.name);
    let url = 'http://127.0.0.1:8000/api/uploadFileOrganizationCategory';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
      })
      .catch(err => console.log(err))
  };

  loadOrganizationCategoryInfor = () => {
    let id = this.props.match.params.id;
    console.log(id)
    fetch('http://127.0.0.1:8000/api/organizationCategory/' + id, {
      method: 'get',
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        org_categories: json,
      })
    });
  };

  render() {
    let {isLoaded, org_categories} = this.state;
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
                        <Label htmlFor="name">Tên Danh mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input placeholder="fa fa-home" id="name" name="name"
                               value={org_categories.name}
                               onChange={this.onHandleChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="avatar">Hình ảnh</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="avatar" accept="image/png, image/jpeg, image/jpeg"
                               name="avatar"
                               onChange={this.handleAvatarChange}
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
                  <Link to={"/organizationCategory"}>
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


export default Update;
