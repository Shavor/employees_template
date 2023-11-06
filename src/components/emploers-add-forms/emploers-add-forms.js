import './emploers-add-form.css'

const EmployersAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Добавьте нового сотрудника</h3>
			<form className="add-form d-flex">
				<input 
					type="text" 
					placholder='Как его зовут' 
					className="form-control new-post-laber"/>
				<input 
					type="number" 
					placholder='З/П в $' 
					className="form-control new-post-laber"/>
				
				<button className="btn btn-outline-light"
						type='submit'>
						Добавить нового сотрудника
				</button>
			</form>
		</div>
	)
};

export default EmployersAddForm;