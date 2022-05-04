import React, { useMemo } from 'react';
import { PreviewProps } from './types';

export const Code: React.VFC<PreviewProps> = ({
  linkBefore,
  linkAfter,
  linkText,
  linkUrl,
  imgAlt,
  imageUrl,
}) => {
  const code = useMemo(
    () =>
      `<a rel="license" href="${linkUrl}"><img alt="${imgAlt}" style="border-width:0" src="${imageUrl}" /></a><br />${linkBefore}<a rel="license" href="${linkUrl}">${linkText}</a>${linkAfter}`,
    [linkBefore, linkAfter, linkText, linkUrl, imgAlt, imageUrl]
  );
  const copy = () => navigator.clipboard.writeText(code);

  return (
    <>
      <textarea readOnly className="codetocopy" value={code} />
      <button onClick={copy}>Copy</button>
    </>
  );
};
