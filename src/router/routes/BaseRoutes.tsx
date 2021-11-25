import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchView from '../../views/SearchView/SearchView'

const BaseRoutes = () => (
    <Routes>
        <Route path="/" element={<SearchView/>} />
    </Routes>
)

export default BaseRoutes;