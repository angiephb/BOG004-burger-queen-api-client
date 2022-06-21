import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Formulario from './login.js'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

it('formulario componente', () => {
    const history = createMemoryHistory()
    render(
        <Router location={history.location} navigator={history}>
            <Formulario />
        </Router>
    )
    const inputEmail = screen.getByPlaceholderText('Ingresa tu e-mail')

    fireEvent.change(inputEmail, {target: {value: 'meseroprueba.hopper@systers.xyz'}})
   screen.getByPlaceholderText('holi')

})