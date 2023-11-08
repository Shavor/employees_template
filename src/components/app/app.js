import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emploers-list/emploers-list';
import EmployersAddForm from '../emploers-add-forms/emploers-add-forms';
import './app.css';

function App () {

	const data = [
		{name:'Alex S.', salary: 1500, increase: false, id: 1 },
		{name:'Jonh G.', salary: 800, increase: true, id: 2 },
		{name:'Robert F.', salary: 900, increase: false, id: 3 }
	]

	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<EmployersList data={data}/>
			<EmployersAddForm/>
		</div>

	);
}

export default App;

