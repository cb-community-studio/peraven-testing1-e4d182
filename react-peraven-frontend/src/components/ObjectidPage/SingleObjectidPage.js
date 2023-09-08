import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleObjectidPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    const [users, setusers] = useState([]);
    useEffect(() => {
        //on mount
        client
            .service("objectid")
            .get(urlParams.singleObjectidId, { query: { $populate: ["relation"] }})
            .then((res) => {
                setData(res || {});
                const users = Array.isArray(res.relation)
            ? res.relation.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.relation
                ? [{ _id: res.relation._id, name: res.relation.name }]
                : [];
        setusers(users);
                setusers(res?.relation?.map((elem) => ({ _id: elem._id, name: elem.name })) || []);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Objectid", type: "error", message: error.message || "Failed get objectid" });
            });
    }, []);

    const goBack = () => {
        history.replace("/objectid");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Objectid</h3>
                </div>
                <p>objectid/{urlParams.singleObjectidId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">Relationship</label>
                    <p className="m-0" >{data?.relation}</p> */}
            <label className="text-sm">Relationship</label>
            {users.map((elem) => (
                    <Link key={elem._id} to={`/users/${elem._id}`}>
                        <div className="card">
                            <p>{elem.name}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleObjectidPage);
