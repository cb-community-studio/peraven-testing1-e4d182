import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';

const SingleNumberPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("number")
            .get(urlParams.singleNumberId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Number", type: "error", message: error.message || "Failed get number" });
            });
    }, []);

    const goBack = () => {
        history.replace("/number");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Number</h3>
                </div>
                <p>number/{urlParams.singleNumberId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">NumberText</label>
                    <p className="m-0" >{data?.Numbertext}</p>
                    <label className="text-sm">NumberInput</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.NumberInput}} onChange={(e) => setValByKey("{data?.NumberInput}", e.target.value)}  />
                    <label className="text-sm">NumberBadge</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.NumberBadge}} onChange={(e) => setValByKey("{data?.NumberBadge}", e.target.value)}  />
                    <label className="text-sm">NumberKnob</label>
                    <Knob value={_entity?.{data?.NumberKnob}} min={0} max={100} onChange={ (e) => setValByKey("{data?.NumberKnob}", e.value)}  />
                    <label className="text-sm">NumberRating</label>
                    <Rating stars={5} style={{width:"20rem"}} value={_entity?.{data?.NumberRating}} onChange={ (e) => onChange={ (e) => setValByKey("{data?.NumberRating}", e.target.value)} cancel={false}  />
                    <label className="text-sm">NumberSlider</label>
                    <Slider value={_entity?.{data?.NumberSlider}} min={0} max={100} onChange={ (e) => setValByKey("{data?.NumberSlider}", e.value)} style={{width:"20rem"}}  />
                    <label className="text-sm">NumberBar</label>
                    <InputNumber className="w-full mb-3" value={_entity?.{data?.NumberProgBar}} onValueChange={(e) => setValByKey("{data?.NumberProgBar}", e.value)} prefix="%"  mode="decimal" minFractionDigits={2} /> */}
            
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

export default connect(mapState, mapDispatch)(SingleNumberPage);
