import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/mylist">マイリスト</Link></li>
      </ul>
  )
}

export default Header
