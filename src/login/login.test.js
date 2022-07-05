import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Formulario from './login.js'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


test('formulario componente', async () => {
    const history = createMemoryHistory()
    /* const { debug} = */render(
        <Router location={history.location} navigator={history}>
            <Formulario />
        </Router>
    )
    const inputEmail = screen.getByTestId('login-input-email')
    const inputPassword = screen.getByTestId('login-input-pass')
    const btnLogin = screen.getByText('Ingresar')
    fireEvent.change(inputEmail, {target: {value: ''}})
    fireEvent.change(inputPassword, {target: {value: '123456'}})
    fireEvent.click(btnLogin)
    let errmsj;
    await waitFor(() => errmsj = screen.getByTestId('login-errormsj'))
    // debug()
    // console.log(errmsj.textContent)
    expect(errmsj.textContent).toBe('Este campo no puede estar vacio')
    // screen.getByTestId('ddd')
})

