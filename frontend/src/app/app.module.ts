/*===/ Modulos /===*/
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*===/ Componentes /===*/
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DemoComponent } from './components/demo/demo.component';
import { StudiesComponent } from './components/studies/studies.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { ModeEditComponent } from './pages/mode-edit/mode-edit.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';

/*===/ Modals /===*/
import { ModalComponent } from './modals/modal/modal.component';
import { ModalEstudiosComponent } from './modals/modal-estudios/modal-estudios.component';
import { ModalDemoComponent } from './modals/modal-demo/modal-demo.component';
import { ModalHabilidadesComponent } from './modals/modal-habilidades/modal-habilidades.component';
import { ModalExperienciaComponent } from './modals/modal-experiencia/modal-experiencia.component';

/*===/ Proveedores /===*/
import { interceptorProvider } from './interceptors/prod-interceptor.service';

@NgModule({
  declarations: [
    //= Componente principal =//
    AppComponent,

    //= Componentes de la pagina "portfolio" =//
    FooterComponent,
    ContactComponent,
    SkillsComponent,
    DemoComponent,
    StudiesComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ExperienceComponent,

    //= Componentes de pagina =//
    PortfolioComponent,
    ModeEditComponent,
    LoginComponent,

    //= Componentes modals =//
    ModalComponent,
    ModalEstudiosComponent,
    ModalDemoComponent,
    ModalHabilidadesComponent,
    ModalExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
