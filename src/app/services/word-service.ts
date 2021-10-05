import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Word} from "../models/word";

@Injectable({
  providedIn: 'root',
})
export class WordService {
  readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.apiUrl}/word`;
  }

  getWords(): Observable<Word> {
    return this.httpClient.get<Word>(`${this.url}/get-words`);
  }
}
