
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputSwitch } from 'primereact/inputswitch';


const BooleanDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.boolText}</p>
    const tickTemplate1 = (rowData, { rowIndex }) => <i className={`pi ${rowData.boolTick?"pi-check": "pi-times"}`}  ></i>
    const checkboxTemplate2 = (rowData, { rowIndex }) => <Checkbox checked={rowData.boolcheckBox}  ></Checkbox>
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.boolswitch}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="boolText" header="BooleanText" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="boolTick" header="BooleanTick" body={tickTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="boolcheckBox" header="BooleanCheckBox" body={checkboxTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="boolswitch" header="BooleanSwitch" body={switchTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default BooleanDataTable;