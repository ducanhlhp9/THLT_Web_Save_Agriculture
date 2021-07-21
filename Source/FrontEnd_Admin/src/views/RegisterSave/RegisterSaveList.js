import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';

class RegisterSaveList extends Component {
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
                <i className="fa fa-align-justify"></i> Quản lý Tổ chức
              </CardHeader>
              <CardBody>
                <Row className={"mb-3"}>
                </Row>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Đơn vị giải cứu</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">email</th>
                    <th scope="col">Ngày đăng kí</th>
                    <th scope="col">Trạng thái</th>
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

export default RegisterSaveList;
