import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function SearchInput({ onChange, value }: Props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={value}
        onChange={onChange}
        id="filled-basic"
        label="Buscar"
        variant="filled"
      />
    </Box>
  );
}
