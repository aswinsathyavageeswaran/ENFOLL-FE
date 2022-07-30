import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMatch } from '@api/models/match.model';
import { MatchService } from '@api/services/match.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  matches: IMatch[] = [];

  constructor(
    private router: Router,
    private matchService: MatchService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.matchService.getMatches().pipe(takeUntil(this.unsubscribe$)).subscribe(matches => {
      this.matches = matches.filter(match => match.matchid === '1');
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCancel(): void {
    this.router.navigate(['/loan']);
  }

  onHome(): void {
    this.router.navigate(['/home']);
  }

}
