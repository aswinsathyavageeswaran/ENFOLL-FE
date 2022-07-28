import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject, takeUntil } from 'rxjs';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  userInfo?: firebase.UserInfo;

  constructor(
    private auth: AngularFireAuth,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.auth.user.pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
      this.userInfo = user as firebase.UserInfo;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
