import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  styleUrls: ['./loan-page.component.scss']
})
export class LoanPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  onCancel(): void {
    this.router.navigate(['/estimate']);
  }

  onChoose(): void {
    this.router.navigate(['/success']);
  }
}
