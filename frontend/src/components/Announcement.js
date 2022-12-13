import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
  background-color: #cff4fc;
  color: #055160;
  display flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 5px;
`

const Announcement = () => {
  return (
    <Container>
      SAVE BIG FOR THE HOLIDAYS! ENJOY UP TO 65% OFF W/CODE: HOLIDAY2022
    </Container>
  )
}

export default Announcement
