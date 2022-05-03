import React, { useState, useEffect } from 'react';
import './Popup.css';
import { DERIVATIVES, COMMERCIAL, SIZE } from './constants';
import { Derivatives, Commercial, Size, ILicense } from './types';

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
  const [licenseList, setLicenseList] = useState<ILicense[]>([]);
  const [label, setLabel] = useState('');
  const [abbr, setAbbr] = useState('by');

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
    setLabel(
      licenseList.reduce(
        (tempLabel, license) => tempLabel + '-' + license.label,
        ''
      )
    );
    setAbbr(
      licenseList.reduce(
        (tempAbbr, license) => tempAbbr + '-' + license.abbr,
        'by'
      )
    );
  }, [licenseList]);

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
      `https://i.creativecommons.org/l/${abbr}/4.0/${SIZE[size]}.png`
    );
  }, [abbr, size]);

  return (
    <>
      <a rel="noreferrer" href={linkUrl} target="_blank">
        <img
          alt="Creative Commons License"
          style={{ borderWidth: 0 }}
          src={imageUrl}
        />
      </a>
      <br />
      <Code label={label} linkUrl={linkUrl} imageUrl={imageUrl} />
    </>
  );
};

type CodeProps = {
  label: string;
  linkUrl: string;
  imageUrl: string;
};

const Code: React.VFC<CodeProps> = ({ label, linkUrl, imageUrl }) => {
  const code = `<a rel="license" href="${linkUrl}"><img alt="Creative Commons License" style="border-width:0" src="${imageUrl}" /></a><br />This work is licensed under a <a rel="license" href="${linkUrl}">Creative Commons ${label} 4.0 International License</a>.`;

  return <textarea>{code}</textarea>;
};
