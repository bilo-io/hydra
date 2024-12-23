/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import logoSvg from '../../assets/portfolio-case.svg'
import settingsSvg from '../../assets/settings-cog.svg'
import { useTranslation } from 'react-i18next';
import Icon from '../Core/Icon';
import { useHover } from '../../hooks/useHover';

type AppNavBarProps = object

interface INavLink {
    name: string,
    path: string,
    icon?: string,
}

export const AppNavBar: React.FC<AppNavBarProps> = () => {
    const navigate = useNavigate()
    const { theme } = useTheme();
    const { t } = useTranslation();
    const { isHovered, onHoverStart, onHoverEnd } = useHover();

    const links: INavLink[] = [
        {
            name: t('trade'),
            path: '/trade',
            icon: 'ArrowsRightLeft',
        },
        {
            name: t('currencies'),
            path: '/currencies',
            icon: 'Banknotes',
        },
        {
            name: t('transactions'),
            path: '/transactions',
            icon: 'ListBullet',
        }
    ]

    return (
        <div
            className="w-16 hover:w-48 transition-all duration-200 ease-in-out flex flex-col justify-between items-center"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            style={{
                height: '100vh',
                // @ts-ignore
                backgroundColor: theme.primary
            }}>
            <img
                src={logoSvg}
                width="24"
                className="m-4 cursor-pointer"
                onClick={() => navigate('/')}
            />
            <div className="flex flex-col justify-between items-start">
            {links.map((item: INavLink) => (
                <div key={item.path} onClick={() => navigate(item.path)}
                    className='flex flex-row'
                    style={{
                    margin: '1rem',
                    cursor: 'pointer',
                    color: '#FFF'
                }}>
                    <Icon name={item.icon as string} className='size-6'/>
                    &nbsp;
                    {isHovered ? item.name : ''}
                </div>
            ))}
            </div>
            <img
                src={settingsSvg}
                width="24"
                className="m-4 cursor-pointer"
                onClick={() => navigate('/settings')}
            />
        </div>
    );
};

export default AppNavBar;