import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./Book"
import NewBook from "./NewBook"
import BookList from "./BookList"
import { BookLayout } from "./BookLayout";

function BookRoute() {
    return (
        <>
            <Routes>
                <Route element={<BookLayout />} >
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>

    )
}

export default BookRoute
