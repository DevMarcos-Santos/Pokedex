import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Graphic from './graphic';

interface PokeProps {
  name: string;
  imageUrl: string;
  base_experience: number;
}

export default function CardByName({
  name,
  imageUrl,
  base_experience,
}: PokeProps) {
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
              <>
                <Graphic base_experience={base_experience} />
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <p>{name}</p>
                </div>
              </>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
