import styles from './page.module.scss';
import PhotoFrame from '@/components/photo-frame/PhotoFrame';

export default function Home() {
	return (
		<main className={styles.main}>
			<PhotoFrame />
		</main>
	);
}
