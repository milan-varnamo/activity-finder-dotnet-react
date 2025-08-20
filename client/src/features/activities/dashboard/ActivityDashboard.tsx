import { Grid2 } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetail from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';

type Props = {
	activities: Activity[];
	selectActivity: (id: string) => void;
	cancelSelectedActivity: () => void;
	selectedActivity?: Activity;
};

export default function ActivityDashboard({
	activities,
	cancelSelectedActivity,
	selectActivity,
	selectedActivity,
}: Props) {
	return (
		<Grid2 container spacing={3}>
			<Grid2 size={7}>
				<ActivityList activities={activities} selectActivity={selectActivity} />
			</Grid2>
			<Grid2 size={5}>
				{selectedActivity && (
					<ActivityDetail
						activity={selectedActivity}
						cancelSelectedActivity={cancelSelectedActivity}
					/>
				)}
				<ActivityForm />
			</Grid2>
		</Grid2>
	);
}
