import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiAmazonaws,
  SiFirebase,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAndroid />
      </Col>
    </Row>
  );
}

export default ToolStack;
