import styled from 'styled-components';

// 
export const DivMain = styled.div`
  margin-top: 7em;
`;

export const Card = styled.div`
  background-color: #FAFAFA;
  width: 50%;
  padding: 30px;
  margin: 5px;
  border-radius: 43px;
  &:hover,
  &:focus .card {
    border: 1px solid grey;
  }
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;



/* 
const Wrapper = styled.div`
  &:hover .my__unique__button__class-asdf123 {
    display: none;
  }
`

<Wrapper>
  <Button className="my__unique__button__class-asdf123" />
</Wrapper>
 */