import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { UsersService } from '../../services/users-services.service';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css'],
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UsersService);

  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  public fullName = computed(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';

    return `${this.currentUser()!.first_name} ${!this.currentUser()!.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);
    this.currentUser.set(undefined);
    this.userWasFound.set(true);

    this.userService.getUserById(id).subscribe({
      next: user => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      },
    });
  }
}
