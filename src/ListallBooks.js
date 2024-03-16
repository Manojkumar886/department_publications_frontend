import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { onbooksList } from "./connect";


export const Listallbooks = () => {
    const navi = useNavigate();

    const [allvalues, setAllvalues] = useState([])

    const mybooksvalues = async () => {
        const temp = await onbooksList();
        setAllvalues(temp.data);
    }

    useEffect(() => {
        mybooksvalues();
    })
    return (
        <>
            <div className='container-fluid'>
                <header className="row justify-content-center bg-dark" style={{ margin: 'auto' }}>
                    <div className="col-lg-4 col-md-5 col-sm-6 col-12 text-center">
                        <img src={require('./images/logo-top.jpg')} className="img-fluid mt-lg-3" alt="Muthayammal College Logo" style={{ height: '130px' }} />
                    </div>
                    <div className="col-lg-7 col-md-8 col-sm-6 col-12 text-center mt-3">
                        <div className="mec-title me-lg-5" style={{ fontFamily: 'fantasy' }}>
                            <h1 className="text-white fw-bold">Thiruvalluvar Government Arts College</h1>
                            <p className="text-white fw-light">Approved by AICTE | Affiliated to Periyar University</p>
                        </div>
                    </div>
                </header>
            </div>
            <div>
                <h2 className="text-warning mt-4 fs-1 text-center text-decoration-underline" style={{ fontFamily: 'fantasy' }}>BOOK DETAILS</h2>
            </div>
            <div className="container mt-5">
                <button className="btn btn-outline-warning"><a href="newconference">NEW BOOK</a></button>
            </div>
            <div className="container mt-2" >
                <div className="row justify-content-center">
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table table-striped table-warning">
                            <thead id="texting">
                                <tr>
                                    <th>SERIALNO</th>
                                    <th>AUTHOR</th>
                                    <th>COAUTHOR</th>
                                    <th>BOOK NAME</th>
                                    <th>PUBLISHER</th>
                                    <th>YEAR</th>
                                    <th>ISBN/ISSN NO</th>
                                    <th>PUBLISHERCOMPANY NAME</th>
                                    <th>EDITION</th>
                                    <th>SPONSERSHIP</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allvalues.map((data) => (
                                        <tr>
                                            <td>
                                                <a className="btn btn-outline-primary">{data.serialno}</a>
                                            </td>
                                            <td>{data.author}</td>
                                            <td>{data.coauthor}</td>
                                            <td>{data.bookname}</td>
                                            <td>{data.publisher}</td>
                                            <td>{data.year}</td>
                                            <td>{data.isbn_issnno}</td>
                                            <td>{data.publishercompanyname}</td>
                                            <td>{data.edition}</td>
                                            <td>{data.sponsership}</td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-secondary">UPDATE</button>
                                                <button className="btn btn-outline-danger">DELETE</button>
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}