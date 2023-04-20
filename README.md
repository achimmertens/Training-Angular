# Angular Training

<!-- TOC -->
* [Angular Training](#angular-training)
  * [Endwicklungsumgebung](#endwicklungsumgebung)
  * [Angular CLI](#angular-cli)
    * [NPM Config](#npm-config)
    * [Create new Angular Project](#create-new-angular-project)
    * [Conventions and Directives](#conventions-and-directives)
    * [Javascript Doc](#javascript-doc)
    * [Angular Router](#angular-router)
      * [Dynamische Routen](#dynamische-routen)
  * [Build app](#build-app)
  * [Telekom Scale](#telekom-scale)
  * [Angular Forms](#angular-forms)
    * [Aufgaben](#aufgaben)
  * [Zugriff auf APIs](#zugriff-auf-apis)
    * [HTTPClient](#httpclient)
    * [Testing](#testing)
      * [Testrunner JEST oder vitest](#testrunner-jest-oder-vitest)
  * [Trainingsinhalte](#trainingsinhalte)
  * [Meine Notizen:](#meine-notizen)
    * [Debugger setzen im Source code](#debugger-setzen-im-source-code)
    * [Run http-server local](#run-http-server-local)
      * [Pfade in einer SPA](#pfade-in-einer-spa)
  * [Links](#links)
<!-- TOC -->
-----
Montag 

[Gitub Repository](https://github.com/moncapitaine/angular-telekom/tree/telekom-2023-04-17/cookbook
) des Trainers

- AngularJS vs. Angular
- Javascript und HTML
- angular.io

Agenda:   
9:00 - 12:00 Unterricht   
12:00 - 13:00 Pause   
13:00 - 16:30 Unterricht

## Endwicklungsumgebung
- VS Code
- Terminal - zsh/bash/git-bash
- git/github.com (optional)
- node/npm - lts (https://nodejs.org/en/download) (https://nodejs.org/download/release/v18.15.0/node-v18.15.0-win-x86.zip)

## Angular CLI
```shell
ng version
```
Installation der Angular CLI - https://angular.io/cli

### NPM Config
.npmrc file aus Home Folder

Set config for Telekom Office machines 
npm config set proxy http://sia-lb.telekom.de:8080/
npm config set https_proxy http://sia-lb.telekom.de:8080/

npm install -g @angular/cli

ng version => 15.2.6

### Create new Angular Project
```shell
ng new kochbuch
```

1. Frage: Routing: Nein
2. Frage: CSS/SCSS/... einfachste Variante: CSS

=> neuer Ordner "kochbuch"


Open VSCode: Open "kochbuch" Ordner

Open Terminal in VS Code
```shell
npm run start
```

http://localhost:4200/


package.json   
npm = node package manager

### Conventions and Directives
{{ x }} 

*ngFor direktive
*ngIf

@Input()

[details]="[]" vs. personName=""
(click)="handleClick()"

Aufgabe: Loeschen eines Eintrags aus der details Liste

https://angular.io/api/common/NgFor


Komponente in Angular:   
Bausteine einer UI
- Jede Komponente hat einen eigenen Ordner
- Jede Komponente hat normalerweise 4 Dateien

- xyz.component.ts = Hauptdatei
- xyz.component.html = HTML Templatedatei (optional)
- xyz.component.css = styling, css Datei fuer diese Komponente
- xyz.component.spec.ts = Testdatei fuer Unit Tests

- app.module.ts = kommt spaeter...

### Javascript Doc
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

### Angular Router

https://angular.io/guide/router

1. app-routing.module.ts Datei anlegen oder ng generate module app-routing --flat --module=app
2. In app.module.ts das Routing Module nach NGModule importieren
3. <router-outlet></router-outlet> an geeigneter Stelle verwenden, z.B. app.component.html

Page ist eine Komponente, die als Route verwendet wird.

Ziel: **Links so bauen, dass die Routen verwendet werden ohne dass die Seite neu geladen wird.**

#### Dynamische Routen

route mit path='/xyz/:paramName'

der : bewirkt, dass hier irgendwas stehen kann...

pages bauen (was ist ne Page? Eine Komponente, die im Routing verwendet wird)

```shell
ng generate component pages/ImpressPage
ng g c pages/HomePage
```

------------------------------------------
Dienstag

1. Thema Formulare/Forms
2. Backendanbindung REST API


## Build app
```shell
npx http-server ./dist/cookbook --proxy http://localhost:8080?
```

npx = npm without local directory
npx http-server starts the package http-server from the npmjs.com https://www.npmjs.com/package/http-server


## Telekom Scale
https://telekom.github.io/scale/?path=/docs/setup-info-scale-and-angular--page


## Angular Forms

2 Varianten

1. Template Driven Forms

Aufgabe 1) neues Rezept Formular zum Laufen bekommen   
Aufgabe 2) Instructions (Anleitung) als neues Feld zum Recipe und auch über das Formular befüllen


2. Reactive Forms

### Aufgaben
1. Aufgabe: QueryParams subscriben wegen des editmode
2. Aufgabe (Zusatz): id changes subscriben und immer dann wenn sich was ändert das recipe neu laden

https://blog.angular-university.io/angular-form-array/


## Zugriff auf APIs

Weltweite Standard: Browser fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch API ist auch in Angular benutzbar, aber Angular hat was eigenes:  

### HTTPClient

0. Mutter aller async Ansaetze: JQuery, Callbacks von Hand programmiert
1. Ansatz: Promises / async / await => native Unterstützung aller Browser : fetchAPI benutzt Promises
2. Ansatz: rxjs/Observables => Der Ansatz der in Angular sehr stark eingebaut wurde.

zu Ansatz 2)
https://rxjs.dev/api
https://www.learnrxjs.io/


### Testing

- UNIT Tests, mocking
- Integration Tests, kein mocking oder ein bischen mocking
- DI Pattern fuers mocking, z.B. HttpClient Mock: HttpTestingModule
- Karma = Testrunner auf node Basis /Jasmine = describe/it/expect

- Umkonfiguration auf jest = testrunner auf node basis und  testing-library als testing framework

https://dev.to/moncapitaine/steps-to-use-testing-library-in-angular-15-2i1k


Aufgabe:

```shell
npm run test
```

#### Testrunner JEST oder vitest

https://vitest.dev/ oder https://jestjs.io/docs/getting-started

## Trainingsinhalte
Typescript:
Syntax
Typsystem
Klassenkonzept und Annotationen
Module

Angular:
Jumpstart und Bootstrapping
Komponenten
Direktiven und Databinding
Dependency Injection
Module in Angular
Routen
Services
Asynchrone Programmierung mit Promisses/ rxjs
Formulare und Feldvalidierung
Testen mit Karma und Jasmine/ testing-library

Build:
Angular CLI
TS-Compiler
TS-Lint

## Meine Notizen:

### Debugger setzen im Source code
Im code in der IDE 'debugger' in der Zeile eintragen an der der Ablauf im Browser unterbrochen werden soll.

### Run http-server local
Use [http-server](https://www.npmjs.com/package/http-server)   
```shell
npm run build
cd dist
npx http-server . --proxy http://localhost:8080?
````

npx lädt http-server aus dem Internet und startet es ohne es zu installieren.

#### Pfade in einer SPA
url rewrite setzen im Server wie nginx oder htt-server

## Links
- [Angular Docs](https://angular.io/docs)
- [TypeScript Multi condition Array Filter](https://expertcodeblog.wordpress.com/2018/02/26/typescript-multiple-conditions-array-filter/)
- [GitHub Repo des Trainers](https://github.com/moncapitaine/angular-telekom/tree/telekom-2023-04-17)
- [Mozilla Array Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?retiredLocale=de)
- [Mark Down Guide](https://www.markdownguide.org/basic-syntax/#lists-1)
- [NPM HTTP Server](https://www.npmjs.com/package/http-server)
- [Telekom Scale](https://github.com/telekom/scale)
- [Angular Form Array Example](https://www.tektutorialshub.com/angular/angular-formarray-example-in-reactive-forms/)
- [RXJS API Doc](https://rxjs.dev/api)
- [RXJS Learn](https://www.learnrxjs.io)
- [Jasmine Test](https://jasmine.github.io/pages/docs_home.html)
- [Test with Karma and Jasmine](https://shashankvivek-7.medium.com/testing-basic-html-elements-using-karma-jasmine-in-angular-fd5e4ac62d78)
- [How to use Testing Library](https://dev.to/moncapitaine/steps-to-use-testing-library-in-angular-15-2i1k)
- [How To use Testing Library des Trainers](https://dev.to/moncapitaine/steps-to-use-testing-library-in-angular-15-2i1k
  )
