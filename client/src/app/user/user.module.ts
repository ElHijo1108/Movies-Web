import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { UserVotationComponent } from './user-votation/user-votation.component';



@NgModule({
  declarations: [UserCreatorComponent, UserVotationComponent],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports:[
    UserCreatorComponent,
    UserVotationComponent
  ]
})
export class UserModule { }
