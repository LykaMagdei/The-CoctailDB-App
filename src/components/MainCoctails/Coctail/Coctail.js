import React from 'react';
import style from './Coctail.module.css';
import shopingCart from '../../assets/img/shopping-cart-solid.svg';
import hearSolid from '../../assets/img/heart-solid.svg';
import { useNavigate } from 'react-router-dom';
import cartPlusSolid from '../../assets/img/cart-plus-solid.svg';
import heartRegular from '../../assets/img/heart-regular.svg';

const Coctail = ({
    name,
    category,
    glass,
    images,
    dateModified,
    idCoctail,
    booleanValue,
    setCoctailInShopingAC,
    setCoctailInListLikedAC,
    setInfoCoctailAC,
    answerInfo,
    hidePanelShopAndLike = true,
    deleteCoctailFromCartAC,
    deleteCoctailFromListLikedAC,
    toggleHideX,
    toggleConditionLikeAC,
    conditionLike,
    conditionCart,
    toggleConditionCartAC,
    positionPageLike,
    positionPageCart,
}) => {
    const navigate = useNavigate()
    const showInfoCoctale = () => {
        setInfoCoctailAC(idCoctail, answerInfo);
        navigate('/infoCoctail');
    }

    const toggleLikeEditMode = (boolean) => {
        if (boolean) {
            setCoctailInListLikedAC(idCoctail, booleanValue);
            toggleConditionLikeAC(idCoctail, positionPageLike);
        } else {
            deleteCoctailFromListLikedAC(idCoctail);
            toggleConditionLikeAC(idCoctail, positionPageLike);
        }
    }
    const toggleShopEditMode = (boolean) => {
        if (boolean) {
            setCoctailInShopingAC(idCoctail, booleanValue);
            toggleConditionCartAC(idCoctail, positionPageCart);
        } else {
            deleteCoctailFromCartAC(idCoctail);
            toggleConditionCartAC(idCoctail, positionPageCart);
        }
    }
    return (
        <div className={style.coctailConrainer}>
            {hidePanelShopAndLike &&
                <>
                    {!conditionLike ?
                        <img
                            src={hearSolid} alt="heart_solid" className={style.icon_heart}
                            onClick={() => toggleLikeEditMode(true)}
                        />
                        :
                        <img
                            src={heartRegular} alt="heart_solid" className={style.icon_heart}
                            onClick={() => toggleLikeEditMode(false)}
                        />
                    }
                    {!conditionCart ?
                        <img
                            src={shopingCart} alt="shoping_cart" className={style.icon_cart}
                            onClick={() => toggleShopEditMode(true)}
                        />
                        :
                        <img
                            src={cartPlusSolid} alt="shoping_cart" className={style.icon_cart}
                            onClick={() => toggleShopEditMode(false)}
                        />
                    }
                </>
            }
            {toggleHideX === 0 &&
                <div onClick={() => toggleShopEditMode(false)} className={style.delete_button}>
                    &#10006;
                </div>}
            {toggleHideX === 1 &&
                <div onClick={() => toggleLikeEditMode(false)} className={style.delete_button}>
                    &#10006;
                </div>}
            <img src={images} alt={name} onClick={showInfoCoctale} />
            <h2>{name}</h2>
            <h3>{category}</h3>
            <h3>{glass}</h3>
            {dateModified && <p>{dateModified}</p>}
        </div>
    );
};

export default Coctail;