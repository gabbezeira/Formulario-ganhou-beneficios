import styled, { keyframes } from 'styled-components'
import bgImage from '../assets/bg.webp'
import './globalStyles.css'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 5rem 8.125rem;

  width: 100%;
  height: 100%;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 768px){
    height: auto;
    padding: 2.75rem 1.25rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  height: auto;

  .left {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    width: 23.75rem;
    height: auto;

    .logo {
      width: 14.75rem;
      height: auto;
    }

    .title {
      width: 100%;

      .text {
        font-size: 1.875rem;
        font-weight: bold;
        color: var(--white);
      }

      .warning {
        font-size: 0.875rem;
        color: var(--primary);
      }
    }

    .description {
      font-size: 1.25rem;
      color: var(--white);
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: auto;
      height: auto;
      padding: 1.125rem 1.25rem;

      text-align: center;
      text-transform: uppercase;
      text-decoration: none;

      color: var(--white);
      font-size: 1rem;
      font-weight: 700;

      border-radius: 0.25rem;
      border: none;
      background-color: var(--primary);
    }
  }

  @media(max-width: 768px){
    flex-direction: column;
    gap: 3.25rem;

    .left {
      width: 100%;
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.75rem;

  width: 31.25rem;
  height: auto;
  padding: 2rem 1.5rem;

  background-color: var(--gray-white);
  border-radius: 0.5rem;

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.875rem;

    width: 100%;

    input {
      width: 100%;
      height: 3.125rem;
      padding: 0.625rem 1.25rem;

      background-color: var(--white);
      border: 1px solid var(--stroke-color);
      border-radius: 0.5rem;
      outline: none;

      &::placeholder {
        color: var(--stroke-color);
        font-size: 1rem;
        font-weight: 400;
      }
    }

    .inputNumber {
      width: 6.75rem !important;
    }
  }

  .one {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    .label {
      font-size: 1rem;
      color: var(--black);

      span {
        font-weight: bold;
      }
    }

    .checks {
      display: flex;
      gap: 0.625rem;
      flex-wrap: wrap;
      flex: 1;

      width: 100%;

      .checkbox {
        display: flex;
        gap: 0.375rem;
      }
    }
  }

  .two {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    .label {
      font-size: 1rem;
      color: var(--black); 
      font-weight: bold;
    }

    .checks {
      display: flex;
      gap: 0.625rem;
      flex-wrap: wrap;
      flex: 1;

      width: 100%;

      .checkbox {
        display: flex;
        gap: 0.375rem;
      }
    }
  }

  .whatsapp {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    .label {
      font-size: 1rem;
      color: var(--black); 
      font-weight: bold;
    }

    .input {
      width: 100%;
      height: 3.125rem;
      padding: 0.625rem 1.25rem;

      background-color: var(--white);
      border: 1px solid var(--stroke-color);
      border-radius: 0.5rem;

      outline: none;

      &::placeholder {
        color: var(--stroke-color);
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: auto;
    max-height: 3.125rem;
    padding: 1.125rem 1.25rem;

    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    color: var(--white);
    font-size: 1rem;
    font-weight: 700;

    border-radius: 0.25rem;
    border: none;
    background-color: var(--primary);

    transition: all .2s;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-opacity);
    }
  }

  @media(max-width: 768px){
    width: 100%;
    padding: 1.5rem 1.125rem;

    .top {

      .inputNumber {
        width: 5.25rem !important;
      }
    }
  }
`
