import { MenuItem } from '@mui/material';
import Select from '@components/Form/Select';

interface Props {
  control: any;
  name: string;
  label?: string;
}

function HourSelect({ control, name, label }: Props) {
  const hoursList = [
    '06:00am',
    '07:00am',
    '08:00am',
    '08:00am',
    '10:00am',
    '11:00am',
    '12:00am',
    '01:00pm',
    '02:00pm',
    '03:00pm',
    '04:0pm',
    '05:00pm',
    '06:00pm',
    '07:00pm',
    '08:00pm',
    '09:00pm',
    '10:00pm',
    '11:00pm',
  ];

  return (
    <Select control={control} label={label} name={name}>
      {hoursList.map((hour) => (
        <MenuItem key={hour} value={hour}>
          {hour}
        </MenuItem>
      ))}
    </Select>
  );
}

export default HourSelect;
