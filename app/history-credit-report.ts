import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * @title Table
 */
@Component({
  selector: 'history-credit-report',
  styleUrls: ['history-credit-report.css'],
  templateUrl: 'history-credit-report.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class HistoryCreditReport implements OnInit {
  displayedColumns: string[] = [
    'Date',
    'Status',
    'PaymentRating',
    'Occurence',
    'Comments',
    'ComplianceCode',
    'Balance',
    'LastPaymentDate',
    'AmountPastDue',
    'ECOACode',
    'InfoIndicator',
    'Details',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

let date = new Date();
let lastDate = date.setDate(date.getDate() + 1);

export interface PeriodicElement {
  Status: string;
  Date: string;
  PaymentRating: string;
  Occurence: string;
  Comments: string;
  ComplianceCode: string;
  Balance: number;
  LastPaymentDate: string;
  AmountPastDue: number;
  ECOACode: string;
  InfoIndicator: string;
  Details: '';
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Date: date.getUTCFullYear() + '0' + (date.getMonth() + 2),
    Status: 'il',
    PaymentRating: '',
    Occurence: '',
    Comments: '',
    ComplianceCode: '',
    Balance: 3832,
    LastPaymentDate: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
    AmountPastDue: 0,
    ECOACode: 'i',
    InfoIndicator: '',
    Details: '',
  },

  {
    Date: date.getUTCFullYear() + '0' + (date.getMonth() + 1),
    Status: 'il',
    PaymentRating: '',
    Occurence: '',
    Comments: '',
    ComplianceCode: '',
    Balance: 4031,
    LastPaymentDate: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
    AmountPastDue: 0,
    ECOACode: 'i',
    InfoIndicator: '',
    Details: '',
  },
];

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
