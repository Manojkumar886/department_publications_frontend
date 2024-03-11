import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CreatenewJournalist } from './connect';
export let NewjournalistForm = () => {
    const navi = useNavigate();
    const [process, setProcess] = useState({
        "serialno": 0,
        "isbnno_issnno": "",
        "author": "",
        "coauthor": "",
        "article": "",
        "journalname": "",
        "pageno": "",
        "yearofpublication": 0,
        "publicationmainid": "",
        "conferencetype": "",
        "online_offline": ""
    })
    const track = (agi) => {
        const { name, value } = agi.target
        setProcess(
            (old) => {
                return {
                    ...old,
                    [name]: value
                }
            }
        )
    }
    const reset = () => {
        alert('Rejected successfully...!')
    }
    const register = async () => {
        const temp = await CreatenewJournalist(process);
        alert(temp.data);
        navi("/listalljournalist")
    }
    return (
        <>
            <div className="container mt-5" >
                <span id='center1'></span>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                        <h4 className="text-center mt-5 mb-5" id='center2'>NEW JOURNALIST FORM</h4>
                        <div className="row justify-content-center " >
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" >SERIALNO</label>
                                    <input type="number"
                                        onChange={track}
                                        value={process.serialno}
                                        name="serialno"
                                        className="form-control" />
                                </div>
                                <div className="col">
                                    <label className="form-label" >ISSNNO/ISBNNO</label>
                                    <input type="text"
                                        name="isbnno_issnno"
                                        onChange={track}
                                        value={process.isbnno_issnno}
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
                                    value={process.author}
                                    className="form-control" />
                            </div>
                            <div className="mt-3 col">
                                <label className="form-label" >COAUTHOR</label>
                                <input type="text"
                                    name="coauthor"
                                    onChange={track}
                                    value={process.coauthor}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >ARTICLE</label>
                            <input type="text"
                                name="article"
                                onChange={track}
                                value={process.article}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >JOURNALNAME</label>
                            <input type="text"
                                name="journalname"
                                onChange={track}
                                value={process.journalname}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >PAGENO</label>
                            <input type="text"
                                name="pageno"
                                onChange={track}
                                value={process.pageno}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >YEAROF PUBLICATIONS</label>
                            <input type="number"
                                name="yearofpublication"
                                onChange={track}
                                value={process.yearofpublication}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >PUBLICATIONSMAIN ID</label>
                            <input type="text"
                                name="publicationmainid"
                                onChange={track}
                                value={process.publicationmainid}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >CONFERENCE TYPE</label>
                            <input type="text"
                                name="conferencetype"
                                onChange={track}
                                value={process.conferencetype}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >OFFLINE/ONLINE</label>
                            <input type="text"
                                name="online_offline"
                                onChange={track}
                                value={process.online_offline}
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