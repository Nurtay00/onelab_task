const initialState = {
  list: [],
  loading: true,
  categories: [],
};
export default function reducer(
  state: { list: any; categories: any } = initialState,
  action: { type: string; value: any }
) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCSES":
      return {
        ...state,
        loading: false,
        list: action.value,
      };
    case "ADD":
      return {
        ...state,
        list: [...state.list, action.value],
      };

    case "REMOVE":
      return {
        ...state,
        list: state.list.filter((item: any) =>
          item._id !== action.value ? item : null
        ),
      };
    case "EDIT":
      return {
        ...state,
        list: state.list.map((item: any) => {
          if (item._id === action.value._id) {
            return action.value;
          } else {
            return item;
          }
        }),
      };

    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.value],
      };

    case "SUCCSES_CATEGORY":
      return {
        ...state,
        categories: action.value,
        loading: false,
      };

    case "REMOVE_CATEGORY":
      return {
        ...state,
        list: state.list.map((item: any) =>
          item.category !== action.value.catergory
            ? item
            : { ...item, category: "nocategory" }
        ),
        categories: state.categories.filter((item: any) =>
          item.category !== action.value ? item : null
        ),
      };
    default:
      return state;
  }
}
