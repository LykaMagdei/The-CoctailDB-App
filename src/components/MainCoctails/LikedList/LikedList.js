import React from 'react';
import Coctail from '../Coctail/Coctail';
import style from './LikedList.module.css';

const LikedList = ({
    likedListData,
    setInfoCoctailAC,
    deleteCoctailFromListLikedAC,
    toggleConditionLikeAC,
}) => {
    const createCoctails = likedListData.map((coctail, index) => {
        return (
            <Coctail
                key={index}
                images={coctail[0].strDrinkThumb}
                name={coctail[0].strDrink}
                category={coctail[0].strCategory}
                glass={coctail[0].strGlass}
                dateModified={coctail[0].dateModified}
                idCoctail={coctail[0].idDrink}
                answerInfo={'likedListData'}
                setInfoCoctailAC={setInfoCoctailAC}
                hidePanelShopAndLike={false}
                toggleHideX={1}
                deleteCoctailFromListLikedAC={deleteCoctailFromListLikedAC}
                toggleConditionLikeAC={toggleConditionLikeAC}
                positionPageLike={'coctailsData'}
            />
        );
    });
    return (
        <div className={style.liked_list}>
            {likedListData.length ?
                createCoctails
                :
                <div className={style.error_text}>Favorite list is empty</div>}
        </div>
    );
};

export default LikedList;