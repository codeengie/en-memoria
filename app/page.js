import styles from './page.module.scss';
import PhotoFrame from '@/components/photo-frame/PhotoFrame';

const localPhotos = [
	'/images/test_000.jpg',
	'/images/test_001.jpg',
	'/images/test_002.jpg',
	'/images/test_003.jpg',
	'/images/test_004.jpg',
	'/images/test_005.jpg'
];

export default function Home() {
	return (
		<main className={styles.main}>
			<PhotoFrame photos={localPhotos} />
		</main>
	);
}
