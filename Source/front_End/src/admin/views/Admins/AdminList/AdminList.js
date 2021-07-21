import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';

class AdminList extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Link to={"/users/create"}>
          <Button color="primary" className={"mb-3"}>
            <i className="fa fa-lightbulb-o">{''}</i>&nbsp;Tạo mới
          </Button>
        </Link>
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Quản lý Admin
              </CardHeader>
              <CardBody>
                <Row className={"mb-3"}>
                  <Col md="5">
                    <Input type="text"
                           placeholder="Tìm kiếm: tên người dùng..."
                           name="username:q"
                           onChange={this.onConditionChange}
                    />
                  </Col>
                </Row>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên đăng nhập</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                  </thead>
                  <tbody>

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

export default AdminList;
