import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;
`

export const FormContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0px, 41.66%) minmax(0px, 58.33%) minmax(
      0px,
      3.75rem
    );
  column-gap: 0.7rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
