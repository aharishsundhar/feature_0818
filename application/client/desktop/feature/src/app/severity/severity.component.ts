import { Component, OnInit } from '@angular/core';
import { SeverityService } from './severity.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.scss'],
})

export class SeverityComponent implements OnInit {
    columnDefs: any = [];
    public severity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private severityService: SeverityService,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email'); 
        this.GpGetAllValues();
    }
    GpCreate() {
        this.severityService.GpCreate(this.severity).subscribe(data => {
            this.severity.name = ''
 	 	this.severity.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.severityService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}