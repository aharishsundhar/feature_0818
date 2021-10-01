import { Component, OnInit } from '@angular/core';
import { CreateallService } from './createall.service';

@Component({
  selector: 'app-createall',
  templateUrl: './createall.component.html',
  styleUrls: ['./createall.component.scss'],
})

export class CreateallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'email', field: 'email'  },{ headerName: 'severity', field: 'severity'  },{ headerName: 'types', field: 'types'  },];
    severityitemArray: any = [];
    typesitemArray: any = [];
    public ticket = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        email: '',
        severity: '',
        types: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private createallService: CreateallService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email'); 
        this.GpGetAllValues();
    }
    GpCreate() {
        this.createallService.GpCreate(this.ticket).subscribe(data => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.email = ''
 	 	this.ticket.severity = ''
 	 	this.ticket.types = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.createallService.GpGetAllValues().subscribe(data => {
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