import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
  onClick: () => void;
}

export default function ButtonSearch({ onClick }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant="contained">
        Buscar
      </Button>
    </Stack>
  );
}
