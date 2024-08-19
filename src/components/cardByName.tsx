import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface PokeProps {
  name: string;
  imageUrl: string;
}

export default function CardByName({ name, imageUrl }: PokeProps) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image={imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
