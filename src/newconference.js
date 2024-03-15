import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
import { onCreateConference } from './connect';
export const ConferenceForm = () => {
    const [conference, setConference] = useState({
        "serialno": 0,
        "author": "",
        "coauthor": "",
        "conferencename": "",
        "publisher": "",
        "pageno": "",
        "volumnno": "",
        "month": 0,
        "yearofpublisher": 0,
        "sponsership": ""
    })
    const track = (agi) => {
        const { name, value } = agi.target
        setConference(
            (old) => {
                return {
                    ...old,
                    [name]: value
                }
            }
        )
    }

    const register = async () => {
        const temp = await onCreateConference(conference);
        alert(temp.data);
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
                                        value={conference.serialno}
                                        name="serialno"
                                        className="form-control" />
                                </div>
                                <div className="col">
                                    <label className="form-label" >CONFERENCE NAME</label>
                                    <input type="text"
                                        name="conferencename"
                                        onChange={track}
                                        value={conference.conferencename}
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
                                    value={conference.author}
                                    className="form-control" />
                            </div>
                            <div className="mt-3 col">
                                <label className="form-label" >COAUTHOR</label>
                                <input type="text"
                                    name="coauthor"
                                    onChange={track}
                                    value={conference.coauthor}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >PUBLISHER</label>
                            <input type="text"
                                name="publisher"
                                onChange={track}
                                value={conference.publisher}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >VOLUMN NO</label>
                            <input type="text"
                                name="volumnno"
                                onChange={track}
                                value={conference.volumnno}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >PAGENO</label>
                            <input type="text"
                                name="pageno"
                                onChange={track}
                                value={conference.pageno}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >MONTH</label>
                            <input type="number"
                                name="month"
                                onChange={track}
                                value={conference.month}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >YEAR OF PUBLISHER</label>
                            <input type="number"
                                name="yearofpublisher"
                                onChange={track}
                                value={conference.yearofpublisher}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >SPONSERSHIP</label>
                            <input type="text"
                                name="sponsership"
                                onChange={track}
                                value={conference.sponsership}
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