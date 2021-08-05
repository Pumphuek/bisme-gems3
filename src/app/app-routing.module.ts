import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './components/page/page.component';
import { PageMainComponent } from './components/page/page-main/page-main.component';
import { PageServiceComponent } from './components/page/page-service/page-service.component';
import { PageServiceMainComponent } from './components/page/page-service/page-service-main/page-service-main.component';
import { PageServiceTransformerComponent } from './components/page/page-service/page-service-transformer/page-service-transformer.component';
import { PageServiceTransformerMainComponent } from './components/page/page-service/page-service-transformer/page-service-transformer-main/page-service-transformer-main.component';
import { PageServiceTransformerQuotationComponent } from './components/page/page-service/page-service-transformer/page-service-transformer-quotation/page-service-transformer-quotation.component';

const routes: Routes = [
  {path: '', component: PageComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: PageMainComponent},
    {path: 'service', component: PageServiceComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: PageServiceMainComponent},
      {path: 'transformer', component: PageServiceTransformerComponent, children: [
        {path: '', component: PageServiceTransformerMainComponent, pathMatch: 'full'},
        {path: 'quotation', component: PageServiceTransformerQuotationComponent}
      ]}
    ]},
    //{path: 'about',},
    //{path: 'article',},
    //{path: 'contact',},
    //{path: 'join',},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
