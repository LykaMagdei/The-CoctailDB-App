import React from 'react';
import Coctail from '../Coctail/Coctail';
import style from './CoctailList.module.css';
import arrowPhoto from '../../assets/img/rotate-right-solid.svg';

export const CoctailList = ({
    coctailsData,
    setCoctailInShopingAC,
    setCoctailInListLikedAC,
    setInfoCoctailAC,
    deleteCoctailFromCartAC,
    deleteCoctailFromListLikedAC,
    toggleConditionLikeAC,
    toggleConditionCartAC,
    addCoctailInDataAT,
}) => {
    const createCoctails = coctailsData.map((coctail, index) => {
        return (
            <Coctail
                key={index}
                images={coctail[0].strDrinkThumb}
                name={coctail[0].strDrink}
                category={coctail[0].strCategory}
                glass={coctail[0].strGlass}
                dateModified={coctail[0].dateModified}
                idCoctail={coctail[0].idDrink}
                setCoctailInShopingAC={setCoctailInShopingAC}
                setCoctailInListLikedAC={setCoctailInListLikedAC}
                setInfoCoctailAC={setInfoCoctailAC}
                booleanValue={true}
                answerInfo={'coctailsData'}
                deleteCoctailFromCartAC={deleteCoctailFromCartAC}
                deleteCoctailFromListLikedAC={deleteCoctailFromListLikedAC}
                toggleConditionLikeAC={toggleConditionLikeAC}
                conditionLike={coctail.conditionLike}
                toggleConditionCartAC={toggleConditionCartAC}
                conditionCart={coctail.conditionCart}
                positionPageCart={'coctailsData'}
                positionPageLike={'coctailsData'}
            />
        );
    });

    return (
        <div className={style.coctailsList}>
            <div className={style.coctailItem}>
                {createCoctails}
            </div>
            <div className={style.arrow}>
                <button onClick={addCoctailInDataAT}>
                    <img src={arrowPhoto} alt="arrow" />
                </button>
            </div>
        </div>
    );
};
