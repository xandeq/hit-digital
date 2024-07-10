import { HttpClientModule, provideHttpClient, withFetch } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IntroducaoComponent } from "./pages/introducao/introducao.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { AppComponent } from "./app.component";
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: []
})
export class AppModule { }
