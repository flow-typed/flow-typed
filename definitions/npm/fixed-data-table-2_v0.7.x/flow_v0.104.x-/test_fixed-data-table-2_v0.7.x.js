/* @flow */
import React from 'react';
import {Cell, Column, ColumnGroup, Table} from 'fixed-data-table-2';

let cell = <Cell/>;
cell = <Cell onColumnResize={(left, width, minWidth, maxWidth, columnKey, event) => {event.target;}}/>;
// $ExpectError
cell = <Cell onColumnResize={(left, width, minWidth, maxWidth, columnKey, event) => minWidth + maxWidth}/>;

// $ExpectError
let column = <Column/>;
column = <Column width={300} minWidth={null}/>;

let columnGroup = <ColumnGroup/>;
// $ExpectError
columnGroup = <ColumnGroup align='top'/>;

// $ExpectError
let table = <Table/>;
table = <Table
  width={900}
  rowsCount={10}
  rowHeight={50}
  headerHeight={60}
/>;
