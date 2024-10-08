import styled from 'styled-components'

export const CoffeCatalogContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 16rem);
  column-gap: 2rem;
  row-gap: 2.5rem;
  place-content: center;
  margin-top: 3.5rem;
`

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`

export const Tag = styled.span<{ isSelected?: boolean }>`
  background: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors['brand-yellow-dark']
      : theme.colors['brand-yellow-light']};
  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors['brand-yellow-light']
      : theme.colors['brand-yellow-dark']};
  font-size: ${({ theme }) => theme.textSizes['components-tag']};
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme, isSelected }) =>
      isSelected
        ? theme.colors['brand-yellow-light']
        : theme.colors['brand-yellow-dark']};
    color: ${({ theme, isSelected }) =>
      isSelected
        ? theme.colors['brand-yellow-dark']
        : theme.colors['brand-yellow-light']};
  }

  &:active {
    transform: scale(0.95);
  }
`
