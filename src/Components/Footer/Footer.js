import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2025</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Sandesh Sahane</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SandeshSS23"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sandesh-sahane-7955b5249"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:sandeshssahane23@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://leetcode.com/u/SandeshSS23/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.geeksforgeeks.org/user/sandeshssahane23/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
