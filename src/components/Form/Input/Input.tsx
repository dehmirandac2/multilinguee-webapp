import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

import { MainInput } from './styles';

interface Props {
  control: any;
  label: string;
  name: string;
  type?: string;
  error?: string;
  full?: boolean;
  InputLabelProps?: any;
}

const Input = forwardRef(({ control, label, name, error, ...rest }: Props) => (
  <Controller
    name={name}
    render={({ field, fieldState }) => (
      <MainInput
        {...field}
        error={!!fieldState?.error?.message}
        helperText={fieldState?.error?.message}
        variant="outlined"
        label={label}
        {...rest}
      />
    )}
    control={control}
  />
));

export default Input;
