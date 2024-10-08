import styled from 'styled-components'

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 28rem;

  @media (max-width: 1024px) {
    width: 25rem;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`
