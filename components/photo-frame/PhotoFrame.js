import styles from './PhotoFrame.module.scss';
import Image from 'next/image';

const PhotoFrame = (props) => {
	return (
		<>
			{props.imageURL && (
				<div className={styles['photo-frame']}>
					{/* Next.js 13 requires fill prop if not using width and height */}
					<Image
						alt="An image to display..."
						className={styles['photo-frame__image']}
						fill
						priority
						src={props.imageURL}
					/>
					<div className={styles.widget}>
						<time
							className={styles.widget__date}
							dateTime="2024-10-28T19:30:00"
						>
							28 October, Monday
						</time>
						<div className={styles.widget__temperature}>
							76&deg;c
						</div>
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
			)}
		</>
	);
};

export default PhotoFrame;
