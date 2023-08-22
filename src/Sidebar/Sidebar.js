import React from 'react'
import Category from './Category/Category.js'
import Price from './Price/Price.js'
import Color from './Colors/Colors.js'
import './Sidebar.css'

function Sidebar() {
    return <>
        <section className='sidebar'>
            <div className='logo-container'>
                <h1>🛒</h1>
            </div>
            <Category />
            <Price />
            <Color />
        </section>
    </>
}

export default Sidebar