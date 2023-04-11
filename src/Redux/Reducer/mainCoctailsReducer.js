import { getCoctailDataAPI, getSearchCoctailNameAPI } from '../../api/api'

const SET_COCTAIL_DATA = 'mainCoctailReducer/SET_COCTAIL_DATA';
const SET_ADD_COCTAIL_IN_DATA = 'mainCoctailReducer/SET_ADD_COCTAIL_IN_DATA'
const TOGGLE_IS_FETCHING = 'mainCoctailReducer/TOGGLE_IS_FETCHING';
const SET_FIND_COCTAIL = 'mainCoctailReducer/SET_FIND_COCTAIL';
const SET_COCTAIL_IN_SHOPING = 'mainCoctailReducer/SET_COCTAIL_IN_SHOPING';
const SET_COCTAIL_IN_LIST_LIKED = 'mainCoctailReducer/SET_COCTAIL_IN_LIST_LIKED';
const SET_COCTAIL_INFO = 'mainCoctailReducer/SET_COCTAIL_INFO';
const DELETE_COCTAIL_FROM_CART = 'mainCoctailReducer/DELETE_COCTAIL_FROM_CART';
const DELETE_COCTAIL_DROM_LIST_LIKED = 'mainCoctailReducer/DELETE_COCTAIL_DROM_LIST_LIKED';
const TOGGLE_CONDITION_LIKE = 'mainCoctaleReducer/TOGGLE_CONDITION_LIKE';
const TOGGLE_CONDITION_CART = 'mainCoctailReducer/TOGGLE_CONDITION_CART';

const initialState = {
    coctailsData: [],
    findCoctailsData: [],
    isFetching: false,
    shopingListData: [],
    likedListData: [],
    infoCoctailData: [],
};

// reducer

const mainCoctailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COCTAIL_DATA:
            return {
                ...state,
                coctailsData: [...state.coctailsData,
                { conditionLike: false, conditionCart: false, ...action.coctail }],
            };
        case SET_ADD_COCTAIL_IN_DATA:
            return {
                ...state,
                coctailsData: [...state.coctailsData, ...action.arrCoctail]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.boolean,
            };
        case SET_FIND_COCTAIL:
            return {
                ...state,
                findCoctailsData: action.foundCoctail,
            };
        case SET_COCTAIL_IN_SHOPING:
            if (action.booleanValueShop) {
                return {
                    ...state,
                    shopingListData: [...state.shopingListData,
                    ...state.coctailsData.filter(id => id[0].idDrink === action.idCoctail)],
                }
            } else {
                return {
                    ...state,
                    shopingListData: [...state.shopingListData,
                    ...state.findCoctailsData.filter(id => id[0].idDrink === action.idCoctail)],
                }
            }
        case SET_COCTAIL_IN_LIST_LIKED:
            if (action.booleanValueLike) {
                return {
                    ...state,
                    likedListData: [...state.likedListData,
                    ...state.coctailsData.filter(id => id[0].idDrink === action.idDrinkLiked)],
                }
            } else {
                return {
                    ...state,
                    likedListData: [...state.likedListData,
                    ...state.findCoctailsData.filter(id => id[0].idDrink === action.idDrinkLiked)],
                }
            }
        case DELETE_COCTAIL_FROM_CART:
            return {
                ...state,
                shopingListData: state.shopingListData.filter(id => id[0].idDrink !== action.idDeleteCart),
            }
        case DELETE_COCTAIL_DROM_LIST_LIKED:
            return {
                ...state,
                likedListData: state.likedListData.filter(id => id[0].idDrink !== action.idDeleteLiked)
            }
        case SET_COCTAIL_INFO:
            if (action.answerInfo === 'coctailsData') {
                return {
                    ...state,
                    infoCoctailData: state.coctailsData.filter(id => id[0].idDrink === action.idInfoCoctail),
                }
            } else if (action.answerInfo === 'findCoctailsData') {
                return {
                    ...state,
                    infoCoctailData: state.findCoctailsData.filter(id => id[0].idDrink === action.idInfoCoctail),
                }
            } else if (action.answerInfo === 'shopingListData') {
                return {
                    ...state,
                    infoCoctailData: state.shopingListData.filter(id => id[0].idDrink === action.idInfoCoctail),
                }
            } else if (action.answerInfo === 'likedListData') {
                return {
                    ...state,
                    infoCoctailData: state.likedListData.filter(id => id[0].idDrink === action.idInfoCoctail),
                }
            }
        case TOGGLE_CONDITION_LIKE:
            if (action.positionPageLike === 'coctailsData') {
                return {
                    ...state,
                    coctailsData: state.coctailsData.map(c => {
                        if (c[0].idDrink === action.idConditionLike) {
                            return {
                                ...c,
                                conditionLike: !c.conditionLike,
                            }
                        } else {
                            return c;
                        }
                    })
                }
            } else if (action.positionPageLike === 'findCoctailsData') {
                return {
                    ...state,
                    findCoctailsData: state.findCoctailsData.map(c => {
                        if (c[0].idDrink === action.idConditionLike) {
                            return {
                                ...c,
                                conditionLike: !c.conditionLike,
                            }
                        } else {
                            return c;
                        }
                    })
                }
            }
        case TOGGLE_CONDITION_CART:
            if (action.positionPageCart === 'coctailsData') {
                return {
                    ...state,
                    coctailsData: state.coctailsData.map(c => {
                        if (c[0].idDrink === action.idConditionCart) {
                            return {
                                ...c,
                                conditionCart: !c.conditionCart,
                            }
                        } else {
                            return c;
                        }
                    })
                }
            } else if (action.positionPageCart === 'findCoctailsData') {
                return {
                    ...state,
                    findCoctailsData: state.findCoctailsData.map(c => {
                        if (c[0].idDrink === action.idConditionCart) {
                            return {
                                ...c,
                                conditionCart: !c.conditionCart,
                            }
                        } else {
                            return c;
                        }
                    })
                }
            }
        default:
            return state;
    };
};

