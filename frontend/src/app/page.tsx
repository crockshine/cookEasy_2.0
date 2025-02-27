import styles from './page.module.css'
import RecommendedCarousel from "@/src/widgets/RecommendedCarousel/RecommendedCarousel";
import CategorySelection from "@/src/widgets/CategorySelection/CategorySelection";
import {ICategory} from "@/src/types/category";

export default function Home() {
    const categories: ICategory[] = [
        {
            id: '1',
            color: 'rgba(255,137,0,0.47)',
            image: '/icons/test-fish.svg',
            title: 'Первое'
        },
        {
            id: '2',
            color: 'rgba(255,38,0,0.49)',
            image: '/icons/test-fish.svg',
            title: 'Второе'
        },
        {
            id: '3',
            color: 'rgba(0,119,255,0.49)',
            image: '/icons/test-fish.svg',
            title: 'Десерты очень вкусные'
        },
    ]

    return (
        <div className={styles.homeScreen}>
            <RecommendedCarousel/>
            <CategorySelection categories={categories}/>
        </div>
    );
}
