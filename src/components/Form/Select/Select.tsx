import { forwardRef, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { Select as MuiSelect } from '@mui/material';

interface Props {
  control: any;
  label: string;
  name: string;
  children: ReactNode;
}

const Select = forwardRef(({ control, name, children }: Props) => (
  <Controller name={name} control={control} render={({ field }) => <MuiSelect {...field}>{children}</MuiSelect>} />
));

export default Select;
