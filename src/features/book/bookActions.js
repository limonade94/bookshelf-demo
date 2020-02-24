import { CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK } from "./bookConstants";

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: {
      book
    }
  }
}

export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      book
    }
  }
}

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: {
      bookId
    }
  }
}
