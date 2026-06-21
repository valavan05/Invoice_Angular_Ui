import { Injectable, signal } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from "../models/Users";
import { PagedResult } from "../models/paged-result";

@Injectable({ providedIn: 'root' })

export class UsersService {

    private apiUrl = "http://localhost:5120/api/Users";

    users = signal<Users[]>([]);

    constructor(private http: HttpClient) { }

    getPagedUsers(
    userName: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    city: string,
    dateOfBirth: string | null,
    isActive: boolean | null,
    pageNumber: number,
    pageSize: number
): Observable<PagedResult<Users>>
{
    let params = new HttpParams()
        .set('userName', userName || '')
        .set('firstName', firstName || '')
        .set('lastName', lastName || '')
        .set('phoneNumber', phoneNumber || '')
        .set('city', city || '')
        .set('dateOfBirth', dateOfBirth || '')
        .set('isActive', isActive == null ? '' : isActive.toString())
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString());

    return this.http.get<PagedResult<Users>>(
        `${this.apiUrl}/GetAllPaged`,
        { params }
    );
}
    GetAll(): Observable<Users[]>
    {
        return this.http.get<Users[]>(`${this.apiUrl}/GetAll`);
    }

    GetById(Id: number): Observable<Users>
    {
        return this.http.get<Users>(`${this.apiUrl}/GetById/${Id}`);
    }

    create(request: Users): Observable<number>
    {
        return this.http.post<number>(`${this.apiUrl}/Create`, request);
    }

    Update(Id: number, request: Users): Observable<boolean>
    {
        return this.http.put<boolean>(`${this.apiUrl}/Update/${Id}`, request);
    }

    delete(Id: number): Observable<boolean>
    {
        return this.http.delete<boolean>(`${this.apiUrl}/Delete/${Id}`);
    }
}