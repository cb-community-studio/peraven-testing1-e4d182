import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';

const SingleStringPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("string")
            .get(urlParams.singleStringId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "String", type: "error", message: error.message || "Failed get string" });
            });
    }, []);

    const goBack = () => {
        history.replace("/string");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">String</h3>
                </div>
                <p>string/{urlParams.singleStringId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">Text</label>
                    <p className="m-0" >{data?.Text}</p>
                    <label className="text-sm">Input</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.Input}} onChange={(e) => setValByKey("{data?.Input}", e.target.value)}  />
                    <label className="text-sm">Icon</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.Icon}} onChange={(e) => setValByKey("{data?.Icon}", e.target.value)}  />
                    <label className="text-sm">Image</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.Image}} onChange={(e) => setValByKey("{data?.Image}", e.target.value)}  />
                    <label className="text-sm">Avatar</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.Avatar}} onChange={(e) => setValByKey("{data?.Avatar}", e.target.value)}  />
                    <label className="text-sm">Chip</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.Chip}} onChange={(e) => setValByKey("{data?.Chip}", e.target.value)}  />
                    <label className="text-sm">Tag</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.Tag}} onChange={(e) => setValByKey("{data?.Tag}", e.target.value)}  /> */}
            
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

export default connect(mapState, mapDispatch)(SingleStringPage);
