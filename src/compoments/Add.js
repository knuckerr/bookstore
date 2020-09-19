import React, { useState } from "react";

const Add = () => {
  const [inputList, setInputList] = useState([{ title: "", categories: [], description: "", author: "", piblisher: "", published: "", pages: 0, subtitle: "", website: "", isbn: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { title: "", categories: [], description: "", author: "", piblisher: "", published: "", pages: 0, subtitle: "", website: "", isbn: "" }]);
  };

  return (
    <div className="Add">
      <form>
        {inputList.map((x, i) => {
          return (
            <>
              <div className="Form">
                <label className="label">Name</label>
                <input name="title" value={x.title} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Subtitle</label>
                <input name="subtitle" value={x.subtitle} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Author</label>
                <input name="author" value={x.author} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Publisher</label>
                <input name="published" value={x.publisher} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Published</label>
                <input name="published" type="date" value={x.published} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Pages</label>
                <input name="pages" type="number" value={x.pages} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">Website</label>
                <input name="website" value={x.website} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="Form">
                <label className="label">ISBN</label>
                <input name="isbn" value={x.isbn} onChange={e => handleInputChange(e, i)} />
              </div>

              <div className="Form">
                <label className="label">Description</label>
                <textarea name="description" value={x.description} onChange={e => handleInputChange(e, i)} />
              </div>
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
              </div>
            </>
          );
        })}
      </form>
    </div>
  );
};

export default Add;
