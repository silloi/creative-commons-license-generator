import React from 'react';
import './Popup.css';
import { DERIVATIVES, COMMERCIAL, SIZE } from './constants';
import { Derivatives, Commercial, Size } from './types';

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
  <div>
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
}> = ({ options, value, setValue }) => (
  <div style={{ marginBottom: 10 }}>
    {Object.keys(options).map((option) => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label htmlFor={option}>{option}</label>
        <input
          type="radio"
          name={option}
          id={option}
          value={option}
          checked={option === value}
          onChange={(e) => setValue(e.target.value as keyof typeof options)}
        />
      </div>
    ))}
  </div>
);
