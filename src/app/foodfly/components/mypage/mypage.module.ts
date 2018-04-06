// Common Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Mypage Route Module
import { MypageroutesModule } from './mypage-routes.module';

// Mypage Component
import { AccountComponent } from './account/account.component';
import { MyorderComponent } from './myorder/myorder.component';
import { QnaComponent } from './qna/qna.component';
import { MypageManagementComponent } from './mypage.management.component';

@NgModule({
  declarations: [
    MypageManagementComponent,
    AccountComponent,
    QnaComponent,
    MyorderComponent
  ],
  imports: [
    CommonModule, MypageroutesModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule
  ],
  exports: [
    MypageManagementComponent,
    AccountComponent,
    QnaComponent,
    MyorderComponent
  ]
})
export class MypageModule { }
