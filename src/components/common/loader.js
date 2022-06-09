import styled, { css, keyframes } from "styled-components";

const ripple = keyframes`
	0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const animation = css`
  animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
  > div {
    ${animation}
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

export const Loader = () => (
  <Spinner>
    {[1, 2].map((key) => (
      <div {...{ key }} />
    ))}
  </Spinner>
);
