import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer
      className="footer "
      style={({ border: '2px green solid' }, { backgroundColor: '#cff4fc' })}
    >
      <Container>
        <Row>
          <Col className="text-center py-3" md={4}>
            <strong>QUICK LINKS</strong>
            <Row>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>My account</li>
                <li>
                  <Link
                    to="/products"
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    Products
                  </Link>
                </li>
                <li>Wish list</li>
                <li>Terms of service</li>
              </ul>
            </Row>
          </Col>
          <Col className="text-center py-3" md={4}>
            <strong>CONTACT</strong>
            <Row>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-location-dot"></i> 6123 Kartuska
                  street,Gdansk, 80-116
                </li>
                <li>
                  <i className="fas fa-phone"></i> +123-234-4387
                </li>
                <li>
                  <i className="fas fa-envelope"></i> support@era.org
                </li>
              </ul>
            </Row>
          </Col>

          <Col className="text-center py-3" md={4}>
            <strong>ABOUT US & MORE</strong>
            <Row>
              <ul className="list-unstyled">
                <li>About US</li>
                <li>Gift Card</li>
                <li>Student discount</li>
                <li>Discount and Promo codes</li>
                <li>Become an affiliate</li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer
