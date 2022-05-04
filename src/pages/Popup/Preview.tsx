import React from 'react';
import { PreviewProps } from './types';

export const Preview: React.VFC<PreviewProps> = ({
  linkBefore,
  linkAfter,
  linkText,
  linkUrl,
  imgAlt,
  imageUrl,
}) => (
  <div className="preview">
    <div>
      <a rel="noreferrer" href={linkUrl} target="_blank">
        <img alt={imgAlt} style={{ borderWidth: 0 }} src={imageUrl} />
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
