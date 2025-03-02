import styles from './RecipeList.module.css'
import React, {useRef} from 'react';

interface IRecipeListProps {
    isScroll: boolean,
    ref: React.Ref<HTMLDivElement | null>
}

const RecipeList = ({isScroll, ref}: IRecipeListProps) => {

    return (
        <div
            className={styles.wrapper}
            style={
                isScroll
                    ? {overflowY: 'auto'}
                    : {overflowY: 'hidden'}
            }
            ref={ref}
        >
            <div className={styles.recipeList} >

            </div>
        </div>
    )
};

export default RecipeList;