// action create

export const setCoctailDataAC = coctail => {
    return {
        type: SET_COCTAIL_DATA,
        coctail,
    };
};

const setAddCocotalInDataAC = (arrCoctail) => {
    return {
        type: SET_ADD_COCTAIL_IN_DATA, arrCoctail,
    };
};

const toggleIsFethingAC = boolean => {
    return {
        type: TOGGLE_IS_FETCHING,
        boolean,
    };
};

const setFindCoctailAC = foundCoctail => {
    return {
        type: SET_FIND_COCTAIL,
        foundCoctail
    };
};

export const setCoctailInShopingAC = (idCoctail, booleanValueShop) => {
    return {
        type: SET_COCTAIL_IN_SHOPING,
        idCoctail, booleanValueShop,
    };
};

export const setCoctailInListLikedAC = (idDrinkLiked, booleanValueLike) => {
    return {
        type: SET_COCTAIL_IN_LIST_LIKED,
        idDrinkLiked, booleanValueLike,
    };
};

export const setInfoCoctailAC = (idInfoCoctail, answerInfo) => {
    return {
        type: SET_COCTAIL_INFO, idInfoCoctail, answerInfo,
    };
};

export const deleteCoctailFromCartAC = (idDeleteCart) => {
    return {
        type: DELETE_COCTAIL_FROM_CART, idDeleteCart,
    };
};

export const deleteCoctailFromListLikedAC = (idDeleteLiked) => {
    return {
        type: DELETE_COCTAIL_DROM_LIST_LIKED, idDeleteLiked,
    };
};

export const toggleConditionLikeAC = (idConditionLike, positionPageLike) => {
    return {
        type: TOGGLE_CONDITION_LIKE, idConditionLike, positionPageLike,
    };
};

export const toggleConditionCartAC = (idConditionCart, positionPageCart) => {
    return {
        type: TOGGLE_CONDITION_CART, idConditionCart, positionPageCart,
    };
};

// action thunk

export const getCoctailDataActionThunk = (num) => {
    return async dispatch => {
        dispatch(toggleIsFethingAC(true));
        for (let i = 0; i < num; i++) {
            const response = await getCoctailDataAPI();
            dispatch(setCoctailDataAC(response.data.drinks));
        };
        dispatch(toggleIsFethingAC(false));
    };
};

export const addCoctailInDataAT = () => {
    return async dispatch => {
        dispatch(toggleIsFethingAC(true));
        let arr = [];
        for (let i = 0; i < 20; i++) {
            const response = await getCoctailDataAPI();
            arr = [...arr,
            { conditionLike: false, conditionCart: false, ...response.data.drinks }];
        }
        dispatch(setAddCocotalInDataAC(arr));
        dispatch(toggleIsFethingAC(false));
    };
};

export const getFindCoctailAT = (name) => {
    return async dispatch => {
        dispatch(toggleIsFethingAC(true));
        const response = await getSearchCoctailNameAPI(name);
        let arr = [];
        if (response.data.drinks) {
            response.data.drinks.forEach(e => {
                arr = [...arr, { conditionLike: false, conditionCart: false, 0: e }];
            });
        }
        if (response.data.drinks === null) {
            dispatch(setFindCoctailAC([]));
        } else {
            dispatch(setFindCoctailAC(arr));
        }
        dispatch(toggleIsFethingAC(false));
    };
};

export default mainCoctailsReducer;