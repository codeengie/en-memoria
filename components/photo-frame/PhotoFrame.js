'use client';

import styles from './PhotoFrame.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
			{/* Next.js 13 requires fill prop if not using width and height */}
			<Image
				alt="Displaying a photo..."
				className={styles['photo-frame__image']}
				fill
				priority
				src={photos[currentPhotoIndex]}
			/>
			<div className={styles.widget}>
				<time
					className={styles.widget__date}
					dateTime="2024-10-28T19:30:00"
				>
					28 October, Monday
				</time>
				<div className={styles.widget__temperature}>76&deg;c</div>
				<Image
					alt="Sunny day icon"
					className={styles.widget__icon}
					height={28}
					src="/sunny.svg"
					width={28}
				/>
				<div className={styles.widget__location}>Compton</div>
				<time
					className={styles.widget__time}
					dateTime="2024-10-28T19:30:00"
				>
					7:30 PM
				</time>
			</div>
		</div>
	);
};

export default PhotoFrame;
