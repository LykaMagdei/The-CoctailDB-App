import axios from "axios";

export const getCoctailDataAPI = () => {
   return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
};

export const getSearchCoctailNameAPI = (name) => {
   return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
}

