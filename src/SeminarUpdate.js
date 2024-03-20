import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { onReadseminar, onUpdateseminar } from './connect';
export const Updateseminar = () => {

    const navi = useNavigate();

    const [seminar, setSeminar] = useState({})

    const { id } = useParams();
    const setvalues = async () => {
        const t = await onReadseminar(id);
        setSeminar(t.data);
    }

    useEffect(() => {
        setvalues();
    }, [])

    const track = (agi) => {
        const { name, value } = agi.target
        setSeminar(
            (old) => {
                return {
                    ...old,
                    [name]: value
                }
            }
        )
    }

    const update = async () => {
        await onUpdateseminar(seminar);
        navi("/listallseminar")
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
                        <h4 className="text-center mt-5 mb-5" id='center2'>SEMINAR FORM</h4>
                        <div className="row justify-content-center " >
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" >SERIALNO</label>
                                    <input type="number"
                                        onChange={track}
                                        value={seminar.serialno}
                                        name="serialno"
                                        className="form-control" />
                                </div>
                                <div className="col">
                                    <label className="form-label" > NAME</label>
                                    <input type="text"
                                        name="name"
                                        onChange={track}
                                        value={seminar.name}
                                        className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="mt-3 col">
                                <label className="form-label" >SEMINAR NAME</label>
                                <input type="text"
                                    name="seminarname"
                                    onChange={track}
                                    value={seminar.seminarname}
                                    className="form-control" />
                            </div>
                            <div className="mt-3 col">
                                <label className="form-label" >VENUE</label>
                                <input type="text"
                                    name="venue"
                                    onChange={track}
                                    value={seminar.venue}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >DATE</label>
                            <input type="date"
                                name="dateofseminar"
                                onChange={track}
                                value={seminar.dateofseminar}
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >SPONSERSHIP</label>
                            <input type="text"
                                name="sponsership"
                                onChange={track}
                                value={seminar.sponsership}
                                className="form-control" />
                        </div>
                        <div className="row justify-content-around mt-4">
                            <button className="btn btn-outline-success col-3 ms-3" onClick={update}  >UPDATE</button>
                            <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}