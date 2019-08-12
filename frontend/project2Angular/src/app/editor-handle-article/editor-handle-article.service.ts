import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from "../userarticle/article";

@Injectable({
  providedIn: 'root'
})
export class EditorHandleArticleService {

  private pendingArticleUrl = 'http://localhost:8080/articles/pending';

  constructor(private httpClient:HttpClient) { }
  getPendingArticles(){
    return this.httpClient.get<Article[]>(this.pendingArticleUrl);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};