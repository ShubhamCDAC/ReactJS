
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  height: 44px;
  font-size: 18px;
  font-weight: 500;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  border: none;
  border: 1px solid transparent;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid transparent;
  }
`;
