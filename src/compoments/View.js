import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { loadState } from "../localStorage";
import Button from "@material-ui/core/Button";

const View = () => {
  const bookState = loadState();
  let { id } = useParams();
  const book = bookState.books[id];

  const getYear = book => {
    return book.split("-")[0];
  };

  return !book ? (
    <h2 style={{ "text-align": "center" }}>Not found</h2>
  ) : (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <h3>{book.title}</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>

          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Button variant="contained" color="primary">
                Favourte
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary">
                Share
              </Button>
            </Grid>
          </Grid>
          <p>
            <b>Category:</b> #tag, #tag, #tag
          </p>
          <p>
            <b>Year:</b> {getYear(book.published)}
          </p>
          <p>
            <b>Number of Pages:</b> {book.pages}
          </p>
          <p>
            <b>Publisher:</b> {book.publisher}
          </p>
          <p>
            <b>ISBN:</b> {book.isbn}
          </p>
          <Button variant="contained" color="primary">
            Buy
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default View;
