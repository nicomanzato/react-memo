import React from 'react';
import { data } from '../../image';

export const Image = ({}) => {
  return <img src={`data:image/jpeg;base64,${data}`} />;
};
