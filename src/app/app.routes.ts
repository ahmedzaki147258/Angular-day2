import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'users-list', loadComponent: () => import('./users-list/users-list.component').then(m => m.UsersListComponent) },
  { path: 'todo-app', loadComponent: () => import('./todo-app/todo-app.component').then(m => m.TodoAppComponent) },
  { path: '', redirectTo: '/users-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
