import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { DisplayallJournalist, onDeleteJournalist } from "./connect";

export const ListallJournalist = () => {
    const navi = useNavigate();
    const [allvalues, setAllvalues] = useState([])

    const myjournalistvalues = async () => {
        const temp = await DisplayallJournalist();
        setAllvalues(temp.data);
    }

    useEffect(() => {
        myjournalistvalues();
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
                <h2 className="text-warning mt-4 fs-1 text-center text-decoration-underline" style={{ fontFamily: 'fantasy' }}>JOURNALIST DETAILS</h2>
            </div>
            <div className="container mt-5">
                <button className="btn btn-outline-warning"><a href="newjournalist">NEW JOURNALIST</a></button>
            </div>
            <div className="container mt-2" >
                <div className="row justify-content-center">
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table table-striped table-warning">
                            <thead id="texting">
                                <tr>
                                    <th>SERIALNO</th>
                                    <th>ISBNno/ISSNno</th>
                                    <th>AUTHOR</th>
                                    <th>COAUTHOR</th>
                                    <th>ARTICLE</th>
                                    <th>JOURNAL NAME</th>
                                    <th>PAGENO</th>
                                    <th>YEAR OF PUBLICATIONS</th>
                                    <th>CONFERENCE TYPE</th>
                                    <th>ONLINE/OFFLINE</th>
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
                                            <td>{data.isbnno_issnno}</td>
                                            <td>{data.author}</td>
                                            <td>{data.coauthor}</td>
                                            <td>{data.article}</td>
                                            <td>{data.journalname}</td>
                                            <td>{data.pageno}</td>
                                            <td>{data.yearofpublication}</td>
                                            <td>{data.conferencetype}</td>
                                            <td>{data.online_offline}</td>
                                            <td>
                                                <a className="btn btn-outline-primary" href={`updatejournalist/${data.serialno}`}>UPDATE</a>
                                                <button className="btn btn-outline-danger"
                                                    onClick={
                                                        async () => {
                                                            const t = await onDeleteJournalist(data.serialno);
                                                            navi("/listalljournalist")
                                                        }
                                                    }>
                                                    Delete
                                                </button>
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