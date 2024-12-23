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
            className="h-16 flex flex-row justify-between items-center"
            style={{
                width: '100vw',
                backgroundColor: '#80C'
            }}>
            <img
                src={logoSvg}
                width="24"
                className="mx-4 cursor-pointer"
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
                width="24"
                className="mx-4 cursor-pointer"
                onClick={() => navigate('/settings')}
            />
        </div>
    );
};

export default AppNavBar;