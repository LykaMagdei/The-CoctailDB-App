import React, { useEffect } from 'react';
import Preloader from '../assets/Preloader/Preloader';
import style from './MainCoctails.module.css';
import heartsPhoto from '../assets/img/heart-solid.svg';
import cartPhoto from '../assets/img/shopping-cart-solid.svg';
import searchPhoto from '../assets/img/magnifying-glass-solid.svg';
import { useForm } from 'react-hook-form';
import { NavLink, Route, Routes, useNavigate, } from 'react-router-dom';
import { CoctailList } from './CoctailList/CoctailList';
import FindCoctail from './FindCoctail/FindCoctail';
import ShopingList from './ShopingList/ShopingList';
import LikedList from './LikedList/LikedList';
import InfoCoctailContainer from './InfoCoctailContainer/InfoCoctailContainer';

const MainCoctails = ({
    getCoctailDataActionThunk,
    coctailsData,
    isFetching,
    getAddCoctailReducerAT,
    getFindCoctailAT,
    findCoctailsData,
    setCoctailInShopingAC,
    setCoctailInListLikedAC,
    shopingListData,
    likedListData,
    setInfoCoctailAC,
    deleteCoctailFromCartAC,
    deleteCoctailFromListLikedAC,
    toggleConditionLikeAC,
    toggleConditionCartAC,
    addCoctailInDataAT,
}) => {
    useEffect(() => {
        getCoctailDataActionThunk(20);
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    if (coctailsData.length < 20) {
        return <Preloader />;
    };
    const onSubmit = (data) => {
        getFindCoctailAT(data.nameCoctailValue);
        navigate("/findCoctail");
        reset();
    };

    return (
        <div className={style.mainCoctailsContainer}>
            {isFetching && <Preloader />}
            <header>
                <div className={style.logo}>
                    <NavLink to={'/'} >
                        <img src="https://www.thecocktaildb.com/images/logo.png" alt="logo" className={style.logo_large} />
                    </NavLink>
                    <NavLink to={'/'} >
                        <img src="https://cdn-icons-png.flaticon.com/512/167/167247.png" alt="logo" className={style.logo_mini} />
                    </NavLink>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.input_container}>
                        <img src={searchPhoto} alt="Search" />
                        <input {...register('nameCoctailValue', { required: true })} placeholder='Search' />
                    </div>
                    <button><img src={searchPhoto} alt="Search" /></button>
                </form>
                <div className={style.inner_icon}>
                    <div className={style.icon_block}>
                        {likedListData.length ?
                            <div className={style.table_number}>
                                {likedListData.length <= 99 ? likedListData.length : '99+'}
                            </div>
                            : null}
                        <NavLink to={'/likedList'} >
                            <img src={heartsPhoto} alt="heartsPhoto" className={style.icons} />
                        </NavLink>
                    </div>
                    <div className={style.icon_block}>
                        {shopingListData.length ?
                            <div className={style.table_number}>
                                {shopingListData.length <= 99 ? shopingListData.length : '99+'}
                            </div>
                            : null}
                        <NavLink to={'/shopingList'} >
                            <img src={cartPhoto} alt="shoping cart" className={style.icons} />
                        </NavLink>
                    </div>
                </div>
            </header>
            <div className={style.main_content}>
                <Routes>
                    <Route path="/" element={
                        <CoctailList
                            coctailsData={coctailsData}
                            getAddCoctailReducerAT={getAddCoctailReducerAT}
                            setCoctailInShopingAC={setCoctailInShopingAC}
                            setCoctailInListLikedAC={setCoctailInListLikedAC}
                            setInfoCoctailAC={setInfoCoctailAC}
                            deleteCoctailFromCartAC={deleteCoctailFromCartAC}
                            deleteCoctailFromListLikedAC={deleteCoctailFromListLikedAC}
                            getCoctailDataActionThunk={getCoctailDataActionThunk}
                            toggleConditionLikeAC={toggleConditionLikeAC}
                            toggleConditionCartAC={toggleConditionCartAC}
                            addCoctailInDataAT={addCoctailInDataAT}
                        />}
                    />
                    <Route path="/findCoctail" element={
                        <FindCoctail
                            findCoctailsData={findCoctailsData}
                            setInfoCoctailAC={setInfoCoctailAC}
                            setCoctailInShopingAC={setCoctailInShopingAC}
                            setCoctailInListLikedAC={setCoctailInListLikedAC}
                            deleteCoctailFromCartAC={deleteCoctailFromCartAC}
                            deleteCoctailFromListLikedAC={deleteCoctailFromListLikedAC}
                            toggleConditionLikeAC={toggleConditionLikeAC}
                            toggleConditionCartAC={toggleConditionCartAC}
                        />}
                    />
                    <Route path="/shopingList" element={
                        <ShopingList
                            shopingListData={shopingListData}
                            setInfoCoctailAC={setInfoCoctailAC}
                            deleteCoctailFromCartAC={deleteCoctailFromCartAC}
                            toggleConditionCartAC={toggleConditionCartAC}
                        />}
                    />
                    <Route path="/likedList" element={
                        <LikedList
                            likedListData={likedListData}
                            setInfoCoctailAC={setInfoCoctailAC}
                            deleteCoctailFromListLikedAC={deleteCoctailFromListLikedAC}
                            toggleConditionLikeAC={toggleConditionLikeAC}
                        />}
                    />
                    <Route path="/infoCoctail" element={<InfoCoctailContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default MainCoctails;