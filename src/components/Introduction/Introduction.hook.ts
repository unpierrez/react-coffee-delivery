import { useInView } from 'react-intersection-observer'

const useIntroduction = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
  })

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    threshold: 0.1,
  })

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return {
    titleRef,
    titleInView,
    subtitleRef,
    subtitleInView,
    titleVariants,
    subtitleVariants,
  }
}

export default useIntroduction
