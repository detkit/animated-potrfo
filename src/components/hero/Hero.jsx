import { motion } from 'framer-motion';
import './hero.scss';

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollBtn: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-220%',
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 20,
		},
	},
};

export default function Hero() {
	return (
		<div className='hero'>
			<div className='wrapper'>
				<motion.div
					className='left'
					variants={textVariants}
					initial='initial'
					animate='animate'
				>
					<motion.h2 variants={textVariants}>haver tyler</motion.h2>
					<motion.h1 variants={textVariants}>
						Web developer and UI/UX designer
					</motion.h1>
					<motion.div variants={textVariants} className='button'>
						<motion.button variants={textVariants}>
							See the Laster Works
						</motion.button>
						<motion.button variants={textVariants}>
							Contact Me
						</motion.button>
					</motion.div>
					<motion.img
						src='/scroll.png'
						alt='scrollbar'
						variants={textVariants}
						animate='scrollBtn'
					/>
				</motion.div>
			</div>
			<motion.div
				className='sliding_container'
				variants={sliderVariants}
				initial='initial'
				animate='animate'
			>
				Write Content Creator Influencer
			</motion.div>
			<div className='img_container'>
				<img src='/hero.png' alt='' />
			</div>
		</div>
	);
}
