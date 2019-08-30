import {
  Injectable
} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {
  Observable
} from 'rxjs/Observable';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTION'
      }
    });
    return next.handle(request);
  }
}
