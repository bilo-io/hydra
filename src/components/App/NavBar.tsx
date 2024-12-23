import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoSvg from '../../assets/portfolio-case.svg'

type AppNavBarProps = object

interface INavLink {
    name: string,
    path: string,
}

export const AppNavBar: React.FC<AppNavBarProps> = () => {
    const navigate = useNavigate()

    const links: INavLink[] = [
        {
            name: 'Crypto',
            path: '/currencies/crypto',
        },
        {
            name: 'Fiat',
            path: '/currencies/fiat'
        },
        {
            name: 'Buy',
            path: '/trade/buy',
        },
        {
            name: 'Sell',
            path: '/trade/sell'
        }
    ]

    return (
        <div
            style={{
                width: '100vw',
                height: '4rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#80C'
            }}>
            <img
                src={logoSvg}
                width="32"
                style={{
                    marginLeft: '1rem',
                    marginRight: '2rem',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
            />
            {links.map((item: INavLink) => (
                <div onClick={() => navigate(item.path)} style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    cursor: 'pointer'
                }}>
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default AppNavBar;