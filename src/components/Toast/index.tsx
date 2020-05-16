import React, { useState, useImperativeHandle, forwardRef } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 50%;
  z-index: 1000;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  &.drop-enter {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  &.drop-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
  }
  &.drop-exit-active {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    transition: all 0.3s;
  }
  .text {
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background: #000;
    border-radius: .12rem;
    padding: 0 .2rem;
  }
`;

const Toast = forwardRef((props: any, ref) => {
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState<any>('');
  const { text } = props;

  useImperativeHandle(ref, () => ({
    show() {
      if (timer) clearTimeout(timer);
      setShow(true);
      setTimer(
        setTimeout(() => {
          setShow(false);
        }, 3000)
      );
    },
  }));
  return (
    <CSSTransition in={show} timeout={300} classNames='drop' unmountOnExit>
      <ToastWrapper>
        <div className='text'>{text}</div>
      </ToastWrapper>
    </CSSTransition>
  );
});

export default React.memo(Toast);
