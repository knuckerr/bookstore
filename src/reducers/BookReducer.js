      import {FETCH_BOOKS_REQUEST} from "../actions/BookActions";
import {FETCH_BOOKS_SUCCESS} from "../actions/BookActions";
import {FETCH_BOOKS_FAILURE} from "../actions/BookActions";
import {ADD_BOOK} from "../actions/BookActions";

//
//Initial state of books
//
const initialState = {
  loading: false,
  books: [],
  error: "",
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, ...action.newItem]
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: ""
      };
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default bookReducer;
