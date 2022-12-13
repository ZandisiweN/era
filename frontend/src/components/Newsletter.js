import styled from 'styled-components'
import social from '../images/socialMedia.png'

const Container = styled.div`
  height: 60vh;
  width: 70vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.strong`
  margin-bottom: 50px;
`
// const Desc = styled.p`
//   text-align: center;
//   line-height: 1em;
//   margin-top: 35px;
// `

const InputContainer = styled.div`
width:80%;
height:60px;
margin-top: 20px;
background-color:#fff
display: flex;
justify-content: space-between;
border-bottom: 1px solid grey;
`
const Input = styled.input`
  border: none !important;
  outline: none !important;
  margin-top: 20px;
  width: 100%;
`
const Button = styled.button`
  margin-top: 20px;
  border: 1px solid black;
  background: transparent;
  padding: 10px;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <strong>
        <Title>SUBSCRIBE TO OUR NEWSLETTER - ENTER YOUR EMAIL ADDRESS*</Title>
      </strong>
      {/* <Desc>
        <i className="fa-light fa-square"></i> I have read and understood the
        information on the use of my personal data contained in the Privacy
        Policy and I consent to receive the ERA news via e-mail and other means
      </Desc> */}
      <InputContainer>
        <Input placeholder="Your email" />
      </InputContainer>
      <Button>SIGN UP</Button>
      <br />
      <br />
      <img src={social} className="d-block w-100" alt="..." />
    </Container>
  )
}

export default Newsletter
