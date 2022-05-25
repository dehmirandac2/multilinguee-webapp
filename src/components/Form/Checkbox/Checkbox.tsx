import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

interface Props {
  control: any;
  name: string;
  label: string;
  value: string;
}

const Checkbox = forwardRef(({ control, name, label, ...rest }: Props) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <FormControlLabel {...field} label={label} control={<MuiCheckbox {...field} {...rest} />} />
      )}
      control={control}
    />
  );
});

export default Checkbox;
