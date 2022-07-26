import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.router.navigate(['/buy']);
  }

  onChoose(): void {
    this.router.navigate(['/estimate']);
  }
}
