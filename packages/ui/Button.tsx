'use client';

import * as React from 'react';
import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface PropsWithContent extends Props {
  content: string;
}

export const Button = ({ onClick, content }: PropsWithContent) => {
  return <button onClick={onClick}>{content}</button>;
};
