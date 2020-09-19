import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { fetchBooks } from "../actions/BookActions";

const View = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const bookState = useSelector(state => state.bookState);
  const book = bookState.books[id];

  // this is not idiomatic if we have a server we just make a post for the id of the book to get one item
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  // grab the year
  const getYear = book => {
    return book.split("-")[0];
  };

  // filter the books by the tag of the select book
  const filteredBooks = () => {
    return bookState.books.filter(d => d.categories.every(c => book.categories.includes(c)));
  };

  // display other books with same tags
  const otherBooks = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const books = filteredBooks();
    // render the carousel if no books found display all them
    const itemsToDisplay = books.length > 0 ? books : bookState.books;
    return (
      <Slider {...settings}>
        {itemsToDisplay.map((book, index) => (
          <Card className="bookCard-sm">
            <CardActionArea>
              <Link to={"/book/" + index}>
                <CardMedia component="img" height="140" image="/index.png" title={book.title} />
              </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {book.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    );
  };

  // render
  return !book ? (
    <h2 style={{ "text-align": "center" }}>Not found</h2>
  ) : (
    <div>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <div class="bookView">
            <img src={"/index.png"} width="300" height="300" />
            <div>
              <Icon>account_circle md-48</Icon> {book.author}
            </div>
            <div className="view-rate">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <h3>{book.title}</h3>
          <p className="Description">{book.description}</p>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Button variant="contained" color="primary">
                Favourte
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary">
                Share
              </Button>
            </Grid>
          </Grid>
          <p>
            <b>Category:</b> {book.categories.join(", ")}
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
      <div>
        <h2>Other Books you may like</h2>
        {otherBooks()}
      </div>
    </div>
  );
};
export default View;
