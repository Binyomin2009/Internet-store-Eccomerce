"use client"

import Card from '@/components/card/card'
import Filter from '@/components/filter/filter'
import React from 'react'

const Products = () => {
    return (
        <div className='flex'>
            <Filter />
            <Card />
        </div>
    )
}

export default Products