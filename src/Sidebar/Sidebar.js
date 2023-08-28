import React from 'react'
import Category from './Category/Category.js'
import Price from './Price/Price.js'
import Color from './Colors/Colors.js'
import './Sidebar.css'

function Sidebar({ handleChange }) {
    return <>
        <section className='sidebar'>
            <div className='logo-container'>
                <h1>🛒</h1>
            </div>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Color handleChange={handleChange} />
        </section>
    </>
}

export default Sidebar