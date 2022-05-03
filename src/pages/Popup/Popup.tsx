import React, { useState } from 'react';
import './Popup.css';
import { Derivatives, Commercial, Size } from './types';
import { Form } from './Form';
import { Result } from './Result';

const Popup: React.VFC = () => {
  const [derivatives, setDerivatives] = useState<Derivatives>('DERIVATIVES');
  const [commercial, setCommercial] = useState<Commercial>('COMMERCIAL');
  const [size, setSize] = useState<Size>('BIG');

  return (
    <div className="App">
      <header className="App-header">
        <Form
          derivatives={derivatives}
          commercial={commercial}
          size={size}
          setDerivatives={setDerivatives}
          setCommercial={setCommercial}
          setSize={setSize}
        />
        <Result derivatives={derivatives} commercial={commercial} size={size} />
      </header>
    </div>
  );
};

export default Popup;
