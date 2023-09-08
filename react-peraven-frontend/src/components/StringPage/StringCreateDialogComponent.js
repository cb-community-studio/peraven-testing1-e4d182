import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';



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

const StringCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            Text: _entity.Text,
            Input: _entity.Input,
            Icon: _entity.Icon,
            Image: _entity.Image,
            Avatar: _entity.Avatar,
            Chip: _entity.Chip,
            Tag: _entity.Tag,
        };

        setLoading(true);
        try {
            const result = await client.service("string").create(_data);
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
            <div role="string-create-dialog-component">
            <div>
                <p className="m-0">Text:</p>
                <InputText className="w-full mb-3" value={_entity?.Text} onChange={(e) => setValByKey("Text", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Input:</p>
                <InputText className="w-full mb-3" value={_entity?.Input} onChange={(e) => setValByKey("Input", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Icon:</p>
                <InputText className="w-full mb-3" value={_entity?.Icon} onChange={(e) => setValByKey("Icon", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Image:</p>
                <InputText className="w-full mb-3" value={_entity?.Image} onChange={(e) => setValByKey("Image", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Avatar:</p>
                <InputText className="w-full mb-3" value={_entity?.Avatar} onChange={(e) => setValByKey("Avatar", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Chip:</p>
                <InputText className="w-full mb-3" value={_entity?.Chip} onChange={(e) => setValByKey("Chip", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Tag:</p>
                <InputText className="w-full mb-3" value={_entity?.Tag} onChange={(e) => setValByKey("Tag", e.target.value)}  />
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

export default connect(null, mapDispatch)(StringCreateDialogComponent);
