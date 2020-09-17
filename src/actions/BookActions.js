import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const fetchBooks = () => {
  return dispatch => {
    dispatch(fetchBooksRequest());
    axios
      .get("https://gist.githubusercontent.com/knuckerr/d269f8ae90769eda639062c0a013ac6a/raw/25e5e821d958431cfc7b5f3803bb4e6e4582fe9d/books.json", {
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
