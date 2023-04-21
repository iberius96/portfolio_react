import React from 'react';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import Footer from './components/Footer';
import {mobileSize} from "./styles/globalStyles";

const NoMatchHead = styled.div`
  padding-bottom: 3em;
`;

const NoMatchDiv = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: white;
  margin-bottom: 50em;
`;

const NoMatchH2 = styled.h2`
  text-align: center;
  margin-top: 5em;
  margin-bottom: 1em;
`;

const NoMatchImage = styled.img`
  display: block;
  margin: 0 auto;

  @media (max-width: ${mobileSize}px) {
    width: 80%;
  }
`;

const NoMatch = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <NoMatchHead className='header-bg' />
            <NoMatchDiv className='text-area primary-color'>
                <NoMatchH2>{t('NoMatch')}</NoMatchH2>
                <NoMatchImage src='https://imgs.xkcd.com/comics/computer_problems.png'/>
            </NoMatchDiv>
            <Footer />
        </>
    );
};

export default NoMatch;