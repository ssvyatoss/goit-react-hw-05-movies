import React from 'react';
import { useHistory } from 'react-router';

export const GoBackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button onClick={goBack}>Go Back</button>
  );
};