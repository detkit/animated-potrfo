import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './services.scss';

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			starggerChildren: 0.1,
		},
	},
};

export default function Services() {
	const ref = useRef();

	const isInView = useInView(ref, { margin: '-100px' });

	return (
		<motion.div
			className='services'
			variants={variants}
			initial='initial'
			// animate='animate'
			// whileInView='animate'
			ref={ref}
			animate={'animate'}
		>
			<motion.div className='text_container' variants={variants}>
				<p>
					I focus on helping your brand grow
					<br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className='title_container' variants={variants}>
				<div className='title'>
					<img src='/people.webp' alt='' />
					<h1>
						<motion.b whileHover={{ color: '#faa307' }}>
							Unique
						</motion.b>{' '}
						Ideas
					</h1>
				</div>
				<div className='title'>
					<h1>
						<motion.b whileHover={{ color: '#faa307' }}>
							For You
						</motion.b>{' '}
						Business.
					</h1>
					<button>WHAT WE DO?</button>
				</div>
			</motion.div>
			<motion.div className='list_container'>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci quis possimus odit blanditiis, corporis,
						debitis recusandae iure earum veritatis odio corrupti
						iusto ducimus laborum error eligendi labore harum porro
						nihil!
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci quis possimus odit blanditiis, corporis,
						debitis recusandae iure earum veritatis odio corrupti
						iusto ducimus laborum error eligendi labore harum porro
						nihil!
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci quis possimus odit blanditiis, corporis,
						debitis recusandae iure earum veritatis odio corrupti
						iusto ducimus laborum error eligendi labore harum porro
						nihil!
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci quis possimus odit blanditiis, corporis,
						debitis recusandae iure earum veritatis odio corrupti
						iusto ducimus laborum error eligendi labore harum porro
						nihil!
					</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
