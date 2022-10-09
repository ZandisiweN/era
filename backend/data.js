import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Zee',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Xiomi Mi Bedside Lamp 2',
      slug: 'xiomi-bedside-lamp',
      category: 'Lamps',
      image: '../images/airpods.jpg',
      price: 120,
      countInStock: 0,
      rating: 4.5,
      numReviews: 10,
      description:
        'Fill your room with natural light with the Xiaomi Mi Bedside Lamp 2! Convenient Wi-Fi and Bluetooth LE connectivity combined with voice control ensures comfort and ease of control of the lamp.',
    },
    {
      // _id: '2',
      name: 'Light Beige Ceramic Vase',
      slug: 'ceramic-vase',
      category: 'Vases',
      image: '../images/alexa.jpg',
      price: 209,
      countInStock: 50,
      rating: 4.0,
      numReviews: 10,
      description:
        'Round pottery vase. Diameter 20 cm, height 21 cm, hole diameter 3.5 cm.',
    },
    {
      // _id: '3',
      name: 'Marble soap dispenser',
      slug: 'marble-soap-dispenser',
      category: 'Bathroom Accessories',
      image: '../images/mouse.jpg',
      price: 89,
      countInStock: 45,
      rating: 3.0,
      numReviews: 13,
      description:
        'Marble soap dispenser. Top 100% stainless steel, Upper Material: Stone 100%. Dimensions 7x7x18.5 cm. Marble is a natural material, therefore individual pieces may differ in color and structure..',
    },
    {
      // _id: '4',
      name: 'IPHONE XS VERSION 2',
      slug: 'smeg-kettle',
      category: 'Bathroom Accessories',
      image: '../images/phone.jpg',
      price: 89,
      countInStock: 45,
      rating: 4.0,
      numReviews: 13,
      description:
        'Marble soap dispenser. Top 100% stainless steel, Upper Material: Stone 100%. Dimensions 7x7x18.5 cm. Marble is a natural material, therefore individual pieces may differ in color and structure..',
    },
  ],
}

export default data
