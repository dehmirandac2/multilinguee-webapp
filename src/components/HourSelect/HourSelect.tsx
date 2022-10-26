import { MenuItem } from '@mui/material';
import Select from '@components/Form/Select';
import { useEffect, useState } from 'react';

interface Props {
  control: any;
  name: string;
  label?: string;
  unavailableHours?: string[];
  onChange?: (e: any) => void;
}

export const defaultHoursList = [
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

function HourSelect({ control, name, label, unavailableHours, onChange }: Props) {
  const checkIsDisabled = (hour: string) => {
    const hourNotAvailable = unavailableHours && unavailableHours.indexOf(hour) !== -1;

    return hourNotAvailable;
  };

  return (
    <Select control={control} label={label} name={name} onChange={(el) => onChange?.(el)}>
      <MenuItem disabled value="selecione">
        Selecione
      </MenuItem>
      {defaultHoursList.map((hour) => {
        return (
          <MenuItem disabled={checkIsDisabled(hour)} key={hour} value={hour}>
            {hour}
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default HourSelect;
