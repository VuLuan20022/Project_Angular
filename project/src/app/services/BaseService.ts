import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseService {

    constructor(private http: HttpClient) {
    }

    execute_get(url: string): Observable<HttpResponse<any>> {
        return this.http.get(url, { observe: 'response' });
    }

    execute_post(url: string, item: any): Observable<HttpResponse<any>> {
        return this.http.post(url, item, { observe: 'response' });
    }

    execute_delete(url: string, item: any): Observable<HttpResponse<any>> {
        return this.http.delete(url, { body: item, observe: 'response' });
    }

    uploadFile(url: string, file: File): Observable<HttpResponse<any>> {
        let data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "fmsupload");
        return this.http.post<any>(url, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    };

    export(url: string, item: any): Observable<Blob> {
        return this.http.post(url, item, {
            responseType: 'blob'
        });
    };

    timportFile(url: string, file: File): Observable<HttpResponse<any>> {
        let data = new FormData();
        data.append("file", file);
        return this.http.post<any>(url, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }
}
