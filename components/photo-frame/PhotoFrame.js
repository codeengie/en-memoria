'use client';

import styles from './PhotoFrame.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DateDisplay from '@/components/date-display/DateDisplay';

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
