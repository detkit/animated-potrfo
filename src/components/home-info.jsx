import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const HomeInfo = ({ currentStage }) => {
	if (currentStage === 1)
		return (
			<h1 className='px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue'>
				Hi, I am <span className='font-semibold'>Quang</span> 👋
				<br />A Software Engineer from Vietnam
			</h1>
		);
	if (currentStage === 2) {
		return (
			<div className='info-box'>
				<p className='font-medium text-center sm:text-xl'>
					Worked with many companies <br /> and picked up many skills
					along the way
				</p>

				<Link to='/about' className='neo-brutalism-white neo-btn'>
					Read more!
					<img
						src={arrow}
						alt='arrow'
						className='object-contain w-4 h-4'
					/>
				</Link>
			</div>
		);
	}

	if (currentStage === 3) {
		return (
			<div className='info-box'>
				<p className='font-medium text-center sm:text-xl'>
					Led multiple projects to success over the years. <br />{' '}
					Curious about the impact?
				</p>

				<Link to='/projects' className='neo-brutalism-white neo-btn'>
					Visit my portfolio
					<img
						src={arrow}
						alt='arrow'
						className='object-contain w-4 h-4'
					/>
				</Link>
			</div>
		);
	}

	if (currentStage === 4) {
		return (
			<div className='info-box'>
				<p className='font-medium text-center sm:text-xl'>
					Need a project done or looking for a dev? <br /> I'm just a
					few keystrokes away
				</p>

				<Link to='/contact' className='neo-brutalism-white neo-btn'>
					Let's talk
					<img
						src={arrow}
						alt='arrow'
						className='object-contain w-4 h-4'
					/>
				</Link>
			</div>
		);
	}

	return renderContent[currentStage] || null;
};

export default HomeInfo;
