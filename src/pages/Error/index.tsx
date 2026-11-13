import React from 'react'
import { useNavigate } from 'react-router'

export const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="w-fit-content mx-auto text-center">
      <img
        style={{
          width: '6rem',
          height: '6rem',
          marginTop: '4rem',
          marginBottom: '4rem'
        }}
        src={'https://www.freeiconspng.com/thumbs/error/a-red-error-exclamation-sign-meaningful-official-round-26.png'} alt="error-page"
      />
      <h4 style={{ fontStyle: 'italic' }}>An unexpected error ocurred ...</h4>
      <br />
      <br />
      <div>
        <button className="error solid" onClick={() => navigate('/')}>
                  Return to safety
        </button>
      </div>
    </div>
  )
}

export default Error
