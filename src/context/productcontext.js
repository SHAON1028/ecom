import axios from "axios";
import { useReducer } from "react";
import { useContext, useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/productReducer";
export const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

export const AppProvider = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initialState);
//   api call for all products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({
        type: "SET_API_DATA",
        payload: products,
      });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
// api call for single products
const getSingleProduct = async (url) => {
  console.log(url)
  dispatch({ type: "SET_SINGLE_LOADING" });
  try {
    const res = await axios.get(url);
    const singleProduct = await res.data;
    dispatch({
      type: "SET_SINGLE_PRODUCT",
      payload: singleProduct,
    });
  } catch (error) {
    dispatch({ type: "SET_SINGLE_ERROR" });
  }
};
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state,  getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hooks

export const useProductContext = () => {
  return useContext(AppContext);
};
