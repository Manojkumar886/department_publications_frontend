import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
export const Booksform = () => {
    const [books, setBooks] = useState({
        "serialno": 0,
        "author": "",
        "coauthor": "",
        "bookname": "",
        "publisher": "",
        "year": 0,
        "isbn_issnno": "",
        "publishercompanyname": "",
        "edition": "",
        "sponsership": ""
    })
    const track = (agi) => {
        const { name, value } = agi.target
        setBooks(
            (old) => {
                return {
                    ...old,
                    [name]: value
                }
            }
        )
    }

    const register = () => {

    }

    const reset = () => {
        alert("NOTHING")
    }

    return (
        <>
            <div className="container mt-5" >
                <span id='center1'></span>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                        <h4 className="text-center mt-5 mb-5" id='center2'>CONFERENCE FORM</h4>
                        <div className="row justify-content-center " >
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" >SERIALNO</label>
                                    <input type="number"
                                        onChange={track}
                                        value={books.serialno}
                                        name="serialno"
                                        className="form-control" />
                                </div>
                                <div className="col">
                                    <label className="form-label" >BOOK NAME</label>
                                    <input type="text"
                                        name="bookname"
                                        onChange={track}
                                        value={books.bookname}
                                        className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="mt-3 col">
                                <label className="form-label" >AUTHOR</label>
                                <input type="text"
                                    name="author"
                                    onChange={track}
                                    value={books.author}
                                    className="form-control" />
                            </div>
                            <div className="mt-3 col">
                                <label className="form-label" >COAUTHOR</label>
                                <input type="text"
                                    name="coauthor"
                                    onChange={track}
                                    value={books.coauthor}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >PUBLISHER</label>
                            <input type="text"
                                name="publisher"
                                onChange={track}
                                value={books.publisher}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >YEAR</label>
                            <input type="number"
                                name="year"
                                onChange={track}
                                value={books.year}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >ISBN/ISSN NO</label>
                            <input type="text"
                                name="isbn_issnno"
                                onChange={track}
                                value={books.isbn_issnno}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >PUBLISHER COMPANY NAME</label>
                            <input type="text"
                                name="publishercompanyname"
                                onChange={track}
                                value={books.publishercompanyname}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >EDITION</label>
                            <input type="text"
                                name="edition"
                                onChange={track}
                                value={books.edition}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >SPONSERSHIP</label>
                            <input type="text"
                                name="sponsership"
                                onChange={track}
                                value={books.sponsership}
                                className="form-control" />
                        </div>
                        <div className="row justify-content-around mt-4">
                            <button className="btn btn-outline-success col-3 ms-3" onClick={register}  >Register</button>
                            <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}