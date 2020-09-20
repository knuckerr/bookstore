import React, { useState } from "react";
import { addBook } from "../actions/BookActions";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const Add = () => {
  const dispatch = useDispatch();
  const [inputList, setInputList] = useState([{ title: "", categories: [], description: "", author: "", piblisher: "", published: "", pages: 0, subtitle: "", website: "", isbn: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    if (name === "categories") {
      if (list[index][name].indexOf(value) !== -1) {
        var indexElement = list[index][name].indexOf(value);
        list[index][name].splice(indexElement, 1);
      } else {
        if (list[index][name].length < 4) {
          list[index][name].push(value);
        }
      }
    } else {
      list[index][name] = value;
    }
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle the submit;
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook(inputList));
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { title: "", categories: [], description: "", author: "", piblisher: "", published: "", pages: 0, subtitle: "", website: "", isbn: "" }]);
  };

  return (
    <div className="Add">
      <form onSubmit={handleSubmit}>
        {inputList.map((x, i) => {
          return (
            <>
              <div className="Add-buttons">
                <div>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" onClick={handleAddClick}>
                    Add
                  </Button>
                </div>
                <div>
                  {inputList.length !== 1 && (
                    <Button variant="contained" color="secondary" onClick={() => handleRemoveClick(i)}>
                      Remove
                    </Button>
                  )}
                </div>
              </div>
              <div className="Form">
                <label className="label">Name</label>
                <input name="title" maxLength="122" value={x.title} required="true" onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Subtitle</label>
                <input name="subtitle" maxLength="122" required="true" value={x.subtitle} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Author</label>
                <input name="author" maxLength="122" multiple="true" required="true" value={x.author} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Publisher</label>
                <input name="published" maxLength="55" minLength="5" required="true" value={x.publisher} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Published</label>
                <input name="published" type="date" required="true" value={x.published} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Pages</label>
                <input name="pages" min="1" type="number" max="999" required="true" value={x.pages} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Website</label>
                <input name="website" type="link" value={x.website} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Categories</label>
                <select name="categories" type="link" max="1" value={x.categories} onChange={e => handleInputChange(e, i)} multiple="true">
                  <option value="programming"> Programming </option>
                  <option value="javascript"> Javascript</option>
                </select>
              </div>
              <div className="Form">
                <label className="label">ISBN</label>
                <input name="isbn" type="text" value={x.isbn} required="true" pattern="[1-9]{1}[0-9]{9}" onChange={e => handleInputChange(e, i)} />
              </div>

              <div className="Form">
                <label className="label">Description</label>
                <textarea name="description" value={x.description} onChange={e => handleInputChange(e, i)} />
              </div>
            </>
          );
        })}
      </form>
    </div>
  );
};

export default Add;
