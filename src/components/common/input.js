import styled from "styled-components";

export const Input = styled.input`
  height: 50px;
  border: 1px solid #f95253;
  font-size: 14px;
  font-size: 2rem;
  padding: 0 20px;
  color: black;
  border-radius: 8px;
  width: ${({ w = "100%" }) => w};
  &:focus {
    outline: none;
  }
`;
