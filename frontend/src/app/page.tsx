import styles from './page.module.css'
import RecommendedCarousel from "@/src/widgets/RecommendedCarousel/RecommendedCarousel";

export default function Home() {
    return (
        <div className={styles.homeScreen}>
            <RecommendedCarousel/>
        </div>
    );
}
