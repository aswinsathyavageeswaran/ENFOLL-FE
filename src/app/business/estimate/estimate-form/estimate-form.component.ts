import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate-form',
  templateUrl: './estimate-form.component.html',
  styleUrls: ['./estimate-form.component.scss']
})
export class EstimateFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.router.navigate(['/match']);
  }

  onContinue(): void {
    this.router.navigate(['/loan']);
  }
}
