import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const ADD_BOOK = "ADD_BOOK";

export const fetchBooks = () => {
  return dispatch => {
    dispatch(fetchBooksRequest());
    axios
      .get("/books.json", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        const books = response.data.books;
        dispatch(fetchBooksSuccess(books));
      })
      .catch(error => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};


export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};


export const addBook = (newItem) => {
  return {
    type: ADD_BOOK,
    newItem: newItem
  };
};

export const fetchBooksSuccess = books => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books
  };
};

export const fetchBooksFailure = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
};
