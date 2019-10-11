import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    // Fake database
    const medias = [
      {
        "tconst": "tt0000001",
        "titleType": "short",
        "primaryTitle": "Carmencita",
        "originalTitle": "Carmencita",
        "isAdult": "0",
        "startYear": "1894",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Documentary,Short"
      },
      {
        "tconst": "tt0000002",
        "titleType": "short",
        "primaryTitle": "Le clown et ses chiens",
        "originalTitle": "Le clown et ses chiens",
        "isAdult": "0",
        "startYear": "1892",
        "endYear": "\\N",
        "runtimeMinutes": "5",
        "genres": "Animation,Short"
      },
      {
        "tconst": "tt0000003",
        "titleType": "short",
        "primaryTitle": "Pauvre Pierrot",
        "originalTitle": "Pauvre Pierrot",
        "isAdult": "0",
        "startYear": "1892",
        "endYear": "\\N",
        "runtimeMinutes": "4",
        "genres": "Animation,Comedy,Romance"
      },
      {
        "tconst": "tt0000004",
        "titleType": "short",
        "primaryTitle": "Un bon bock",
        "originalTitle": "Un bon bock",
        "isAdult": "0",
        "startYear": "1892",
        "endYear": "\\N",
        "runtimeMinutes": "\\N",
        "genres": "Animation,Short"
      },
      {
        "tconst": "tt0000005",
        "titleType": "short",
        "primaryTitle": "Blacksmith Scene",
        "originalTitle": "Blacksmith Scene",
        "isAdult": "0",
        "startYear": "1893",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Comedy,Short"
      },
      {
        "tconst": "tt0000006",
        "titleType": "short",
        "primaryTitle": "Chinese Opium Den",
        "originalTitle": "Chinese Opium Den",
        "isAdult": "0",
        "startYear": "1894",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Short"
      },
      {
        "tconst": "tt0000007",
        "titleType": "short",
        "primaryTitle": "Corbett and Courtney Before the Kinetograph",
        "originalTitle": "Corbett and Courtney Before the Kinetograph",
        "isAdult": "0",
        "startYear": "1894",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Short,Sport"
      },
      {
        "tconst": "tt0000008",
        "titleType": "short",
        "primaryTitle": "Edison Kinetoscopic Record of a Sneeze",
        "originalTitle": "Edison Kinetoscopic Record of a Sneeze",
        "isAdult": "0",
        "startYear": "1894",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Documentary,Short"
      },
      {
        "tconst": "tt0000009",
        "titleType": "movie",
        "primaryTitle": "Miss Jerry",
        "originalTitle": "Miss Jerry",
        "isAdult": "0",
        "startYear": "1894",
        "endYear": "\\N",
        "runtimeMinutes": "45",
        "genres": "Romance"
      },
      {
        "tconst": "tt0000010",
        "titleType": "short",
        "primaryTitle": "Exiting the Factory",
        "originalTitle": "La sortie de l'usine Lumière à Lyon",
        "isAdult": "0",
        "startYear": "1895",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Documentary,Short"
      },
      {
        "tconst": "tt0000011",
        "titleType": "short",
        "primaryTitle": "Akrobatisches Potpourri",
        "originalTitle": "Akrobatisches Potpourri",
        "isAdult": "0",
        "startYear": "1895",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Documentary,Short"
      },
      {
        "tconst": "tt0000012",
        "titleType": "short",
        "primaryTitle": "The Arrival of a Train",
        "originalTitle": "L'arrivée d'un train à La Ciotat",
        "isAdult": "0",
        "startYear": "1896",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Action,Documentary,Short"
      },
      {
        "tconst": "tt0000013",
        "titleType": "short",
        "primaryTitle": "The Photographical Congress Arrives in Lyon",
        "originalTitle": "Neuville-sur-Saône: Débarquement du congrès des photographes à Lyon",
        "isAdult": "0",
        "startYear": "1895",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Documentary,Short"
      },
      {
        "tconst": "tt0000014",
        "titleType": "short",
        "primaryTitle": "The Sprinkler Sprinkled",
        "originalTitle": "L'arroseur arrosé",
        "isAdult": "0",
        "startYear": "1895",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Comedy,Short"
      },
      {
        "tconst": "tt0000015",
        "titleType": "short",
        "primaryTitle": "Autour d'une cabine",
        "originalTitle": "Autour d'une cabine",
        "isAdult": "0",
        "startYear": "1894",
        "endYear": "\\N",
        "runtimeMinutes": "2",
        "genres": "Animation,Short"
      },
      {
        "tconst": "tt0000016",
        "titleType": "short",
        "primaryTitle": "Barque sortant du port",
        "originalTitle": "Barque sortant du port",
        "isAdult": "0",
        "startYear": "1895",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Documentary,Short"
      },
      {
        "tconst": "tt0000017",
        "titleType": "short",
        "primaryTitle": "Italienischer Bauerntanz",
        "originalTitle": "Italienischer Bauerntanz",
        "isAdult": "0",
        "startYear": "1895",
        "endYear": "\\N",
        "runtimeMinutes": "1",
        "genres": "Documentary,Short"
      }
    ];
    return {medias};
  }
}
