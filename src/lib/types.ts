import { ReactNode } from 'react';

export type WindowProps = { children?: ReactNode; width: string; height: string } & WindowTitleProps;
export type WindowTitleProps = { English: string; Japanese: string };
