import React from 'react';
import './Popup.css';
import { DERIVATIVES, COMMERCIAL, SIZE } from './constants';
import { Derivatives, Commercial, Size } from './types';
import { useLocale } from '../../hooks/locale';

type FormProps = {
  derivatives: Derivatives;
  commercial: Commercial;
  size: Size;
  setDerivatives: (value: Derivatives) => void;
  setCommercial: (value: Commercial) => void;
  setSize: (value: Size) => void;
};

export const Form: React.VFC<FormProps> = ({
  derivatives,
  commercial,
  size,
  setDerivatives,
  setCommercial,
  setSize,
}) => (
  <div className="form">
    <Select
      options={DERIVATIVES}
      value={derivatives}
      setValue={setDerivatives}
    />

    <Select options={COMMERCIAL} value={commercial} setValue={setCommercial} />

    <Select options={SIZE} value={size} setValue={setSize} />
  </div>
);

export const Select: React.VFC<{
  options: typeof DERIVATIVES | typeof COMMERCIAL | typeof SIZE;
  value: Derivatives | Commercial | Size;
  setValue: (value: any) => void;
}> = ({ options, value, setValue }) => {
  const { t } = useLocale();

  return (
    <div className="select">
      {Object.entries(options).map(([optionKey, optionValue]) => (
        <span className="option">
          <input
            type="radio"
            name={optionKey}
            id={optionKey}
            value={optionKey}
            checked={optionKey === value}
            onChange={(e) => setValue(e.target.value as keyof typeof options)}
          />
          <label htmlFor={optionKey}>{t(optionValue.label)}</label>
        </span>
      ))}
    </div>
  );
};
