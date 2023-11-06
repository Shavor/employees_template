import './app-filter.css'

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button
				className="btn btn-light"
				type='butten'>
					Все сотрудники
			</button>
			<button
				className="btn btn-outline-light"
				type='butten'>
					На повышение
			</button>
			<button
				className="btn btn-outline-light"
				type='butten'>
					з/п больше 1000$
			</button>
		</div>
	)
}

export default AppFilter;