import { useEffect, useState } from 'react';

function App() {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		fetch('https://localhost:5001/api/activities')
			.then((res) => res.json())
			.then((data) => setActivities(data))
			.then((data) => console.log(data));
	}, []);

	return (
		<>
			<h3>ActivityFinder</h3>;
			<ul>
				{activities.map((activity) => (
					<li key={activity.id}>{activity.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;
