## Node.js przegląd możliwości

## Spis treści
1. [Co to w ogóle jest ten Node.js?](#introduction)
2. [Co to znaczy, że Node.js jest wieloplatformowy?](#multiplatform)
3. [Podstawy pracy z Node.js - uruchomienie środowiska i pierwszy kod!](#start)
4. [Import i export w Node.js](#importexport)
    1. [Zadanie 1](#taskone)
5. [Praca z plikami i systemem](#filesystem)
    1. [Zadanie 2](#tasktwo)
    2. [Zadanie 3](#taskthree)
    3. [Zadanie 4](#taskfour)
6. [Praca z backendem](#backend)
    1. [Zadanie 5](#taskfive)
    2. [Zadanie 5](#tasksix)

# <a name="introduction"></a> Co to w ogóle jest ten Node.js?

> Node.js jest środowiskiem uruchomieniowym, inaczej mówiąc posiada w sobie **interpreter** kodu JavaScript oraz **api**, które pozwala na uruchomienie dobrze znanego nam kodu JSa bez uwzględnienia przeglądarki.

Jak wiecie kod JavaScript jest kodem **interpretowanym**, czyli potrzebuje jakiegoś interpretera, którym zazwyczaj jest silnik przeglądarki internetowej. Node.js, który do swojej pracy wymaga kodu JavaScript również korzysta z takiego interpretera w postaci silnika V8, tego samego, którego używa Chrome, z tym że Node.js, ma to w "pakiecie" i nie potrzebuje odpalać przeglądarki.

Dzięki temu, jesteśmy w stanie reużywać nasz JavaScriptowy kod w wielu środowiskach i pisać aplikacje desktopowe, skrypty, backend aplikacji webowych i wiele więcej.

Node.js korzysta z tych samych zasad, którymi kieruje się kod JavaScriptowy. Czyli dalej mamy do czynienia z systemem **jednowątkowym** i **event loopem**, czyli nasz kod jest asynchroniczny i nie blokuje innych wywoływań w aplikacji. Ma to też swoje minusy, ponieważ w Node.js prawie wszystkie czynności są asynchroniczne, co może skutkować wpadnięciem w [**callback hell**](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/), dlatego przy Node.js bardzo przydają się Promisy czy Async/Await.

Node.js posiada również odpowiedniki swoich asynchronicznych funkcji w postaci synchronicznej, które blokują wątek i oczekują na wykonanie założonych instrukcji, jednakże nie jest to polecany sposób pracy z Node.js, chyba że, jesteśmy pewni co do naszego kodu.

Wyobraźmy sobie przykładową sytuację, w której użytkownik wprowadza dane do formularza, które następnie są zapisywane w pliku. Po wysłaniu formularza, użytkownik jest przekierowany na stronę z podziękowaniem za wypełnienie formularza (strona jest serwowana przez backend w Node.js). Jeśli wykorzystamy synchroniczny odpowiednik asynchronicznej metody, użytkownik nie zostanie przekierowany na stronę z podziękowaniem, póki dane się nie zapiszą. Jeśli naszą intencją jest wyświetlenie użytkownikowi loadera i wymuszenie na nim oczekiwania na zakończenie tej operacji, synchroniczna wersja metody zapisu pliku będzie tutaj jak najbardziej na miejscu. Jeśli jednak nie jest to dla nas istotne i nie chcemy, aby użytkownik nie miał możliwości dalej swobodnie poruszać się po serwisie, wybierzemy wersję asynchroniczną.

# <a name="multiplatform"></a>Co to znaczy, że Node.js jest wieloplatformowy?

Node.js ma dużą przewagę nad konkurencją swoją wieloplatformowością. Oznacza to, że jeden kod napisany w Node.js możemy uruchomić zarówno na backendzie aplikacji webowej, jak i na Windowsie, Linuxie czy Macu. Nie musimy zmieniać środowiska czy języka programowania. Na wszystkie platformy możemy napisać ten sam (lub podobny) kod i korzystać z dobrodziejstw Node.js.

# <a name="start"></a>Podstawy pracy z Node.js - uruchomienie środowiska i pierwszy kod!

Dla naszej wygody, w pliku `package.json` mamy już informację o paczce `nodemon`, która pozwoli nam śledzić zmiany na plikach, które będziemy edytować. Musimy w terminalu uruchomić komendę `npm install` a następnie możemy używać komendy `npx nodemon`.

## No to zaczynamy!

Zacznijmy od pracy na pliku `index.js` znajdującym się w folderze `system_info`, użyjmy komendy nodemon - `npx nodemon system_info/index.js`

Zacznijmy od czegoś innego niż `hello world` :smile: W pliku `index.js` w folderze `system_info` znajduje się moduł `os`, który pozwoli nam dostać się do informacji, na przykład, o naszym procesorze.

Skorzystajmy z tych danych i wyprintujmy w konsoli krótki opis naszego procesora:

```javascript
const system = require("os");

const coresCount = system.cpus().length;

const pcInfo = `I\m using ${system.platform()} with ${system.arch()} architecture, and my processor has ${coresCount} cores!`;
```

Brawo, pierwszy kod z wykorzystaniem Node.js gotowy!

---

Kolejny etap!

Musimy teraz przełączyć nodemona na kolejny plik, który będziemy edytować. Zrobimy to komendą `npx nodemon set_timeout/index.js`

Node.js nie ma dostępu do metod natywnych przeglądarki. Taką metodą jest np. `setTimeout` czy `setInterval` oraz obiekt `window`. Jednakże, Node.js posiada swój własny odpowiednik np. `setTimeout`. Użyj `setTimeout` i wyświetl w konsoli dzisiejszą datę po sekundzie.

```javascript
setTimeout(() => {
  // kod do printowania daty
}, 1000);
```

Spróbuj użyć obiekt window w Node.js `console.log(window)`

```javascript
console.log(window)
^
ReferenceError: window  is  not  defined
```

# <a name="importexport"></a>Import i export w Node.js

Node.js nie ma jeszcze wsparcia domyślnego dla importowania modułów z wykorzystaniem systemów znanych z przeglądarki (ES6/UMD), korzysta z systemu `CommonJS`. Import i export znany z przeglądarek jest już wspierany w wersji 16 Node.js, ale nie jest to jeszcze wersja LTS (long-term support).

Do eksportu funkcji wykorzystujemy `module.exports`

```javascript
function addTwo(num) {
  return num + 2;
}

module.exports = addTwo;
```

Następnie w pliku wywoływanym, importujemy funkcję `addTwo` za pomocą `require()`

```javascript
const addTwo = require("./module");

console.log(addTwo(2));
```

## <a name="taskone"></a>1. **ZADANIE:**

Użyjcie funkcji `addTen` w pliku `index.js`, pamiętajcie, że funkcja `addTwo` dalej ma być dostepna w pliku `index.js`

# <a name="filesystem"></a>Praca z plikami i systemem

Node.js ma dostęp do naszego systemu i plików, możemy z jego pomocą zapisywać, odczytywać, zmieniać i usuwać pliki, do których mamy uprawnienia. Dzięki temu możemy używać Node.js do tworzenia aplikacji backendowych i serwerowych, które będą operować na systemach plików.

Zacznijmy od prostego przeczytania pliku. Odpalmy komendę `npx nodemon files_operations/readFile.js`

## Czytanie plików

W pliku `readFile.js` przygotujmy kod do czytania plików z aktualnego folderu:

```javascript
const fs = require("fs");

const path = require("path");

fs.readFile(path.join(__dirname, "data.json"), (error, data) => {
  if (error) {
    console.warn(error);
  }

  console.log(data);
});
```

Prześledźmy teraz ten kod:

Potrzebujemy dwóch modułów Node.js, pierwszy to moduł `fs` czyli File System, używamy go do pracy na plikach oraz modułu `path` do pracy na relatywnych ścieżkach dostępowych.

Używamy asynchronicznej funkcji `fs.readFile`, która przyjmuje jako argument relatywną ścieżkę do pliku `data.json`, następnie w callbacku tej funkcji, dostępny mamy `error` jeśli coś pójdzie nie tak, oraz argument odpowiedzialny za pobrane dane.

Jeśli wyprintujemy w terminalu zawartość pliku `data.json` to ujrzymy następujący ciąg znaków.

`<Buffer 7b 0a 20 20 22 73 75 62 6a 65 63 74 22 3a 20 22 50 72 7a 65 67 6c c4 85 64 20 6d 6f 6c 69 77 6f c5 9b 63 69 20 4e 6f 64 65 2e 6a 73 22 2c 0a 20 20 22 ... 21 more bytes>`

Jest to obiekt Buffer, jak czytamy w dokumentacji Node.js

> If no encoding is specified, then the raw buffer is returned.

Dlatego musimy dobrać odpowiednie enkodowanie pliku, aby został on prawidłowo **zinterpretowany**, jeśli dodamy jako drugi argument odpowiednie enkodowanie, wtedy otrzymujemy prawidłowy plik:

```javascript
fs.readFile(path.join(__dirname, "data.json"), "utf8", (error, data) => {
  if (error) {
    console.warn(error);
  }

  console.log(data);
});
```

## <a name="tasktwo"></a>2. **ZADANIE:**

Użyjcie `readFile`, następnie na bazie `data.json` stwórzcie nową tablicę zawierającą same imiona i nazwiska wszystkich studentów.

## <a name="taskthree"></a>3. **ZADANIE:**

Użyjcie `readFile`, następnie na bazie `data.json` wybierzcie dowolnego studenta i wyliczcie jego średnią ocen, która znajduje się w kluczu `grades`

## Zapisywanie plików

Przejdźmy teraz do zapisywania plików na naszym komputerze. Do tego wykorzytamy funkcję `fs.writeFile`

Przykład wykorzystania znajdziecie w pliku `writeFile.js`, przed uruchomieniem `npx nodemon` warto spojrzeć na strukturę plików i kod zajdujący się w aktualnie przeglądanym pliku:

```javascript
const fs = require("fs");

const path = require("path");

const content = "Mój pierwszy zapisany plik!";

fs.writeFile(path.resolve(__dirname, "save.txt"), content, (error) => {
  if (error) {
    console.warn(error);
  }
});
```

Zaraz po uruchomieniu pliku w tym samym folderze pojawi się nowy plik o nazwie save.txt zawierający nasz zapisany tekst.

## <a name="taskfour"></a>4. **ZADANIE:**

Użyjcie `readFile`, aby pobrać dane z pliku `data.json` następnie zapiszcie do nowego pliku imiona i nazwiska wszystkich studentów

# <a name="backend"></a>Praca z backendem aplikacji, tworzymy swoje własne API!

Node.js to nie tylko operacje na plikach czy dostęp do informacji o systemie, świetnie nadaje się również do stworzenia backendu dowolnej aplikacji.

Do postawienia backendu wykorzystamy `Express.js` jest to framework dla Node.js, który pozwala budować backend naszej aplikacji :smile:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Używamy modułu `express`, tworzymy obiekt `app` następnie nasłuchujemy na odpowiedni port... i tyle wystarczy, aby uruchomić podstawowy backend.

Dzięki expressowi możemy również serwować zawartość plików do przeglądarki, w tym celu wykorzystamy plik `example-2.js` oraz dodatkowy plik index.html, który należy stworzyć w tym samym katalogu.

```javascript
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Zawartość pliku została zaserwowana w przeglądarce!

## <a name="taskfive"></a>5. **ZADANIE:**

1. Przygotuj nowy folder z plikiem index.html, w tagu `body` wrzuć dowolny tekst
2. W pliku `app.js` zaserwuj nowo stworzoną zawartość pliku na ścieżce `/my-own-link`
3. W katalogu głównym, tam gdzie jest `index.html` serwowany jako strona główna, dodaj menu z odnośnikiem do nowo powstałej strony.
4. Sprawdź czy wszystko działa!

Dodatkowo, wszystkie zmiany których dokonujemy po stronie serwera, są niezależne od frontu naszej aplikacji, póki ich nie odbierzemy w odpowiedzi zwrotnej lub nie wykonamy jakieś czynności na backendzie.

```javascript
let someVar = 10;

app.get("/", (req, res) => {
  res.send({ message: someVar });
  someVar++;
});
```

Posiadanie pliku index.html nie jest wymagane, bo Node.js nie serwuje jako tako pliku, a jedynie jego zawartość, która potem jest parsowana do odpowiedniej formy kontentu. I tak możemy wysłać dokument html'a który jest zwykłym stringiem stworzonym na bazie backticków. Wszystkie funkcje JavaScripta działają i są w takiej formie jak najbardziej prawidłowe!

```javascript
const express = require("express");

const app = express();
const port = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div>
      Jestem stroną główną!
    </div>

    <script>
      console.log('Cześć!')
    </script>
  </body>
</html>
`;

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Kazde zapytanie do backendu zwraca swój kod statusu, który możemy dowolnie modyfikować w zależności od upodobań (no i oczywiście w klasyfikowanym zakresie). W tym przykładzie, uważamy, że wszystko zostało wykonane prawidłowo i użytkownik może zobaczyć kod statusu 200

```javascript
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Jeśli zmienimy kod błędy na zakres 400 - 500 będziemy mogli wyłapać błąd w bloku `.catch` fetcha na front-endzie i powiadomić użytkownika o takiej sytuacji. Te kody błędu przydadzą się, gdy np. użytkownik wyśle zapytanie do backendu z prośbą o zwrócenie pliku lub danych, które nie istnieją.

Serwowaliśmy już zawartość plików, a nasz front-end był nierozłączną częścią back-endu. Przejdźmy teraz do tworzenia własnego API! Czyli kodu, który kontroluje wszystkie punkty dostępowe aplikacji lub serwera. Front będzie bytem **pytającym** backend o pewne dane, na ustalonych przez backend ścieżkach i metodach.

W folderze `backend-api` znajduje się plik `index.js` jego zawartość będzie naszym podstawowym front-endem:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div>
      Używamy API!

      <button>Randomowy student</button>
      <p id="student"></p>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

Dodatkowo podlinkowany jest plik `script.js`, w którym będziemy zajmować się logiką działania aplikacji.

```javascript
const API_URL = "http://localhost:3000/api/";

const getData = () => {};

const getSingleStudent = (id) => {};

const addStudent = (e) => {
  e.preventDefault();
};

getData();
```

> Zmienna `API_URL` może się różnić w zależności od środowiska, jest to tylko uproszczenie, żeby nie powtarzać ciągle wpisywania tego samego adresu do `fetch`

Nasz backend wygląda następująco:

```javascript
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/get-students", (req, res) => {});

app.get("/api/get-students/:id", (req, res) => {
  const { id } = req.params;
});
```

Tutaj pojawiają się też nowe rzeczy, `cors` oraz `express.json()`. CORS to inaczej Cross-Origin Resource Sharing, czyli zezwolenie na pobieranie do przeglądarki treści, które nie pochodzą z tego samego origina. Każda przeglądarka jako podstawowe zabezpieczenie używa SOP czyli Same-Origin Policy, które blokuje wszelkie requesty do API, serwerów i innych, które nie należą do tego samego Origina. Takim originem jest np. `https://www.google.com`, SOP w idealnych warunkach gwarantuje, że dwie aplikacje, o różnych originach, nie mogą ściągać czy odpytywać siebie nawzajem. Do działania naszego back-endu musimy dorzucić paczkę `cors`, która zezwala na kontakt, między back-endem a front-endem.

`express.json()` natomiast, to parser, który parsuje przychodzące requesty w formacie `json`.

## <a name="tasksix"></a>6. **ZADANIE:**

1. Korzystając z wcześniej poznanych metod Node.js, odczytaj plik `data.json` i wyślij go w momencie, w którym client odpyta ścieżkę `http://localhost:3000/api/get-students`
2. Po stronie clienta zbuduj takie zapytanie do API, które odpyta o pojedynczego studenta przekazując w parametrach `id` studenta. Po stronie API odeślij konkretnego użytkownika z pliku `data.json`
3. Po stronie clienta zbuduj prosty formularz z dwoma inputami na imię i nazwisko, na `submit` formularza przygotuj obiekt, który będzie wyglądał następująco:

```javascript
const student = {
  name: "Imię",
  surname: "Nazwisko",
};
```

4. Przygotuj po stronie backendu taki endpoint API, do którego wyślesz powyższy obiekt studenta. Odczytaj obiekt studenta wewnątrz zapytania (może być console.log)
5. Korzystając z wcześniej poznanych metod Node.js, odczytaj plik `data.json`, dodaj do niego nowego usera nadając mu jakieś randomowe `id`, następnie zapisz plik i odeślij do clienta obiekt, który będzie zawierał nowo sworzone `id` studenta.
