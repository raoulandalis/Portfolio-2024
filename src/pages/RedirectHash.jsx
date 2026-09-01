import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RedirectHash = ({ hash }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate({ pathname: '/', hash }, { replace: true })
  }, [hash, navigate])

  return null
}

export default RedirectHash
