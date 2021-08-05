import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { PageMainComponent } from './components/page/page-main/page-main.component';
import { PageServiceComponent } from './components/page/page-service/page-service.component';
import { IntroComponent } from './components/shared/intro/intro.component';
import { DeteriorationComponent } from './components/shared/deterioration/deterioration.component';
import { ContentHeaderComponent } from './components/shared/content-header/content-header.component';
import { ImageCardComponent } from './components/shared/image-card/image-card.component';
import { DetailCardComponent } from './components/shared/detail-card/detail-card.component';
import { PageServiceTransformerComponent } from './components/page/page-service/page-service-transformer/page-service-transformer.component';
import { PageServiceMainComponent } from './components/page/page-service/page-service-main/page-service-main.component';
import { DetailCardBComponent } from './components/shared/detail-card-b/detail-card-b.component';
import { PackageCardComponent } from './components/shared/package-card/package-card.component';
import { DetailCardCComponent } from './components/shared/detail-card-c/detail-card-c.component';
import { PageServiceTransformerQuotationComponent } from './components/page/page-service/page-service-transformer/page-service-transformer-quotation/page-service-transformer-quotation.component';
import { PageServiceTransformerMainComponent } from './components/page/page-service/page-service-transformer/page-service-transformer-main/page-service-transformer-main.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageMainComponent,
    PageServiceComponent,
    IntroComponent,
    DeteriorationComponent,
    ContentHeaderComponent,
    ImageCardComponent,
    DetailCardComponent,
    PageServiceTransformerComponent,
    PageServiceMainComponent,
    DetailCardBComponent,
    PackageCardComponent,
    DetailCardCComponent,
    PageServiceTransformerQuotationComponent,
    PageServiceTransformerMainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
