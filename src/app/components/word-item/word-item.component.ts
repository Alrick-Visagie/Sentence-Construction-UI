import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'word-item',
  template: `
            <span class="item" (click)="wordSelected($event)">
              {{word}}
            </span>
  `,
  styleUrls:['./word-item.component.scss']
})

export class WordItemComponent{
  @Input() word: string;
  @Output() selectedWord = new EventEmitter<string>();

  wordSelected(clickEvent) {
    this.selectedWord.emit(clickEvent.target.innerText);
  }
}
