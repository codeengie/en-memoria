'use client';

import styles from './PhotoFrame.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DateDisplay from '@/components/date-display/DateDisplay';
import ClockDisplay from '@/components/clock-display/ClockDisplay';
import WeatherDisplay from '@/components/weather-display/WeatherDisplay';

const PhotoFrame = ({ photos }) => {
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPhotoIndex(
				(prevIndex) => (prevIndex + 1) % photos.length
			);
		}, 10000);

		return () => clearInterval(interval);
	}, [photos]);

	return (
		<div className={styles['photo-frame']}>
			{/* The `key` prop is the magic sauce that makes this work */}
			<AnimatePresence initial={false}>
				<motion.div
					key={currentPhotoIndex}
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					exit={{ x: '-100%' }}
					transition={{
						type: 'tween',
						ease: 'easeInOut',
						duration: 0.5
					}}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%'
					}}
				>
					{/* Next.js 13 requires fill prop if not using width and height */}
					<Image
						alt="Displaying a photo..."
						className={styles['photo-frame__image']}
						fill
						priority
						src={photos[currentPhotoIndex]}
					/>
				</motion.div>
			</AnimatePresence>
			<div className={styles.widget}>
				<DateDisplay className={styles.widget__date} />
				<WeatherDisplay className={styles.widget__weather} />
				<div className={styles.widget__location}>Compton</div>
				<ClockDisplay className={styles.widget__time} />
			</div>
		</div>
	);
};

export default PhotoFrame;
