import React from 'react';
import Coctail from '../Coctail/Coctail';
import style from './ShopingList.module.css';

const ShopingList = ({
  shopingListData,
  setInfoCoctailAC,
  deleteCoctailFromCartAC,
  toggleConditionCartAC,
}) => {
  const createCoctails = shopingListData.map((coctail, index) => {
    return (
      <Coctail
        key={index}
        images={coctail[0].strDrinkThumb}
        name={coctail[0].strDrink}
        category={coctail[0].strCategory}
        glass={coctail[0].strGlass}
        dateModified={coctail[0].dateModified}
        idCoctail={coctail[0].idDrink}
        setInfoCoctailAC={setInfoCoctailAC}
        answerInfo={'shopingListData'}
        hidePanelShopAndLike={false}
        toggleHideX={0}
        deleteCoctailFromCartAC={deleteCoctailFromCartAC}
        toggleConditionCartAC={toggleConditionCartAC}
        positionPageCart={'coctailsData'}
      />
    );
  });
  return (
    <div className={style.shoping_list}>{shopingListData.length ?
      createCoctails :
      <div className={style.error_text}>Cart is empty</div>}
    </div>
  );
};

export default ShopingList;