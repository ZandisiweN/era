import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = (props) => {
  const { product } = props
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.slug}`}>
        <Card.Img src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
        <Button>ADD TO CART</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
