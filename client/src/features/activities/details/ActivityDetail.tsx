import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

type Props = {
	activity: Activity;
	cancelSelectedActivity: () => void;
};

export default function ActivityDetail({
	activity,
	cancelSelectedActivity,
}: Props) {
	return (
		<Card sx={{ borderRadius: 3 }}>
			<CardMedia
				component='img'
				src={`/images/categoryImages/${activity.category}.jpg`}
			/>
			<CardContent>
				<Typography variant='h5'>{activity.title}</Typography>
				<Typography variant='subtitle1' fontWeight='light'>
					{activity.date}
				</Typography>
				<Typography variant='body1'>{activity.description}</Typography>
			</CardContent>
			<CardActions>
				<Button color='primary'>Edit</Button>
				<Button onClick={cancelSelectedActivity} color='inherit'>
					Cancel
				</Button>
			</CardActions>
		</Card>
	);
}
