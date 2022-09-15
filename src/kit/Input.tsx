import React from "react";
import {InputStyled} from "./InputStyled";

export interface PropsFormInput {
  value: string | number;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}

export const Input: React.FC<PropsFormInput> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <InputStyled
        placeholder={props.placeholder ? props.placeholder : "Enter value"}
        value={props.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.onChange(event.target.value)
        }
      />
    </div>
  );
};
