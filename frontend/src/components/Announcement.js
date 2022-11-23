import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
  background-color: #ffefe7;
  color: #000000;
  display flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 5px;
`

const Announcement = () => {
  return <Container>TAKE A 15% OFF YOUR ORDER WITH CODE: FALL2022</Container>
}

export default Announcement
