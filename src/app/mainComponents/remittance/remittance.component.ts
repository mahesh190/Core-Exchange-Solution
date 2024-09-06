import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RetailCustomerService } from 'src/app/Services/retail-customer.service';

export interface UserData {
  id: string;
  firstname: string;
  lastname: string;
  Email: string;
}

@Component({
  selector: 'app-remittance',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './remittance.component.html',
  styleUrl: './remittance.component.scss'
})
export class RemittanceComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'DateOfBirth', 'Email'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _retailService: RetailCustomerService) {}
  ngOnInit(): void {
    this.getEMPKYCList();
  }
  getEMPKYCList() {
    this._retailService.getRetailCustomerData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    });
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
