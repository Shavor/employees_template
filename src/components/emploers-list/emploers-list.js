import EmloyersListItem from '../emploers-list-item/emploers-list-item'

import './emploers-list.css';

const EmployersList = () => {
	return (
		<ul className="app-list list-group">
			<EmloyersListItem/>
			<EmloyersListItem/>
			<EmloyersListItem/>
		</ul>
	)
}

export default EmployersList;