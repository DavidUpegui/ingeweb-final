import React, { ReactNode } from 'react'
import SideHeader from './SideHeader'

interface Props{
    children: ReactNode
}
const Layout = ({children}: Props) => {
  return (
    <div>
        <SideHeader/>
        {children}
    </div>
  )
}

export default Layout