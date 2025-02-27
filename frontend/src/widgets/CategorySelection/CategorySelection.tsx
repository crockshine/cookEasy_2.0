import styles from './CategorySelection.module.css'
import Image from 'next/image'
import {ICategory} from "@/src/types/category";
import React from "react";


const CategorySelection = ({categories}: {categories: ICategory[]}) => {
    return (
        <div className={styles.wrapper}>
            {
                categories.map(category =>
                    <div
                        className={styles.category}
                        style={{border: `2px solid ${category.color}`}}

                        key={category.id}
                    >
                            <div className={styles.imageBlock}>
                                <Image
                                    src={category.image}
                                    width={100}
                                    height={100}
                                    alt={'Категория'}
                                />
                            </div>
                            <span className={'span'}>{category.title}</span>
                    </div>
                )
            }
        </div>
    )
}

export default CategorySelection
