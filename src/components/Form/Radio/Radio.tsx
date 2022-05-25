import { forwardRef, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { RadioGroup } from '@mui/material';

interface Props {
  control: any;
  name: string;
  children: ReactNode;
  defaultValue?: string;
}

const Radio = forwardRef(({ control, name, children, ...rest }: Props) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <RadioGroup {...field} {...rest} row>
          {children}
        </RadioGroup>
      )}
      control={control}
    />
  );
});

export default Radio;
