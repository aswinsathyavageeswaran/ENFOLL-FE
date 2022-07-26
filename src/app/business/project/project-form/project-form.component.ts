import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  @Output() continue = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.continue.emit();
  }
}
