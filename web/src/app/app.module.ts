import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { EmpresaService } from './layout/service/empresa.service';
import { EstabelecimentoService } from './layout/service/estabelecimento.service';
import { ColaboradorService } from './layout/service/colaborador.service';
import { VagaService } from './layout/service/vaga.service';
import { ReservaService } from './layout/service/reserva.service';
import { SensorService } from './layout/service/sensor.service';
import { GestorService } from './layout/service/gestor.service';
import {Conf} from './layout/service/conf';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { MenuComponent } from './menu/menu.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent, MenuComponent],
    providers: [AuthGuard, EmpresaService, EstabelecimentoService, ColaboradorService, VagaService, ReservaService, SensorService, Conf,GestorService],
    bootstrap: [AppComponent]
})
export class AppModule {}
