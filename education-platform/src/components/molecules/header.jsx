import React, { useState, useEffect } from 'react';
import './header.scss';

import LogoImage from '../../assets/merck-sharp-dohme-msd-.svg';

import useBrowserMode from '../../hooks/useBrowserMode';
import Button from '../atoms/button/button';
import Icon from '../atoms/icon/icon';

const Header = () => {
    let [ scrollY, setScrollY ] = useState(0);

    const { window } = useBrowserMode();

    useEffect(() => {
        window.addEventListener('scroll', () => setScrollY(window.scrollY))
    })

    return(
        <div className='m-header'>
            <header className={`m-header__upper
            ${scrollY >= 160 ? ' upper-smaller' : ''}
            `}>
                <div className={`m-header__upper-logo
                ${scrollY >= 160 ? ' logo-smaller' : ''}
                `}>
                    <img src={LogoImage} alt="QVanty's logo"/>
                </div>

                <ul className='m-header__upper-option'>
                    <li className='m-header__upper-option-opt'>
                        <a href="www.google.com">Cónocenos</a>
                        <div className='m-header__upper-option-opt__line'></div>
                    </li>

                    <li className='m-header__upper-option-opt'>
                        <a href="www.google.com">Cursos</a>
                        <div className='m-header__upper-option-opt__line'></div>
                    </li>

                    <li className='m-header__upper-option-opt'>
                        <a href="www.google.com">Cónocenos</a>
                        <div className='m-header__upper-option-opt__line'></div>
                    </li>
                </ul>

                <Button
                    type='button'
                    typeButton='button'
                    onClick={() => alert("Register/Login")}
                    text='Ingresar'
                />
            </header>

            <div className={`m-header__bottom
            ${scrollY >= 160 ? ' bottom-smaller' : ''}
            `}>
                <div className='m-header__bottom-icon'>
                    <Icon icon='facebook-square'/>
                </div>

                <div className='m-header__bottom-icon'>
                    <Icon icon='twitter'/>
                </div>

                <div className='m-header__bottom-icon'>
                    <Icon icon='instagram'/>
                </div>
            </div>
        </div>
    )
}

export default Header;
