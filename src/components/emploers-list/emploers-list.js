import EmloyersListItem from '../emploers-list-item/emploers-list-item'

import './emploers-list.css';

const EmployersList = ({data}) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			// <EmloyersListItem name={item.name} salary={item.salary}/>
			<EmloyersListItem key={id} {...itemProps}/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployersList;