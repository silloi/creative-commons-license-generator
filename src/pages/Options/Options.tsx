import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <>
      <div className="OptionsContainer">{title} Page</div>
      <a
        title="Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com, CC BY 4.0 &lt;https://creativecommons.org/licenses/by/4.0&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_creative-commons.svg"
      >
        <img
          width="32"
          alt="Font Awesome 5 brands creative-commons"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Font_Awesome_5_brands_creative-commons.svg/32px-Font_Awesome_5_brands_creative-commons.svg.png"
        />
      </a>
      <p>
        <a href="https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_creative-commons.svg">
          Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com
        </a>
        , <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>,
        via Wikimedia Commons
      </p>
    </>
  );
};

export default Options;
