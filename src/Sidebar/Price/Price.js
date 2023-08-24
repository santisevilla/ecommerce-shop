import React from 'react'
import './Price.css'
import Input from '../../components/Input.js'

function Price() {
  return <>
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  </>
}

export default Price