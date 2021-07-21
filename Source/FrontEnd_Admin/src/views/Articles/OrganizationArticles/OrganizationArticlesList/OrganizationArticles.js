import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from 'reactstrap';

class OrganizationArticles extends Component {
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
                <i className="fa fa-align-justify"></i> Quản lý bài viết tổ chức
              </CardHeader>
              <CardBody>
                <Row className={"mb-3"}>
                </Row>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên tổ chức</th>
                    <th scope="col">Title Seo</th>
                    <th scope="col">Content Seo</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Ngày tạo</th>
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

export default OrganizationArticles;
