const filterReducer = (state,action)=>{
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };

      case "SET_GRIDVIEW":
        return {
          ...state,
          grid_view: true,
        };
      case "SET_LISTVIEW":
        return {
          ...state,
          grid_view: false,
        };

      case "GET_SORT_VALUE":
        let userSortValue = document.getElementById("sort");
        let short_value =
          userSortValue.options[userSortValue.selectedIndex].value;
        console.log(short_value);
        return {
          ...state,
          sorting_value: short_value,
        };

      case "SORTING_PRODUCTS":
        let newSortData;
        let tempSortProduct = [...action.payload];
        if (state.sorting_value === "a-z") {
          newSortData = tempSortProduct.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        }
        return {
          ...state,
          filter_products:newSortData
        };
      default:
        return state;
    }
}

export default filterReducer;