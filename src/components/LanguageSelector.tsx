import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<string>('id');

    const handleLangChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = evt.target.value;
        console.log(lang);
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <select className='dropdown' onChange={handleLangChange} value={language}>
            <option value='en'>EN</option>
            <option value='it'>IT</option>
        </select>
    );
};

export default LanguageSelector;
