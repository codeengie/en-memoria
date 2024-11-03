'use client';

import styles from './PhotoFrame.module.scss';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DateDisplay from '@/components/date-display/DateDisplay';
import ClockDisplay from '@/components/clock-display/ClockDisplay';
import WeatherDisplay from '@/components/weather-display/WeatherDisplay';

const PhotoFrame = () => {
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
	const [photos, setPhotos] = useState([]);

	// Fetch photos
	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const response = await fetch('/api/photos');

				if (!response.ok) {
					throw new Error('Failed to retrieve photos');
				}

				const data = await response.json();
				setPhotos(data.photoFiles);
			} catch (error) {
				console.error('Failed fetching photos', error);
			}
		};

		// Invoke method
		fetchPhotos();
	}, []);

	useEffect(() => {
		if (photos.length === 0) return;

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
					{photos.length !== 0 && (
						<Image
							alt="Displaying a photo..."
							className={styles['photo-frame__image']}
							fill
							priority
							src={`/api/photos/${photos[currentPhotoIndex]}`}
						/>
					)}
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
