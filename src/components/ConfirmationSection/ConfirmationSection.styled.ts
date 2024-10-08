import styled from 'styled-components'

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const NoCoffeeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > svg {
    margin-bottom: 0.5rem;
  }
`
