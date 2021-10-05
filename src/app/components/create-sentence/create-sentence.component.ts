import {Component, OnInit} from "@angular/core";
import {Word} from "../../models/word";
import {WordService} from "../../services/word-service";
import {SentenceService} from "../../services/sentence-service";
import {catchError} from "rxjs/operators";

@Component({
  templateUrl: './create-sentence.component.html'
})

export class  CreateSentenceComponent implements OnInit{

  words: Word = null;
  sentence: string = '';

  constructor(private wordService: WordService,
              private sentenceService: SentenceService) {
  }

  ngOnInit() {
    this.wordService.getWords().subscribe(
      x => this.words = x
    )
  }

  constructSentence(word: string) {
    this.sentence += word;
  }

  SaveSentence() {
    if(this.sentence.length > 0)
      this.sentenceService.saveSentence(this.sentence)
        .subscribe(x => this.sentence = '');
  }
}
