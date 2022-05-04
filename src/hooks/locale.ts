import { useState, useEffect } from 'react';
import { LC } from '../pages/Popup/constants';

export type Lc = typeof LC[number];

export const useLocale = () => {
  const [lc, setLc] = useState<Lc>('en');

  useEffect(() => {
    // setLc('id'); // Bahasa Indonesia
    // setLc('ms'); // Bahasa Malaysia
    // setLc('es'); // España
    // setLc('es_ES'); // Castellano (España)
    // setLc('ca'); // Català
    // setLc('da'); // Dansk
    // setLc('de'); // Deutsch
    // setLc('en'); // English
    // setLc('es'); // Español
    // setLc('eo'); // Esperanto
    // setLc('eu'); // Euskara
    // setLc('fr'); // français
    // setLc('gl'); // Galego
    // setLc('hu'); // hrvatski
    // setLc('it'); // Italiano
    // setLc('lv'); // Latviski
    // setLc('lt'); // Lietuvių
    // setLc('hu'); // Magyar
    // setLc('nl'); // Nederlands
    // setLc('no'); // norsk
    // setLc('pl'); // polski
    // setLc('pt'); // Português
    // setLc('pt_BR'); // Português (BR)
    // setLc('ro'); // română
    // setLc('sl'); // Slovenščina
    // setLc('sr'); // srpski
    // setLc('sr_LATIN'); // srpski (latinica)
    // setLc('fi'); // suomeksi
    // setLc('sv'); // svenska
    // setLc('tr'); // Türkçe
    // setLc('is'); // Íslenska
    // setLc('cs'); // čeština
    // setLc('el'); // Ελληνικά
    // setLc('be'); // Беларуская
    // setLc('ru'); // русский
    // setLc('uk'); // українська
    // setLc('ar'); // العربية
    // setLc('fa'); // پارسی
    // setLc('bn'); // বাংলা
    // setLc('zh'); // 中文
    // setLc('ja'); // 日本語
    // setLc('zh_TW'); // 華語 (台灣)
    // setLc('ko'); // 한국어

    const lcFound = LC.find(
      (lcDefined) => lcDefined === chrome.i18n.getUILanguage()
    );
    if (lcFound) {
      setLc(lcFound);
    }
  }, []);

  const t = (dictionary: { [key: string]: string }) => {
    return dictionary[lc] ?? dictionary['en'] ?? '';
  };

  return { lc, t };
};
