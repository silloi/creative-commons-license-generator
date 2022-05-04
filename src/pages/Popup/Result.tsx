import React, { useState, useEffect, useMemo } from 'react';
import './Popup.css';
import {
  ATTRIBUTION,
  DERIVATIVES,
  COMMERCIAL,
  SIZE,
  dictionary,
} from './constants';
import type { Derivatives, Commercial, Size, License } from './types';
import { useLocale } from '../../hooks/locale';
import { Preview } from './Preview';
import { Code } from './Code';

type ResultProps = {
  derivatives: Derivatives;
  commercial: Commercial;
  size: Size;
};

export const Result: React.VFC<ResultProps> = ({
  derivatives,
  commercial,
  size,
}) => {
  const { lc, t } = useLocale();

  const [licenseList, setLicenseList] = useState<License[]>([
    ATTRIBUTION.ATTRIBUTION,
  ]);
  const [linkText, setLinkText] = useState<string>('');
  const [abbr, setAbbr] = useState<string>('');

  useEffect(() => {
    setLicenseList((licenseList) => {
      const filtered = licenseList.filter(
        (license) => license !== COMMERCIAL.NON_COMMERCIAL
      );
      if (commercial === 'NON_COMMERCIAL') {
        return [...filtered, COMMERCIAL.NON_COMMERCIAL];
      } else {
        return filtered;
      }
    });

    setLicenseList((licenseList) => {
      const filtered = licenseList.filter(
        (license) =>
          license !== DERIVATIVES.NO_DERIVATIVES &&
          license !== DERIVATIVES.SHARE_ALIKE
      );
      if (derivatives === 'NO_DERIVATIVES') {
        return [...filtered, DERIVATIVES.NO_DERIVATIVES];
      } else if (derivatives === 'SHARE_ALIKE') {
        return [...filtered, DERIVATIVES.SHARE_ALIKE];
      } else {
        return filtered;
      }
    });
  }, [commercial, derivatives]);

  useEffect(() => {
    setLinkText(
      (lc === 'fr' ? `${t(dictionary.license)} ` : '') +
        t(dictionary.creativeCommons) +
        t(dictionary.space) +
        licenseList
          .map((license) => t(license.label))
          .join(t(dictionary.hyphen)) +
        ` 4.0 ${t(dictionary.international)}` +
        (lc !== 'fr' ? t(dictionary.space) + t(dictionary.license) : '')
    );
    setAbbr(licenseList.map((license) => license.abbr).join('-'));
  }, [licenseList, lc, t]);

  const [linkUrl, setLinkUrl] = useState(
    'http://creativecommons.org/licenses/by/4.0/'
  );
  const [imageUrl, setImageUrl] = useState(
    'https://i.creativecommons.org/l/by/4.0/88x31.png'
  );

  useEffect(() => {
    setLinkUrl(`http://creativecommons.org/licenses/${abbr}/4.0/`);
  }, [abbr]);

  useEffect(() => {
    setImageUrl(
      `https://i.creativecommons.org/l/${abbr}/4.0/${SIZE[size].abbr}.png`
    );
  }, [abbr, size]);

  const linkBefore = useMemo(() => t(dictionary.linkBefore), [t]);
  const linkAfter = useMemo(() => t(dictionary.linkAfter), [t]);
  const imgAlt = useMemo(() => t(dictionary.creativeCommonsLicense), [t]);

  return (
    <>
      <Preview
        linkBefore={linkBefore}
        linkAfter={linkAfter}
        linkText={linkText}
        linkUrl={linkUrl}
        imgAlt={imgAlt}
        imageUrl={imageUrl}
      />
      <Code
        linkBefore={linkBefore}
        linkAfter={linkAfter}
        linkText={linkText}
        linkUrl={linkUrl}
        imgAlt={imgAlt}
        imageUrl={imageUrl}
      />
    </>
  );
};
