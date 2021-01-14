import React from 'react';
import './main-template.scss';

import Header from '../molecules/header';

const MainTemplate = (props) => {
    return (
        <div className='t-main-template'>
            <Header />
            {
                props.children
            }
        </div>
    )
}

export default MainTemplate;
