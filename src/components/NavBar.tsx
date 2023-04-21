import React from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <h2>{t('Header.Navbar.home')}</h2>
        </>
    );
};

export default NavBar;
