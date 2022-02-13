import React from "react";
import FooterSupport from "../FooterSupport";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#EDF6FF" }}>
      <FooterSupport />
      <Box>
        <h2 style={{ color: "#fff", textAlign: "center", marginTop: "-30px" }}>
          DAO
        </h2>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>

            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">dao@gmail.com</FooterLink>
              <FooterLink href="#">+91 960321XXXX</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;