import { forwardRef, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { InputLabel, Select as MuiSelect } from '@mui/material';

interface Props {
  control: any;
  label?: string;
  name: string;
  children: ReactNode;
}

const Select = forwardRef(({ control, name, label, children }: Props) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <div>
        <InputLabel>{label}</InputLabel>

        <MuiSelect style={{ width: '100%' }} {...field}>
          {children}
        </MuiSelect>
      </div>
    )}
  />
));

export default Select;
