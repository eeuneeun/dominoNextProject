import * as React from 'react';

export interface IDefaultBtnProps {
    text : string;
    new (msg : string) : void;
}

export default function DefaultBtn (props: IDefaultBtnProps) {
  return (
    <button
    >{props.text}</button>
  );
}
