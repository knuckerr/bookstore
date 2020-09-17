import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../actions/BookActions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link  } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState("");
  const bookState = useSelector(state => state.bookState);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const filteredBooks = React.useMemo(
    () =>
      bookState.books.filter(book => {
        return book.title.toLowerCase().includes(filterText);
      }),
    [filterText]
  );

  const itemsToDisplay = filterText ? filteredBooks : bookState.books;

  return (
    <div>
      <h2 className="Search-header">Search to find your new book</h2>
      <input
        type="text"
        className="Searchbar"
        placeholder="Search.."
        value={filterText}
        onChange={e => setFilterText(e.target.value.toLocaleLowerCase())} />
      <br></br>
      <Grid container spacing={1}>
        {itemsToDisplay.map((book, index) => (
          <Grid item xs={4} key={index}>
            <Card className="bookCard">
              <CardActionArea>
                <Link to={'/book/' + index}>
                <CardMedia component="img" height="140" image="/index.png" title={book.title} />
                </Link>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {book.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
