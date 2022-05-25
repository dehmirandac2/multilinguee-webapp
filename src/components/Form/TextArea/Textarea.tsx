import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

import { TextArea } from './styles';

interface Props {
  control: any;
  label: string;
  name: string;
  type?: string;
  error?: string;
  id?: string;
}

const Input = forwardRef(({ control, label, name, error, ...rest }: Props) => (
  <Controller
    name={name}
    render={({ field, fieldState }) => (
      <TextArea
        {...field}
        error={!!fieldState?.error?.message}
        helperText={fieldState?.error?.message}
        multiline
        label={label}
        rows={4}
        {...rest}
      />
    )}
    control={control}
  />
));

export default Input;
