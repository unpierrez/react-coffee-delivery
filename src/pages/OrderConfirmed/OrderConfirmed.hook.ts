import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { LocationType } from './OrderConfirmed.types'

const useOrderConfirmed = () => {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  return { state }
}

export default useOrderConfirmed
