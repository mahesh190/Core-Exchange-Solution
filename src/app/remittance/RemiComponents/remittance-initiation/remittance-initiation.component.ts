import { AfterViewInit, Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RetailCustomerService } from 'src/app/Services/retail-customer.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RemittanceServService } from '../../RemiServices/remittance-serv.service';
import { InitiationFormComponent } from '../initiation-form/initiation-form.component';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { NavBarComponent } from 'src/app/theme/layout/admin/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';

export interface UserData {
  id: string;
  firstname: string;
  lastname: string;
  Email: string;
}

@Component({
  selector: 'app-remittance-initiation',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,MatIconModule
  ],
  templateUrl: './remittance-initiation.component.html',
  styleUrl: './remittance-initiation.component.scss'
})
export class RemittanceInitiationComponent implements AfterViewInit, OnInit {
  remittanceMethods: string[] = ['Bank Transfer', 'Cash Pickup', 'Mobile Money', 'Online Transfer', 'Cheque'];

  dataSource!: MatTableDataSource<any>;

  menuClass = false;
  collapseStyle = 'none';
  windowWidth = window.innerWidth;
  @ViewChild('sidebar') sidebar?: NavBarComponent;

  private notify: NavBarComponent;
  displayedColumns: string[] = [
    'SenderID',
    'ReceiverID',
    'Amount',
    'Currency',
    'ExchangeRate',
    'RemittanceMethod',
    'Fees',
    'TotalAmount',
    'PaymentMethod',
    'documentsText',
    'action'
  ];

  resdata: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _remittanceService: RemittanceServService
  ) {

    this.notify = new NavBarComponent();


  }
  ngOnInit(): void {
    this.getRemittanceInitiationData();
  }
  
  getRemittanceInitiationData() {
    this._remittanceService.getRemittanceInitiation().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    });
  }

  ngAfterViewInit() {}


  


  openEditForm(data: any) {
    console.log("update data="+data)
    const dialogRef = this._dialog.open(InitiationFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getRemittanceInitiationData();
        }
      },
    });
  }


  openAddEditEmpForm() {
    this.collapseStyle = 'none' ;

    const dialogRef = this._dialog.open(InitiationFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getRemittanceInitiationData();
        }
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteIncidentDetails(id: number) {
    this._remittanceService.deleteRemittanceInitiation(id).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Data Deleted!!',

          icon: 'success'
        });
        this.getRemittanceInitiationData();
      },
      error: console.log
    });
  }
}
