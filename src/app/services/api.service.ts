import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  flowAccountLogin() {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('scope', 'flowaccount-api')
      .set('client_id', 'bisme-client')
      .set('client_secret', 'ntuuvky9onxelq1bqt80n1kn4xsetrmnbm7ccccqpzvgg2iw')
  
    console.log(body)

    return this.http.post(
      'https://openapi.flowaccount.com/test/token?Content-Type=application/x-www-form-urlencoded',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes)
    let errorMessage = 'เกิดข้อผิดพลาดที่ไม่สามารถระบุสาเหตุได้';
    // if(errorRes.status) {
    //   if(errorRes.status == 401) {
    //     this.authService.logout();
    //   }
    // }
    if (errorRes.error.statusText) {
      errorMessage = errorRes.error.statusText;
    } else if (errorRes.error.responseStatusText) {
      errorMessage = errorRes.error.responseStatusText;
    }
    return throwError(errorMessage);
  }
}
