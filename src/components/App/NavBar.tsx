import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoSvg from '../../assets/portfolio-case.svg'
import settingsSvg from '../../assets/settings-cog.svg'

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
            name: 'Trade',
            path: '/trade',
        },
        {
            name: 'Transactions',
            path: '/transactions'
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
                justifyContent: 'space-between',
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
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
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
            <img
                src={settingsSvg}
                width="32"
                style={{
                    marginLeft: '1rem',
                    marginRight: '2rem',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/settings')}
            />
        </div>
    );
};

export default AppNavBar;