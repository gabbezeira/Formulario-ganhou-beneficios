import styled from 'styled-components'
import '../../styles/globalStyles.css'

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.60);
  display: flex;
  justify-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;

  &.show {
    opacity: 1;
    pointer-events: all;
  }

  .modalContent {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--white);
    padding: 2rem 2rem;
    border-radius: 0.5rem;
    width: auto;
    height: auto;
    transform: scale(0.95);
    opacity: 0;
    transition: all 0.15s;

    &.show {
      transform: scale(1);
      opacity: 1;
    }

    .closeButton {
      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;
      border: none;
      border-radius: 0.25rem;

      width: auto;
      height: auto;
      padding: 1rem 1.25rem;

      background-color: var(--primary);
      color: var(--white);
      font-size: 1rem;

      cursor: pointer;
      transition: all .2s;

      &:hover {
        background-color: var(--primary-opacity)
      }
    }

    .text {
      font-size: 1rem;
      color: var(--black);
      font-weight: bold;
    }

    .image {
      width: 130px;
      height: auto;
    }
  }

  @media(max-width: 768px){
   .modalContent {
      width: 20.625rem;
   }
  }
`
