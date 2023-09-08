import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Checkbox } from 'primereact/checkbox';
import { InputSwitch } from 'primereact/inputswitch';

const SingleBooleanPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("boolean")
            .get(urlParams.singleBooleanId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Boolean", type: "error", message: error.message || "Failed get boolean" });
            });
    }, []);

    const goBack = () => {
        history.replace("/boolean");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Boolean</h3>
                </div>
                <p>boolean/{urlParams.singleBooleanId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">BooleanText</label>
                    <p className="m-0" >{data?.boolText}</p>
                    <label className="text-sm">BooleanTick</label>
                    <i className={`pi ${{data?.boolTick}?"pi-check": "pi-times"}`} onChange={(e) => setValByKey("{data?.boolTick}", e.target.value)}  ></i>
                    <label className="text-sm">BooleanCheckBox</label>
                    <Checkbox checked={_entity?.{data?.boolcheckBox}} onChange={ (e) => setValByKey("{data?.boolcheckBox}", e.checked)}  ></Checkbox>
                    <label className="text-sm">BooleanSwitch</label>
                    <InputSwitch checked={rowData.{data?.boolswitch}} onChange={ (e) => setValByKey("{data?.boolswitch}", e.value)}  /> */}
            
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

export default connect(mapState, mapDispatch)(SingleBooleanPage);
