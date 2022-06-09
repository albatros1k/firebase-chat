import styled, { css } from "styled-components";

export const flexProps = css`
  display: flex;
  align-items: ${({ align = "flex-start" }) => align};
  justify-content: ${({ justify = "space-between" }) => justify};
`;

export const block = css`
  width: ${({ w = "auto" }) => w};
  height: ${({ h = "auto" }) => h};
  padding: ${({ p = 0 }) => p};
  margin: ${({ m = 0 }) => m};
  overflow: ${({ hidden }) => (hidden ? "hidden" : "visible")};
`;

export const Button = styled.button`
  width: ${({ w = 100 }) => `${w}px`};
  height: ${({ h = 32 }) => `${h}px`};
  border-radius: 8px;
  font-size: 14px;
  background: #f95253;
  border: none;
  outline: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  box-shadow: inset 0 0px 0 #ffe5c4, inset 0 0px 0 #f95253;
  &:active {
    background-color: #f78900;
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  }
`;

export const Row = styled.section`
  ${flexProps}
  ${block}
  display: flex;
  flex-direction: ${({ fd = "row" }) => fd};
  position: ${({ pos = "static" }) => pos};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
  ${({ pointer }) =>
    pointer
      ? `* {
    cursor: pointer !important;
  }`
      : ""}
`;

export const Column = styled.section`
  ${flexProps}
  ${block}
  flex-direction: ${({ fd = "column" }) => fd};
  position: ${({ pos = "static" }) => pos};
`;

export const Content = styled.section`
  width: calc(100vw - 100px);
  margin: auto;
  padding: 35px 40px 50px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 1280px) {
    padding: 35px 30px 35px 80px;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 20px 30px;
  }
`;

export const Card = styled.div`
  width: ${({ w = "100%" }) => w};
  height: ${({ h = "auto" }) => h};
  padding: ${({ p = "20px 25px" }) => p};
  margin: ${({ m = 0 }) => m};
  background: #fff;
  box-shadow: ${({ shadow = "20px 0px 60px rgba(0, 0, 0, 0.06)" }) => shadow};
  border-radius: ${({ br = "6px" }) => br};
  position: ${({ pos = "static" }) => pos};
`;
