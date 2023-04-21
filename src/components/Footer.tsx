import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import styled from 'styled-components';

import { mobileSize } from '../styles/globalStyles';

const FooterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
  padding-top: 2em;
  padding-left: 15%;
  margin-top: 15em;

  @media (max-width: ${mobileSize}px) {
    padding-left: 10%;
    border-top-right-radius: 25px;
  }
`;

const Footer = () => {
    const { t } = useTranslation('common');

    return(
        <FooterDiv className='text-area negative-color'>
            <h4>{t('Footer.area_name')}</h4>
            <Trans>{t('Footer.phone_nr')}</Trans><br/>
            <Trans>{t('Footer.address')}</Trans>
        </FooterDiv>
    );
}

export default Footer;