import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';
import axios from "axios";
import dayjs from "dayjs";
import {pare_url_file} from "../../helpers";

class List extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      comments: [],
      user:[],
      species:[]
    }
  }

  loadCommentList = () => {
    fetch('http://127.0.0.1:8000/api/comment', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        comments: json,
      })
    });
  };

  componentDidMount() {
    this.loadCommentList();
    axios.get('/api/user').then(res=>{
      this.setState({
        user:res.data,
        isLoaded: true
      })
    })
    axios.get('/api/species').then(res=>{
      this.setState({
        species:res.data,
        isLoaded: true
      })
    })
  }
showse=(id)=>{
    let data1=this.state.species.find(value=>value.id ===id)
    return(
      <td>{data1.name}</td>
    )
}
showuser=(id)=>{
    let data1=this.state.user.find(value=>value.id ===id)
    return(
      <td>{data1.name}</td>
    )
  }

  deleteComment = (event, comment) => {
    if (!window.confirm("Xác nhận xóa danh mục\n [" + comment.name + "]")) {
      return;
    }
    fetch('/api/comment/' + comment.id, {
        method: 'delete'
      },
    ).then(this.loadCommentList()
    )
  };
  changeColor = (status) => {
    if (status === 1) {
      return ("ghost-primary");
    } else if (status === 0) {
      return ("ghost-danger");
    }
  };
  changeStatus = (event, comment) => {
    var url = '/api/comment/changeStatus/' + comment.id;
    axios.post(url
    ).then(this.loadCommentList()
    );
  };

  render() {
    let {comments, isLoaded} = this.state;
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
                  <i className="fa fa-align-justify"> </i> Quản lý Danh mục
                </CardHeader>
                <CardBody>
                  <Row className={"mb-3"}>
                    {/*<Col md="5">*/}
                    {/*  <Input type="text"*/}
                    {/*         placeholder="Tìm kiếm: tên người dùng..."*/}
                    {/*         name="username:q"*/}
                    {/*         onChange={this.onConditionChange}*/}
                    {/*  />*/}
                    {/*</Col>*/}
                  </Row>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Người bình luận</th>
                      <th scope="col">Bài viết</th>
                      <th scope="col">Nội dung</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {comments.map((comment, index) => {
                      return <tr key={index}>
                        <td>{comment.id}</td>
                        {this.showuser(comment.user_id)}
                        {this.showse(comment.species_id)}
                        <td>{comment.content}</td>
                        <td>
                          <span onClick={event => this.changeStatus(event, comment)}><Button size="sm"
                                                                                              color={this.changeColor(comment.status)}> {comment.status === 1 ? "public" : "private"}</Button></span>
                        </td>
                        <td>{comment.created_at =now.format("YYYY-MM-DD")}</td>
                        <td>
                          <span onClick={event => this.deleteComment(event, comment)}
                                id={comment.id}><Button size="sm" color="ghost-danger"><i className="fa fa-times"/> xóa</Button></span>
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

export default List;
