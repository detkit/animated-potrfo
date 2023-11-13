const Alert = ({ type, text }) => {
	return (
		<div className='absolute left-0 right-0 flex items-center justify-center top-10'>
			<div
				className={`${
					type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
				} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
				role='alert'
			>
				<p
					className={`${
						type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
					} flex rounded-full uppercase px-2 py-1 font-medium mr-3`}
				>
					{type === 'danger' ? 'Failed' : 'Success'}
				</p>
				<p className='mr-2 text-left'>{text}</p>
			</div>
		</div>
	);
};

export default Alert;
