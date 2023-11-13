import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import UseAlert from '../hook/use-alert';
import Fox from '../models/Fox';

export default function Contact() {
	const formRef = useRef();
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);
	const [currentAnimated, setCurrentAnimated] = useState('idle');

	const { showAlert, alert, hideAlert } = UseAlert();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setCurrentAnimated('hit');

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAIlJS_SERVICES_ID,
				import.meta.env.VITE_APP_EMAIlJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Quang',
					from_email: form.email,
					to_email: 'huyettudai@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAIlJS_PUBLIC_KEY
			)
			.then(() => {
				setIsLoading(false);
				// TODO:show success message
				showAlert({
					show: true,
					text: 'Message sen successfully!!',
					type: 'success',
				});

				// TODO: Hide an alert
				setTimeout(() => {
					hideAlert();
					setCurrentAnimated('idle');
					setForm({ name: '', email: '', message: '' });
				}, 3000);
			})
			.catch((error) => {
				setIsLoading(false);
				setCurrentAnimated('idle');
				console.log(error);
				showAlert({
					show: true,
					text: 'I din&apos;t receive your message.',
					type: 'danger',
				});
			});
	};

	const handleFocus = () => setCurrentAnimated('walk');

	const handleBlur = () => setCurrentAnimated('idle');

	return (
		<section className='relative flex flex-col lg:flex-row max-container'>
			{alert.show && <Alert {...alert} />}

			<div className='flex-1 min-w-[50%] flex flex-col'>
				<h1 className='head-text'>Get In Touch</h1>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='flex flex-col w-full gap-7 mt-14'
				>
					<label className='font-semibold text-black-500'>
						Name
						<input
							type='text'
							name='name'
							className='input'
							placeholder='John'
							required
							value={form.name}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className='font-semibold text-black-500'>
						Email
						<input
							type='email'
							name='email'
							className='input'
							placeholder='john@gmail.com'
							required
							value={form.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className='font-semibold text-black-500'>
						Your Message
						<textarea
							name='message'
							className='textarea'
							rows='4'
							placeholder='Let me know how I can messge you!'
							required
							value={form.message}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<button
						type='submit'
						className='btn'
						disabled={isLoading}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{isLoading ? 'Sending...' : 'Send Messages'}
					</button>
				</form>
			</div>

			<div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
				<Canvas
					camera={{
						position: [0, 0, 5],
						fov: 75,
						near: 0.1,
						far: 1000,
					}}
				>
					<directionalLight intensity={2.5} position={[0, 0, 1]} />
					<ambientLight intensity={0.5} />
					<Suspense fallback={<Loader />}>
						<Fox
							currentAnimation={currentAnimated}
							position={[0.5, 0.35, 0]}
							rotation={[12.6, -0.6, 0]}
							scale={[0.5, 0.5, 0.5]}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
}
