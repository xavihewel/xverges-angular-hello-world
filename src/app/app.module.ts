import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { UserAbstractService } from './user-form/user-abstract.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user-form/user.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: UserAbstractService, useClass: UserService}],
  bootstrap: [UserFormComponent]
})
export class AppModule { }
