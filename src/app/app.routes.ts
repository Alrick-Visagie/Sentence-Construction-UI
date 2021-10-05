import { Routes } from "@angular/router";
import {SentenceComponent} from "./components/sentence/sentence.component";
import {CreateSentenceComponent} from "./components/create-sentence/create-sentence.component";

export const routes: Routes = [
  {
    path: '',
    component: SentenceComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-sentence',
    component: CreateSentenceComponent
  }
];
