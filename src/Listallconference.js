import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { onDeleteConference, onListallConference } from "./connect";

export const ListallConference = () => {


    const [sno, setSno] = useState(1);
    const navi = useNavigate();
    const [allvalues, setAllvalues] = useState([])

    const myconferencevalues = async () => {
        const temp = await onListallConference();
        setAllvalues(temp.data);
    }

    useEffect(() => {
        myconferencevalues();
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
                <h2 className="text-warning mt-4 fs-1 text-center text-decoration-underline" style={{ fontFamily: 'fantasy' }}>CONFERENCE DETAILS</h2>
            </div>
            <div className="container mt-5">
                <button className="btn btn-outline-warning"><a href="newconference">NEW CONFERENCE</a></button>
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
                                    <th>CONFERENCE NAME</th>
                                    <th>PUBLISHER</th>
                                    <th>PAGENO</th>
                                    <th>VOLUMN NO</th>
                                    <th>MONTH</th>
                                    <th>YEAROFPUBLISHER</th>
                                    <th>SPONSERSHIP</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allvalues.map((data, sno) => (
                                        <tr>
                                            <td>
                                                {sno + 1}
                                            </td>
                                            <td>{data.author}</td>
                                            <td>{data.coauthor}</td>
                                            <td>{data.conferencename}</td>
                                            <td>{data.publisher}</td>
                                            <td>{data.pageno}</td>
                                            <td>{data.volumnno}</td>
                                            <td>{data.month}</td>
                                            <td>{data.yearofpublisher}</td>
                                            <td>{data.sponsership}</td>
                                            <td>
                                                <a className="btn btn-outline-primary" href={`updateconference/${data.serialno}`}>UPDATE</a>
                                                <button className="btn btn-outline-danger"
                                                    onClick={async () => {
                                                        const t = await onDeleteConference(data.serialno);
                                                        navi("/listallconference")
                                                    }}>
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