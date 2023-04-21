import React from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from "./NavBar";
import LanguageSelector from "./LanguageSelector";
import styled from "styled-components";

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Header = () => {
    const { t } = useTranslation('common');

    return (
        <HeaderDiv className='header-padding text-area primary-color'>
            <HeaderHead>
                <h1>{t('Header.name')}</h1>
                <LanguageSelector />
            </HeaderHead>
            <NavBar />
        </HeaderDiv>
    );
};

export default Header;
