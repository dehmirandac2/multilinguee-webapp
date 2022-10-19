import { forwardRef, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { InputLabel, Select as MuiSelect } from '@mui/material';

interface Props {
  control: any;
  label?: string;
  name: string;
  children: ReactNode;
  onChange: (e: any) => void;
}

const Select = forwardRef(({ control, name, label, children, onChange }: Props) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange: onChangeController, ...rest } }) => (
      <div>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          style={{ width: '100%' }}
          {...rest}
          onChange={(e) => {
            onChangeController(e.target.value);
            onChange?.(e);
          }}
        >
          {children}
        </MuiSelect>
      </div>
    )}
  />
));

export default Select;
