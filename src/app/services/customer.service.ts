import {Injectable,signal} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { PagedResult } from "../models/paged-result";

@Injectable({providedIn:'root'})

export class CustomerService 
{
    private apiUrl="http://localhost:5120/api/Customer";
    customers = signal<Customer[]>([]);
    constructor(private http:HttpClient){}
    getPagedCustomers
    (
        customercode: string,
        customername: string,
        mobileno: string,
        city: string,
        PageNumber: number,
        PageSize:number
    ): Observable<PagedResult<Customer>>
    {
        let params =  new HttpParams()
        .set('customercode', customercode || '')
        .set('customername', customername || '')
        .set('mobileno', mobileno || '')
        .set('city',city  || '')
        .set('PageNumber', PageNumber)
        .set('PageSize', PageSize);
        return this.http.get<PagedResult<Customer>>
        (`${this.apiUrl}/GetAllPaged`, {params});
    }
    GetAll():Observable<Customer[]>
    {
        return this.http.get<Customer[]>(`${this.apiUrl}/GetAll`);
    }
    GetById(Id:number):Observable<Customer>
    {
        return this.http.get<Customer>(`${this.apiUrl}/GetById/${Id}`);
    }
    create(request:Customer):Observable<number>
    {
        return this.http.post<number>(`${this.apiUrl}/Create`,request);
    }
    Update(Id:number, request:Customer):Observable<boolean>
    {
        return this.http.put<boolean>(`${this.apiUrl}/Update/${Id}`,request);
    }
    delete(Id:number):Observable<boolean>
    {
        return this.http.delete<boolean>(`${this.apiUrl}/delete/${Id}`);
    }
}
