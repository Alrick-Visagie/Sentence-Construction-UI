import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Sentence} from "../models/sentence";

@Injectable({
  providedIn: 'root',
})
export class SentenceService {
  readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.apiUrl}/sentence`;
  }

  getSentences(): Observable<Sentence[]> {
    return this.httpClient.get<Sentence[]>(`${this.url}/get-sentences`);
  }

  saveSentence(sentence: string): Observable<void> {
    const body = {
      sentence: sentence
    };

    return this.httpClient.post<void>(`${this.url}/save-sentence`, body);
  }

  removeSentence(sentenceId: string): Observable<void>{
    const params = {
      sentenceId: sentenceId
    };

    return this.httpClient.delete<void>(`${this.url}/delete-sentence`, {params});
  }
}
