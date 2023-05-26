import { Injectable } from '@angular/core';
import {env} from '../infor/information';
import { BaseService } from './BaseService';
import { HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable() // Thêm @Injectable() decorator ở đây
export class StudentService extends BaseService{ 
    getList(): Observable<HttpResponse<any>>{
        let url = env.path + '/student';
        try {
            let res = this.execute_get(url);
            return res;
        }
        catch (err) {
            console.error('View students list error: ',err);
            throw new Error('Error occurred during view students list.');
        }
    }

    getStudent(studentId: number): Observable<HttpResponse<any>>{
        let url = env.path + '/student/get?studentId='+studentId;
        try {
            let res = this.execute_get(url);
            return res;
        }
        catch (err) {
            console.error('Get student error: ',err);
            throw new Error('Error occurred during get student');
        }
    }

    addStudent(data: any): Observable<HttpResponse<any>>{
        let url = env.path + '/student/create';
        try {
            let res = this.execute_post(url, data);
            return res;
        }
        catch (err) {
            console.error('Add student error: ',err);
            throw new Error('Error occurred during add student.');
        }
    }

    editStudent(data: any): Observable<HttpResponse<any>>{
        let url = env.path + '/student/update';
        try {
            let res = this.execute_post(url, data);
            return res;
        }
        catch (err) {
            console.error('Edit student error: ',err);
            throw new Error('Error occurred during edit student.');
        }
    }

    removeStudent(studentId: number): Observable<HttpResponse<any>>{
        let url = env.path + '/student/delete?studentId='+studentId;
        try {
            let res = this.execute_get(url);
            return res;
        }
        catch (err) {
            console.error('Remove student error: ',err);
            throw new Error('Error occurred during remove student');
        }
    }
}