import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import dayjs from "dayjs";
import {pare_url_file} from "../../../../helpers";

class PersonalArticles extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      items: [],
      error: {},
      limit: 15,
      totalPage: 0,
      users: [],
    }
  }

  loadArticlesSpeciesList = () => {
    fetch('http://localhost:8000/api/articleSpecies', {
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
    this.loadArticlesSpeciesList();
  }
  categoryHandle=(category)=>{
    if (category === 17) {
      return ("Nông sản");
    } else if (category === 18) {
      return ("Động vật");
    } else if (category === 19) {
      return ("Trẻ em");
    }else if (category === 20) {
      return ("Người già");
    }
  };

  deleteSpecies = (event, articleSpecies) => {
    if (!window.confirm("Xác nhận xóa \n [" + articleSpecies.spe_name + "]")) {
      return;
    }
    fetch('http://127.0.0.1:8000/api/articleSpecies/' + articleSpecies.id, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      },
    ).then(
      (result) => {
        this.loadArticlesSpeciesList()
      },
    ).catch(
      result => {
        if (result.response !== undefined) {
        } else {
          throw result;
        }
      }
    );
  };
  render() {
    let {items, isLoaded} = this.state;
    var now=dayjs();
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Quản lý bài viết giải cứu
                </CardHeader>
                <CardBody>
                  <Row className={"mb-3"}>
                  </Row>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Tên chủng loại</th>
                      <th scope="col">tác giả</th>
                      <th scope="col">title Seo</th>
                      <th scope="col">Content Seo</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((articleSpecies, index) => {
                      return <tr key={index}>
                        <td>{articleSpecies.id}</td>
                        <td>{articleSpecies.as_name}</td>
                        <td>{articleSpecies.as_user_id === null ? 'admin':''}</td>
                        <td>{articleSpecies.as_title_seo}</td>
                        <td>{articleSpecies.as_description_seo}</td>
                        <td>
                          <img src={pare_url_file(articleSpecies.as_images1)} alt="" className={"img-avatar mr-3"} width={50 + 'px'}/>
                          <img src={pare_url_file(articleSpecies.as_images2)} alt="" className={"img-avatar mr-3"} width={50 + 'px'}/>
                          <img src={pare_url_file(articleSpecies.as_images3)} alt="" className={"img-avatar mr-3"} width={50 + 'px'}/>
                        </td>
                        <td>
                          <span><Button size="sm" color="ghost-danger"><i
                            className="fa fa-times"/> {articleSpecies.as_active === 1 ? "Public" : "private"}</Button></span>
                        </td>
                        <td>{articleSpecies.created_at =now.format("YYYY-MM-DD")}</td>
                        <td>
                          <Link to={"/articles/Species/" + articleSpecies.id} className={"edit-button"}><Button size="sm"
                                                                                             color="ghost-primary"><i
                            className="fa fa-pencil"/> sửa</Button></Link>
                          <span onClick={event => this.deleteSpecies(event, articleSpecies)}
                                id={articleSpecies.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
                        </td>
                      </tr>
                    })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

export default PersonalArticles;
