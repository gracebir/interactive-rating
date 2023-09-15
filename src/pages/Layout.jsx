import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="max-w-md mx-auto flex-1 bg-dark-blue rounded-3xl p-8">
      {children}
    </div>
  )
}

export default Layout
