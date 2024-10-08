import { motion } from 'framer-motion'
import useIntroduction from './Introduction.hook'
import {
  IntroContainer,
  IntroContent,
  IntroTitle,
  BenefitsBox,
} from './Introduction.styled'
import { RegularText } from '../Typography/Typography'
import introCoffe from '../../assets/introCoffee.png'
import BeneftisInfo from '../../components/BenefitsInfo/BenefitsInfo.component'
import { useTheme } from 'styled-components'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

const Introduction = () => {
  const { colors } = useTheme()

  const {
    titleRef,
    titleInView,
    subtitleRef,
    subtitleInView,
    titleVariants,
    subtitleVariants,
  } = useIntroduction()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? 'visible' : 'hidden'}
            variants={titleVariants}
            transition={{ duration: 1 }}
          >
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
          </motion.div>

          <motion.div
            ref={subtitleRef}
            initial="hidden"
            animate={subtitleInView ? 'visible' : 'hidden'}
            variants={subtitleVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </motion.div>

          <BenefitsBox>
            <BeneftisInfo
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
              text="Compra simples e segura"
            />
            <BeneftisInfo
              icon={<Package weight="fill" />}
              iconBg={colors['base-text']}
              text="Embalagem mantém o café intacto"
            />
            <BeneftisInfo
              icon={<Timer weight="fill" />}
              iconBg={colors['brand-yellow']}
              text="Entrega rápida e rastreada"
            />
            <BeneftisInfo
              icon={<Coffee weight="fill" />}
              iconBg={colors['brand-purple']}
              text="O café chega fresquinho até você"
            />
          </BenefitsBox>
        </div>
        <figure>
          <img src={introCoffe} alt="intro Coffee" />
        </figure>
      </IntroContent>
    </IntroContainer>
  )
}

export default Introduction
