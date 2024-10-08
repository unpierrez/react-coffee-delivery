import { BenefitsInfoContainer, IconContainer } from './BenefitsInfo.styled'
import { InfoWithIconProps } from './BenefitsInfo.types'

const BeneftisInfo = ({ text, icon, iconBg }: InfoWithIconProps) => {
  return (
    <BenefitsInfoContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </BenefitsInfoContainer>
  )
}

export default BeneftisInfo
