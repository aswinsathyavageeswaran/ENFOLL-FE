import { KeyValue } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMatch } from '@api/models/match.model';
import { MatchService } from '@api/services/match.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  groups: KeyValue<string, IMatch[]>[] = [];

  constructor(
    private router: Router,
    private matchService: MatchService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.matchService.getMatches().pipe(takeUntil(this.unsubscribe$)).subscribe(matches => {
      this.groups = matches.reduce((acc, match) => {
        const group = acc.find(i => i.key === match.matchid) || { key: match.matchid, value: [] };
        return [...acc.filter(i => i.key !== match.matchid), { ...group, value: [...group.value, match] }];
      }, [] as KeyValue<string, IMatch[]>[]);
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCancel(): void {
    this.router.navigate(['/buy']);
  }
}
