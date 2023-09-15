import React from 'react'

const RateButton = ({text, isActive=false, setter}) => {
  return (
    <button onClick={() => setter(text)} className={`text-grey duration-200 hover:bg-orange hover:text-white ${isActive ? "bg-medium-grey": "bg-round"} lg:w-16 lg:h-16 h-10 w-10 rounded-full`}>
      {text}
    </button>
  )
}

export default RateButton
