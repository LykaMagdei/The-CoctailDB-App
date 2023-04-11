import { connect } from "react-redux";
import {
    getCoctailDataActionThunk,
    getFindCoctailAT,
    setCoctailInShopingAC,
    setCoctailInListLikedAC,
    setInfoCoctailAC,
    deleteCoctailFromCartAC,
    deleteCoctailFromListLikedAC,
    toggleConditionLikeAC,
    toggleConditionCartAC, 
    addCoctailInDataAT,
}
    from "../../Redux/Reducer/mainCoctailsReducer";
import MainCoctails from "./MainCoctails";

const mapStateToProps = (state) => {
    return {
        coctailsData: state.coctailsPage.coctailsData,
        isFetching: state.coctailsPage.isFetching,
        findCoctailsData: state.coctailsPage.findCoctailsData,
        shopingListData: state.coctailsPage.shopingListData,
        likedListData: state.coctailsPage.likedListData,
    };
};

const MainCoctailsContainer = connect(mapStateToProps,
    {
        getCoctailDataActionThunk,
        getFindCoctailAT,
        setCoctailInShopingAC,
        setCoctailInListLikedAC,
        setInfoCoctailAC,
        deleteCoctailFromCartAC,
        deleteCoctailFromListLikedAC,
        toggleConditionLikeAC,
        toggleConditionCartAC,
        addCoctailInDataAT,
    })
    (MainCoctails);

export default MainCoctailsContainer;