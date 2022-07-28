import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-status-form',
  templateUrl: './loan-status-form.component.html',
  styleUrls: ['./loan-status-form.component.scss']
})
export class LoanStatusFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.router.navigate(['/estimate']);
  }

}
