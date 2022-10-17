import { MenuItem } from '@mui/material';
import Select from '@components/Form/Select';
import { useEffect, useState } from 'react';

interface Props {
  control: any;
  name: string;
  label?: string;
  unavailableHours?: string[];
}

function HourSelect({ control, name, label, unavailableHours }: Props) {
  const defaultHoursList = [
    '06:00am',
    '07:00am',
    '08:00am',
    '09:00am',
    '10:00am',
    '11:00am',
    '12:00am',
    '01:00pm',
    '02:00pm',
    '03:00pm',
    '04:00pm',
    '05:00pm',
    '06:00pm',
    '07:00pm',
    '08:00pm',
    '09:00pm',
    '10:00pm',
    '11:00pm',
  ];

  const checkIsDisabled = (hour: string) => {
    const hourNotAvailable = unavailableHours && unavailableHours.indexOf(hour) !== -1;

    return hourNotAvailable;
  };

  return (
    <Select control={control} label={label} name={name}>
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
