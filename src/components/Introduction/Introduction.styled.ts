import styled from 'styled-components'
import { rgba } from 'polished'
import introBackground from '../../assets/introBackground.png'
import { TitleText } from '../Typography/Typography'

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background: ${(props) => ` url(${introBackground}) no-repeat center,
    linear-gradient(
      8deg,
      ${props.theme.colors['base-white']} 100%,
      ${rgba(props.theme.colors['base-background'], 0.5)} 100%,
      ${props.theme.colors['base-white']} 100%
    )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: auto;
  }
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  & > div {
    flex: 1;
  }

  figure {
    max-width: 30rem;

    img {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsBox = styled.div`
  column-gap: 2.5rem;
  margin-top: 4.125rem;
  display: grid;
  row-gap: 1.25rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 481px) {
    grid-template-columns: 1fr;
  }
`
