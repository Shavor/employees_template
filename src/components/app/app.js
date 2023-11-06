import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emploers-list/emploers-list';
import EmployersAddForm from '../emploers-add-forms/emploers-add-forms';
import './app.css';

function App () {
	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<EmployersList/>
			<EmployersAddForm/>
		</div>

	);
}

export default App;