import { Container, Row, Col, Pagination } from "react-bootstrap";
import Tweet from "../Tweet/Tweet";
import RightSideBar from "../RightSidebar/RightSideBar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

function Home() {
  return (
    <React.Fragment>
      <Container>
    <Row>
      <Col xs={6} className="mt-2">
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
      </Col>
    </Row>
    </Container>
    </React.Fragment>
  );
}

export default Home;
