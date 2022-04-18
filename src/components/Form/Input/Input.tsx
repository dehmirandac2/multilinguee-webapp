import { forwardRef } from 'react';
import { Control, Controller, FieldName, FieldValues } from 'react-hook-form';

import { MainInput } from './styles';

interface Props {
  control: any;
  label: string;
  name: string;
  type?: string;
}

const Input = forwardRef(({ control, label, name, ...rest }: Props) => {
  return (
    <Controller
      name={name}
      render={({ field }) => <MainInput {...field} variant="outlined" label={label} {...rest} />}
      control={control}
    />
  );
});

export default Input;
