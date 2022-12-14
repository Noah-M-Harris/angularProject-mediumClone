import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'

// Import from other files
import { RegsiterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";


@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegsiterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users'
        return this.http.post<AuthResponseInterface>(url, data).pipe(map((response: AuthResponseInterface) => response.user))
    }
}