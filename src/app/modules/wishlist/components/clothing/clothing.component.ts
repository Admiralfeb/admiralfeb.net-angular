import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '@shared/components/message-dialog/message-dialog.component';

export interface ZEarrings {
  stone: string;
  month: string;
  count: number;
}
const zEarrings: ZEarrings[] = [
  {
    stone: 'Tanzanite',
    month: '',
    count: 1
  },
  {
    stone: 'Onyx',
    month: '',
    count: null
  },
  {
    stone: 'Garnett',
    month: '01-January',
    count: 1
  },
  {
    stone: 'Amethyst',
    month: '02-February',
    count: 1
  },
  {
    stone: 'Aquamarine',
    month: '03-March',
    count: 1
  },
  {
    stone: 'Diamond',
    month: '04-April',
    count: null
  },
  {
    stone: 'Emerald',
    month: '05-May',
    count: 1
  },
  {
    stone: 'Alexandrite',
    month: '06-June',
    count: null
  },
  {
    stone: 'Ruby',
    month: '07-July',
    count: null
  },
  {
    stone: 'Peridot',
    month: '08-August',
    count: null
  },
  {
    stone: 'Sapphire',
    month: '09-September',
    count: null
  },
  {
    stone: 'Tourmaline',
    month: '10-October',
    count: null
  },
  {
    stone: 'Topaz',
    month: '11-November',
    count: null
  },
  {
    stone: 'Zircon',
    month: '12-December',
    count: null
  },
];

@Component({
  selector: 'wishlist-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {
  markdownFile = 'assets/wishlist/clothing.md';
  displayedColumns: string[] = ['stone', 'month', 'count'];
  dataSource = new MatTableDataSource(zEarrings);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

