import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";




const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const NumberCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            Numbertext: _entity.Numbertext,
            NumberInput: _entity.NumberInput,
            NumberBadge: _entity.NumberBadge,
            NumberKnob: _entity.NumberKnob,
            NumberRating: _entity.NumberRating,
            NumberSlider: _entity.NumberSlider,
            NumberProgBar: _entity.NumberProgBar,
        };

        setLoading(true);
        try {
            const result = await client.service("number").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };
    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="number-create-dialog-component">
            <div>
                <p className="m-0">NumberText:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.Numbertext} onChange={(e) => setValByKey("Numbertext", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">NumberInput:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.NumberInput} onChange={(e) => setValByKey("NumberInput", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">NumberBadge:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.NumberBadge} onChange={(e) => setValByKey("NumberBadge", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">NumberKnob:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.NumberKnob} onChange={(e) => setValByKey("NumberKnob", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">NumberRating:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.NumberRating} onChange={(e) => setValByKey("NumberRating", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">NumberSlider:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.NumberSlider} onChange={(e) => setValByKey("NumberSlider", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">NumberBar:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.NumberProgBar} onChange={(e) => setValByKey("NumberProgBar", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(NumberCreateDialogComponent);
