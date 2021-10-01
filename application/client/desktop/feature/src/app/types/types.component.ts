import { Component, OnInit } from '@angular/core';
import { TypesService } from './types.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})

export class TypesComponent implements OnInit {
    columnDefs: any = [];
    public types = {
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
        private typesService: TypesService,
    ) { }

    ngOnInit() {
        this.types.created_by = sessionStorage.getItem('email'); 
        this.GpGetAllValues();
    }
    GpCreate() {
        this.typesService.GpCreate(this.types).subscribe(data => {
            this.types.name = ''
 	 	this.types.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.typesService.GpGetAllValues().subscribe(data => {
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