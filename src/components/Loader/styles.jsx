import styled from 'styled-components'
import '../../styles/globalStyles.css'

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    color: var(--white);
    display: inline-block;
    animation: spin 1s linear infinite;
    user-select: none;

    width: auto;
    height: 100%;
    
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
