import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { MatDialog } from "@angular/material/dialog";
import { SignInComponent } from "@common/sign-in/sign-in.component";
import { filter, Subject, takeUntil } from "rxjs";
import firebase from 'firebase/compat/app';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  user?: firebase.User | null;
  username = 'Sign In';
  hasUsername = false;

  constructor(
    private dialog: MatDialog,
    private auth: AngularFireAuth,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.auth.user.pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
      this.user = user
      this.ref.detectChanges();
    });
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const username = this.route.root.firstChild?.snapshot.data['username'];
        this.hasUsername = !!username;
        this.username = username || 'Sign In';
        this.ref.detectChanges();
      }
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
