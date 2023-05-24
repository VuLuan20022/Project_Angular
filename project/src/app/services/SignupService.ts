import { Injectable } from '@angular/core';
import {env} from '../infor/information';
import { BaseService } from './BaseService';
import { HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable() // Thêm @Injectable() decorator ở đây
export class SignupService extends BaseService{ 
    register(data: any  ): Observable<HttpResponse<any>>{
        let url = env.path + '/register';
        try {
            let res = this.execute_post(url, data);
            return res;
        }
        catch (err) {
            console.error('Register error: ',err);
            throw new Error('Error occurred during register.');
        }
    }
}