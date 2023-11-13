import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { experiences, skills } from '../constants';

import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

export default function About() {
	return (
		<section className='max-container'>
			<h1 className='head-text'>
				Hello, I&apos;m{' '}
				<span className='blue-gradient_text drop-shadow'>Quang</span>
			</h1>

			<div className='flex flex-col gap-3 mt-5 text-slate-500'>
				<p>
					Software Engineer based in Vietnam, specializing in
					technial. full-stack web development hard core learning and
					building applications projects.
				</p>
			</div>

			<div className='flex flex-col py-10'>
				<h3 className='subhead-text'>My Skills</h3>
				<div className='flex flex-wrap gap-12 mt-16'>
					{skills.map((skill) => (
						<div
							className='w-20 h-20 block-container'
							key={skill.name}
						>
							<div className='btn-back rounded-xl' />
							<div className='flex items-center justify-center btn-front rounded-xl'>
								<img
									src={skill.imageUrl}
									alt={skill.name}
									className='object-contain w-1/2 h-1/2'
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='py-16'>
				<h3 className='subhead-text'>Work Experience.</h3>
				<div className='flex flex-col gap-3 mt-5 text-slate-400'>
					<p>
						I've worked with all sorts of companies, leveling up my
						skills and teaming up with smart people. Here's the
						rundown:
					</p>
				</div>

				<div className='flex mt-12'>
					<VerticalTimeline>
						{experiences.map((experience, index) => (
							<VerticalTimelineElement
								key={experience.company_name}
								date={experience.date}
								iconStyle={{ background: experience.iconBg }}
								icon={
									<div className='flex items-center justify-center w-full h-full'>
										<img
											src={experience.icon}
											alt={experience.company_name}
											className='w-[60%] h-[60%] object-contain'
										/>
									</div>
								}
								contentStyle={{
									borderBottom: '8px',
									borderStyle: 'solid',
									borderBottomColor: experience.iconBg,
									boxShadow: 'none',
								}}
							>
								<div>
									<h3 className='text-xl font-semibold text-black font-poppins'>
										{experience.title}
									</h3>
									<p
										className='text-base font-medium text-black-500'
										style={{ margin: 0 }}
									>
										{experience.company_name}
									</p>
								</div>

								<ul className='my-5 ml-5 space-y-2 list-disc'>
									{experience.points.map((point, index) => (
										<li
											key={`experience-point-${index}`}
											className='pl-1 text-sm font-normal text-black-500/60'
										>
											{point}
										</li>
									))}
								</ul>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</div>

			<hr className='border-slate-200' />

			<CTA />
		</section>
	);
}
