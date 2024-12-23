/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import logoSvg from '../../assets/portfolio-case.svg'
import settingsSvg from '../../assets/settings-cog.svg'
import { useTranslation } from 'react-i18next';

type AppNavBarProps = object

interface INavLink {
    name: string,
    path: string,
}

export const AppNavBar: React.FC<AppNavBarProps> = () => {
    const navigate = useNavigate()
    const { theme } = useTheme();
    const { t } = useTranslation();

    const links: INavLink[] = [
        {
            name: t('currencies'),
            path: '/currencies',
        },
        {
            name: t('trade'),
            path: '/trade',
        },
        {
            name: t('transactions'),
            path: '/transactions'
        }
    ]

    return (
        <div
            className="h-16 flex flex-row justify-between items-center"
            style={{
                width: '100vw',
                // @ts-ignore
                backgroundColor: theme.primary
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
                <div key={item.path} onClick={() => navigate(item.path)} style={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    cursor: 'pointer',
                    color: '#FFF'
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