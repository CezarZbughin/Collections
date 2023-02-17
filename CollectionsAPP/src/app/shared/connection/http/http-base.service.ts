import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

export abstract class HttpBaseService {

  constructor(protected http: HttpClient) { }


  protected abstract getBasePath(): string;

  public get<T>(entityPath: string): Observable<T> {
    const path = `${this.getBasePath()}${entityPath}`;
    return this.http.get<T>(path);
  }

  public post<T, U>(entityPath: string, body: U): Observable<T> {
    const path = `${this.getBasePath()}${entityPath}`;
    return this.http.post<T>(path, body, httpOptions);
  }

  public put<T, U>(entityPath: string, body: U): Observable<T> {
    const path = `${this.getBasePath()}${entityPath}`;
    return this.http.put<T>(path, body);
  }

  public delete<T>(entityPath: string): Observable<T> {
    const path = `${this.getBasePath()}${entityPath}`;
    return this.http.delete<T>(path);
  }
}
