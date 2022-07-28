import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { MatDialog } from "@angular/material/dialog";
import { SignInComponent } from "@common/sign-in/sign-in.component";
import { Observable, Subject, takeUntil } from "rxjs";
import firebase from 'firebase/compat/app';

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  user?: firebase.User | null;

  constructor(
    private dialog: MatDialog,
    private auth: AngularFireAuth,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.auth.user.pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
      this.user = user
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSignIn(): void {
    this.dialog.open(SignInComponent, { width: '30em' })
  }

  onSignOut(): void {
    this.auth.signOut()
  }
}
