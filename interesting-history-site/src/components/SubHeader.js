import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
  return (
    <Row>
      <Col>
        <Breadcrumb className='mt-2 p-1'>
          <BreadcrumbItem>
            <Link to='/'>Home</Link>
          </BreadcrumbItem>
          {detail && (
            <BreadcrumbItem>
              <Link to='/guess'>Guess the Truth</Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
        <h2>{current}</h2>
      </Col>
    </Row>
  );
};

export default SubHeader;
