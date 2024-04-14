import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';


// Componentes
const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: '**',redirectTo: '', pathMatch: 'full' },
  { path: 'add', component: AddEditUserComponent },
  { path:'edit/:id', component: AddEditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
