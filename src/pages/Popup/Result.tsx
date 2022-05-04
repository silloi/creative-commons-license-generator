import React, { useState, useEffect, useMemo } from 'react';
import './Popup.css';
import { ATTRIBUTION, DERIVATIVES, COMMERCIAL, SIZE, t } from './constants';
import { Derivatives, Commercial, Size, ILicense } from './types';
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
  const { lc, HYPHEN } = useLocale();

  const [licenseList, setLicenseList] = useState<ILicense[]>([
    ATTRIBUTION.ATTRIBUTION,
  ]);
  const [label, setLabel] = useState<string>('');
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
    setLabel(
      licenseList.map((license) => license.label[lc]).join(HYPHEN) +
        ` 4.0 ${t.international[lc]}`
    );
    setAbbr(licenseList.map((license) => license.abbr).join('-'));
  }, [licenseList, lc, HYPHEN]);

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
      <Preview label={label} linkUrl={linkUrl} imageUrl={imageUrl} />
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
  const code = useMemo(
    () =>
      `<a rel="license" href="${linkUrl}"><img alt="Creative Commons License" style="border-width:0" src="${imageUrl}" /></a><br />This work is licensed under a <a rel="license" href="${linkUrl}">Creative Commons ${label} License</a>.`,
    [label, linkUrl, imageUrl]
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

type PreviewProps = { label: string; linkUrl: string; imageUrl: string };

const Preview: React.VFC<PreviewProps> = ({ label, linkUrl, imageUrl }) => (
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
      {`This work is licensed under a `}
      <a rel="noreferrer" href={linkUrl} target="_blank">
        {`Creative Commons ${label} License`}
      </a>
      {`.`}
    </div>
  </div>
);
