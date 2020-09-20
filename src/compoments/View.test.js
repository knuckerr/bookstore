import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import View from "./View";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { useParams, MemoryRouter  } from "react-router-dom";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Characters tests", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Should contain card", () => {
    act(() => {
      const initialState = {
        bookState: {
          loading: false,
          books: [
            {
              id: 0,
              isbn: "9781593275846",
              title: "Eloquent JavaScript, Second Edition",
              subtitle: "A Modern Introduction to Programming",
              author: "Marijn Haverbeke",
              published: "2014-12-14T00:00:00.000Z",
              publisher: "No Starch Press",
              pages: 472,
              description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
              website: "http://eloquentjavascript.net/",
              categories: ["programming", "javascript"]
            }
          ],
          error: ""
        }
      };
      let store;
      store = mockStore(initialState);
      useParams.mockReturnValue({id:0});

      render(
        <Provider store={store}>
          <View/>
        </Provider>,
        container
      );
    });
    expect(container.getElementsByClassName("MuiCardContent-root").length).toBe(2);
  });
});
