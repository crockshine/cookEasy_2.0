import styles from './RecommendedCarousel.module.css'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/src/components/ui/carousel"

const RecommendedCarousel = () => {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className={styles.recommendation}>
                            <strong className={styles.badge}>Второе</strong>
                            <div className={styles.infoAboutRecommendation}>
                                <time dateTime={'PT10M'} className={styles.timing}>10 мин.</time>
                                <h3>Тушенка с картошкой</h3>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default RecommendedCarousel
