import React from 'react'
import Coctail from '../Coctail/Coctail';
import style from './FindCoctail.module.css';

const FindCoctail = ({
    findCoctailsData,
    setInfoCoctailAC,
    setCoctailInListLikedAC,
    setCoctailInShopingAC,
    deleteCoctailFromCartAC,
    deleteCoctailFromListLikedAC,
    toggleConditionLikeAC,
    toggleConditionCartAC,
}) => {
    if (findCoctailsData.length === 0) {
        return <div className={style.error_text}>Nothing found.</div>
    };
    const createCoctails = findCoctailsData.map((coctail, index) => {
        return (
            <Coctail
                key={index}
                images={coctail[0].strDrinkThumb}
                name={coctail[0].strDrink}
                category={coctail[0].strCategory}
                glass={coctail[0].strGlass}
                dateModified={coctail[0].dateModified}
                setInfoCoctailAC={setInfoCoctailAC}
                setCoctailInListLikedAC={setCoctailInListLikedAC}
                setCoctailInShopingAC={setCoctailInShopingAC}
                idCoctail={coctail[0].idDrink}
                booleanValue={false}
                answerInfo={'findCoctailsData'}
                deleteCoctailFromCartAC={deleteCoctailFromCartAC}
                deleteCoctailFromListLikedAC={deleteCoctailFromListLikedAC}
                toggleConditionLikeAC={toggleConditionLikeAC}
                toggleConditionCartAC={toggleConditionCartAC}
                conditionLike={coctail.conditionLike}
                conditionCart={coctail.conditionCart}
                positionPageCart={'findCoctailsData'}
                positionPageLike={'findCoctailsData'}
            />
        );
    });
    return (
        <div className={style.findCoctail}>{createCoctails}</div>
    );
};

export default FindCoctail;