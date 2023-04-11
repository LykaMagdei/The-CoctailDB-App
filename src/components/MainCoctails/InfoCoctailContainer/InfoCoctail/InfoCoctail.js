import React from 'react';
import { Navigate } from 'react-router-dom';
import style from './InfoCoctail.module.css';

const InfoCoctail = ({ infoCoctailData }) => {
    if (infoCoctailData.length === 0) {
        return <Navigate to={'/'} />
    }
    return (
        <div className={style.info_coctail_container}>
            <img src={infoCoctailData[0][0].strDrinkThumb} alt={infoCoctailData[0][0].strDrink} />
            <div className={style.info_text}>
                {infoCoctailData[0][0].strDrink ? <h2>Name drink: {infoCoctailData[0][0].strDrink}</h2> : null}
                {infoCoctailData[0][0].strDrinkAlternate ? <h3>Drink alternate: {infoCoctailData[0][0].strDrinkAlternate}</h3> : null}
                {infoCoctailData[0][0].strCategory ? <h3>Category: {infoCoctailData[0][0].strCategory}</h3> : null}
                {infoCoctailData[0][0].strGlass ? <h3>Glass: {infoCoctailData[0][0].strGlass}</h3> : null}
                {infoCoctailData[0][0].strAlcoholic ? <h3>Alcoholic: {infoCoctailData[0][0].strAlcoholic}</h3> : null}
                {infoCoctailData[0][0].dateModified ? <h3>Date modified: {infoCoctailData[0][0].dateModified}</h3> : null}
                {infoCoctailData[0][0].strInstructions ? <p><span>Instructions:</span> {infoCoctailData[0][0].strInstructions}</p> : null}
                <h4>list of ingredients:</h4>
                <ol>
                    {infoCoctailData[0][0].strIngredient1 ? <li>{infoCoctailData[0][0].strIngredient1}</li> : null}
                    {infoCoctailData[0][0].strIngredient2 ? <li>{infoCoctailData[0][0].strIngredient2}</li> : null}
                    {infoCoctailData[0][0].strIngredient3 ? <li>{infoCoctailData[0][0].strIngredient3}</li> : null}
                    {infoCoctailData[0][0].strIngredient4 ? <li>{infoCoctailData[0][0].strIngredient4}</li> : null}
                    {infoCoctailData[0][0].strIngredient5 ? <li>{infoCoctailData[0][0].strIngredient5}</li> : null}
                    {infoCoctailData[0][0].strIngredient6 ? <li>{infoCoctailData[0][0].strIngredient6}</li> : null}
                    {infoCoctailData[0][0].strIngredient7 ? <li>{infoCoctailData[0][0].strIngredient7}</li> : null}
                    {infoCoctailData[0][0].strIngredient8 ? <li>{infoCoctailData[0][0].strIngredient8}</li> : null}
                    {infoCoctailData[0][0].strIngredient9 ? <li>{infoCoctailData[0][0].strIngredient9}</li> : null}
                    {infoCoctailData[0][0].strIngredient10 ? <li>{infoCoctailData[0][0].strIngredient10}</li> : null}
                    {infoCoctailData[0][0].strIngredient11 ? <li>{infoCoctailData[0][0].strIngredient11}</li> : null}
                    {infoCoctailData[0][0].strIngredient12 ? <li>{infoCoctailData[0][0].strIngredient12}</li> : null}
                    {infoCoctailData[0][0].strIngredient13 ? <li>{infoCoctailData[0][0].strIngredient13}</li> : null}
                    {infoCoctailData[0][0].strIngredient14 ? <li>{infoCoctailData[0][0].strIngredient14}</li> : null}
                    {infoCoctailData[0][0].strIngredient15 ? <li>{infoCoctailData[0][0].strIngredient15}</li> : null}
                </ol>
            </div>
        </div>
    );
};

export default InfoCoctail;