import axios from "axios";

const url = "http://localhost:8080/department_publications"

export const Loginperformance = async (object) => {
    const credentials = object.username + ":" + object.password;

    const token = btoa(credentials);

    try {
        const t = await axios.get(`http://localhost:8080/department_publications/`,
            {
                headers: {
                    "Authorization": `Basic ${token}`
                }
            })
        if (t.data) {
            sessionStorage.setItem("auth", token)
            return;
        }
    }
    catch (err) {
        alert(err);
    }

}

export const DisplayallJournalist = async () => {
    const t = await axios.get(`${url}/`,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem('auth')}`
            }
        });
    return t;
}

export const CreatenewJournalist = async (object) => {
    const t = await axios.post(`${url}/create`, object,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem('auth')}`
            }
        });

    alert(JSON.stringify(t.data) + " has been added in database")
    return t;
}

export const onJournalistUpdate = async (obj) => {
    const t = await axios.put(`${url}/updating`, obj, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    })
    return t;
}

export const onReadJournalist = async (id) => {
    const t = await axios.get(`${url}/read/${id}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    })
    return t;
}

export const onDeleteJournalist = async (id) => {
    const t = await axios.delete(`${url}/deleteone/${id}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    });
    return t;
}

export const onfilterJounalist = async (author) => {
    const t = await axios.get(`${url}/findbyauthor/${author}`,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem("auth")}`
            }
        })
    return t;
}

// CONFERENCE 

// create Conference
export const onCreateConference = async (object) => {
    const t = await axios.post(`${url}/conferencecreate`, object, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    });
    return t;
}

// List Conference
export const onListallConference = async () => {
    const t = await axios.get(`${url}/conferencelist`,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem('auth')}`
            }
        });
    return t;
}

// Read Conference
export const onReadConference = async (id) => {
    const t = await axios.get(`${url}/conferenceread/${id}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    })
    return t;
}

// DeleteConference
export const onDeleteConference = async (id) => {
    const t = await axios.delete(`${url}/deleteconference/${id}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    });
    return t;
}

export const onUpdateConference = async (obj) => {
    const t = await axios.put(`${url}/updateconference`, obj, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    })
    return t;
}



// BOOKs

// LIST
export const onbooksList = async () => {
    const t = await axios.get(`http://localhost:8080/department_publications/booklistall`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem("auth")}`
        }
    })

    return t;
}


// CREATE
export const onbooksCreate = async (object) => {

    const t = await axios.post(`${url}/bookscreate`, object, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem("auth")}`
        }
    });

    return t;
}
// delete
export const onbooksDelete = async (id) => {
    const t = await axios.delete(`${url}/bookdelete/${id}`,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem("auth")}`
            }
        })

}