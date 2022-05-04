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
  const { t } = useLocale();

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
      t(dictionary.creativeCommons) +
        licenseList
          .map((license) => t(license.label))
          .join(t(dictionary.hyphen)) +
        ` 4.0 ${t(dictionary.international)}` +
        t(dictionary.license)
    );
    setAbbr(licenseList.map((license) => license.abbr).join('-'));
  }, [licenseList, t]);

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

  return (
    <>
      <Preview
        linkBefore={t(dictionary.linkBefore)}
        linkAfter={t(dictionary.linkAfter)}
        linkText={linkText}
        linkUrl={linkUrl}
        imageUrl={imageUrl}
      />
      <Code
        linkBefore={t(dictionary.linkBefore)}
        linkAfter={t(dictionary.linkAfter)}
        linkText={linkText}
        linkUrl={linkUrl}
        imageUrl={imageUrl}
      />
    </>
  );
};

type PreviewProps = {
  linkBefore: string;
  linkAfter: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
};

const Code: React.VFC<PreviewProps> = ({
  linkBefore,
  linkAfter,
  linkText,
  linkUrl,
  imageUrl,
}) => {
  const code = useMemo(
    () =>
      `<a rel="license" href="${linkUrl}"><img alt="Creative Commons License" style="border-width:0" src="${imageUrl}" /></a><br />${linkBefore}<a rel="license" href="${linkUrl}">${linkText}</a>${linkAfter}`,
    [linkBefore, linkAfter, linkText, linkUrl, imageUrl]
  );
  const copy = () => navigator.clipboard.writeText(code);

  return (
    <>
      <textarea readOnly className="codetocopy">
        {code}
      </textarea>
      <button onClick={copy}>Copy to clipboard</button>
    </>
  );
};

const Preview: React.VFC<PreviewProps> = ({
  linkBefore,
  linkAfter,
  linkText,
  linkUrl,
  imageUrl,
}) => (
  <div className="preview">
    <div>
      <a rel="noreferrer" href={linkUrl} target="_blank">
        <img
          alt="Creative Commons License"
          style={{ borderWidth: 0 }}
          src={imageUrl}
        />
      </a>
      <br />
      {linkBefore}
      <a rel="noreferrer" href={linkUrl} target="_blank">
        {linkText}
      </a>
      {linkAfter}
    </div>
  </div>
);
