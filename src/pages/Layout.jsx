import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="max-w-md mx-auto border flex-1 bg-dark-blue">
      {children}
    </div>
  )
}

export default Layout
