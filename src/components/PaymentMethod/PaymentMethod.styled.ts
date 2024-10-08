import styled from 'styled-components'

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));

  column-gap: 0.75rem;
  row-gap: 0.75rem;

  /* background: tomato; */

  & > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors['base-error']};
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`
