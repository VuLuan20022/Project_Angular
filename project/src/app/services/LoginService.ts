import { Injectable } from '@angular/core';
import {env} from '../infor/information';
import { BaseService } from './BaseService';
import { HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable() // Thêm @Injectable() decorator ở đây
export class LoginService extends BaseService{ 

    login(data: any): Observable<HttpResponse<any>> {
        let url = env.path + '/login';
        try {
            let res = this.execute_post(url, data);
            return res;
        }
        catch (err) {
            console.error('Login error: ',err);
            throw new Error('Error occurred during login.');
        }
    }
}