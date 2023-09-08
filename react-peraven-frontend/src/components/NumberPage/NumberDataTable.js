
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';


const NumberDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.Numbertext}</p>
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.NumberInput}  />
    const badgeTemplate2 = (rowData, { rowIndex }) => <Badge value={rowData.NumberBadge}  ></Badge>
    const knobTemplate3 = (rowData, { rowIndex }) => <Knob value={rowData.NumberKnob}  />
    const ratingTemplate4 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.NumberRating} cancel={false}  />
    const sliderTemplate5 = (rowData, { rowIndex }) => <Slider value={rowData.NumberSlider} style={{width:"20rem"}}  />
    const progressBarTemplate6 = (rowData, { rowIndex }) => <ProgressBar value={rowData.NumberProgBar} style={{width:"20rem"}}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="Numbertext" header="NumberText" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="NumberInput" header="NumberInput" body={inputTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="NumberBadge" header="NumberBadge" body={badgeTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="NumberKnob" header="NumberKnob" body={knobTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="NumberRating" header="NumberRating" body={ratingTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="NumberSlider" header="NumberSlider" body={sliderTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="NumberProgBar" header="NumberBar" body={progressBarTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default NumberDataTable;