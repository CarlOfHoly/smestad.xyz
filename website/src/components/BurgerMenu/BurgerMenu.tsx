import React from 'react'

interface Props {

}

export const BurgerMenu: React.FC<Props> = () => {
        return (<div className="menu-btn">
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div>);
}