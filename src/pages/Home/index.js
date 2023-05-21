// react
import React, { useState, useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";
// react-router-dom
import { Outlet } from "react-router-dom";

// function creator
import { fetchCategories } from "../../redux/Reducers/CategoriesReducer/actions";

// components
import CategoryItem from "../../components/CategoryItem/index";

// styles
import "./home.styles.scss";


export default function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesReducer);

  // console.log({categories});

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="home-page">
      <div className="home-cont">
        <div className="home-content">
          {categories?.map(({ id, title, imageUrl }) => (
            <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
          ))}
        </div>
      </div>
    </div>
  );
}
