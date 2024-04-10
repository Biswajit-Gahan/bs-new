import styled from "styled-components";
import constants from "../../utils/constants";

export const TopNavigatorContainer = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${constants.boxShadow};
  background-color: red;
  bottom: 20px;
  right: -100px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${constants.colors.bsPinkTranparent};
  color: ${constants.colors.bsWhite};
  font-size: 30px;
  cursor: pointer;
  transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;