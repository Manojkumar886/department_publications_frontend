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