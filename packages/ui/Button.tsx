'use client';

import * as React from 'react';
import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Boop</button>;
};
