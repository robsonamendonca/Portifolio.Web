import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  apiUrl = "https://portifoloio-api-rob.azurewebsites.net/contacts"
  constructor(private http: HttpClient) { }

  addContact(contact: Contact) {
    return this.http.post(this.apiUrl, contact)
  }
}
