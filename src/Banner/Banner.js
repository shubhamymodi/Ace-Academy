import styled from "styled-components";

export const Banner = styled.div`
  height: 300px;
  background-image: url(img/wall.png);
  background-position: center;
  background-size: auto;
  filter: contrast(90%);
  &:hover{
    filter: contrast(100%); 
  }
`;
