import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleIntegrationComponent } from './APISimple/simple-integration/simple-integration.component';
import { CrudOperationComponent } from './APICRUD/crud-operation/crud-operation.component';
import { JwtTokenAuthComponent } from './Login/jwt-token-auth/jwt-token-auth.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpleIntegrationComponent,
    CrudOperationComponent,
    JwtTokenAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
