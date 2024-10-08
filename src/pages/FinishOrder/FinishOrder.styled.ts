import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  margin-bottom: 9.8rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
