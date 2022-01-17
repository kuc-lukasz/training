# Routing

## Routing w dawnych czasach

Kiedy nie było Aplikacji SPA (single page applications), wszystkie strony internetowe były po prostu
połączonymi ze sobą plikami html, kiedy to po kliknięciu w link następowało całkowite przeładowanie strony.

Przykład:

1. Otworzyć https://www.w3schools.com/js/default.asp w przeglądarce
2. Otworzyć Network Tab i wyczyścić wszystkie dotychczasowe requesty
3. Kliknąć w menu po lewej stronie, np w "JS Introduction"
4. Zauważyć ile requestów i z jakim contentem jest ładowanych do przeglądarki
5. Zauważyć zmianę url na https://www.w3schools.com/js/js_intro.asp

## Problemy

Takie podejście ma kilka wad, np:

- ładowanie tego samego wiele razy
  - np menu jest takie samo, ale każdy plik musi zdefiniować html i css dla niego
  - utracenie stanu (resetowanie trwających animacji)
- angażowanie backendu czasem tylko po to, by zmienić mały fragment ekranu

## Single Page Applications

Aby wyeliminować powyższe, zaczęto rozwijać aplikacje w JavaScript, które po stronie klienta aktualizują
tylko wybrane fragmenty, np:

- zmien zaznaczenie w menu
- wymień główny content na inny

Niestety, ręczna dynamiczna ingerencja w stan aplikacji nie oznacza, że to, gdzie jesteśmy w aplikacji
(np jaka podstrona) jest automatycznie odwzorowywane w pasku przeglądarki.

## history API

W czasach nowożytnych wprowadzono tzw. History API (https://developer.mozilla.org/en-US/docs/Web/API/History_API), czyli
możliwość powiedzenia przeglądarce, że właśnie zmieniliśmy podstronę, np usuwając stary div i wstawiając nowy

Niestety mamy tutaj pełną odpowiedzialność kiedy i jak zmieniać zawartość paska przegądarki.

Nie chcemy robić tego sami, tym bardziej, że w React piszemy kod deklaratywny (czego oczekuję)
a nie imperatywny (co muszę zrobić, aby osiągnąć oczekiwany efekt).

## React-Router

Z pomocą przychodzi nam biblioteka react-router, która pozwala zgrabnie zarządzać zmianą zawartości paska adresu,
oraz deklarować, jaki komponent ma się wyświetlać na jakiej stronie.

Dokumentacja: https://reactrouter.com/web/guides/quick-start

# Zadania

Zadania polegają na modyfikacji przygotowanej aplikacji do wyświetlania filmów (lista + widok szczegółwy).

W aplikacji są trzy główne podstrony (movies, people, about). People i About to strony-zaślepki.
Podstrona Movies zawiera listę filmów, którą dodatkowo możemy przeszukiwać po tytule, treści i gatunku.

Kliknięcie w wybrany film na liście nawiguje do podstrony szczegółów o filmie, z możliwością powrotu do listy.

![image](https://user-images.githubusercontent.com/3614676/122292424-4633ab00-cef6-11eb-8c5b-9f9aec58dfe1.png)
![image](https://user-images.githubusercontent.com/3614676/122292470-4e8be600-cef6-11eb-82ae-ff6b1d284c81.png)


## Uwaga!

Aplikacja, aby decydować, jaką stronę wyświetlić (about, movies, lub szczegóły filmu np Pulp Fiction),
używa lokalnego stanu zdefiniowanego na szczycie aplikacji: currentPage, selectedMovieId.
Dodatkowo, parametry wyszukiwania też są tam przechowywane: moviesGenre, movieSearchText.

Aplikacja posiada trzy obszary, które są zależne od nawigacji:

- PageMenu - komponent podświetlający aktualną stronę w menu (movies, people, about)
- nagłówek aplikacji - jest różny dla różnych podstron
- treść główna aplikacji - tutaj też pokazujemy komponent w zależności od stanu (currentPage, selectedMovieId)

Aplikacja nie współdziała w żaden sposób z paskiem addresu - przejście do podstrony nie jest nigdzie odnotowane,
po odświeżeniu znowu widzimy pierwszą stroną, a nawigacja w historii nie działa tak jak byśmy się tego spodziewali.

Lista filmów dostępna jest w głównym komponencie (stała `movies`).

## Zadanie 1.

Spróbować ręcznie synchronizować pasek adresu:

- kiedy aplikacja załaduje się z adresem np /people, należy zmienić currentPage na people
- kiedy zmieni się currentPage (kliknięte menu About) aktualizujmy pasek na /about
- kiedy użyjemy natywnego przycisku historii 'wstecz', aktualilzujemy odpowiednio stan aplikacji,
  aby wyświetlił się poprarwny komponent

Można używać np:

- window.location.pathname
- window.history.pushState('id(nieistotny)', 'nowy tytul strony', 'nowy pathname')
- window.addEventListener('popstate', ()=> console.log(location.pathname))

Zadanie ma na celu pokazać, jak trudne i podatne na błędy jest robienie tego ręcznie.

## Zadanie 2.

(zadanie wymaga usunięcie modyfikacji z zadania 1)

Użyć biblioteki react-router-dom do deklaratywnej integracji paska adresu.

Aktualna strona ma być wskazana pod adresem

- `/movies` dla listy filmów
- `/movies/some-movie-id` dla widoku szczegółowego klikniętego filmu
- `/people` dla strony zaślepki 'People'
- `/about` dla strony zaślepki 'About'

Można użyć np:

- `<Route path="/movie"> content tylko na stronie movie</Route>`
- `<Route path="/movie/:id"> content tylko na stronie movie details dla movie o konkretnym ID</Route>`
- `useRouteMatch()`
- `useHistory()`
- `<Link to="/movies"/>`
- `<Link to="/movies/some-movie-id"/>`

Należy zwrócić uwagę, że odkąd informacje o aktualnej stronie zawarte są w pasku adresu, nie potrzebujemy
lokalnego stanu (useState).

Pamiętać o dodaniu `<Router>` na roocie drzewa Reactowego.

## Zadanie 3

Jest to rozszerzenie zadania 2 i polega na przeniesieniu stanu wyszukiwania do adresu jako parametry URL

Dla przykładu, jeśli szukamy frazy 'one' i gatunku 'Fantasy', to pasek adresu wyglądał będzie mniej więcej tak:

- `/movies?search=one&genre=Fantasy`
- `/movies/my-movie?search=one&genre=Fantasy`

Można użyć np:

- `useLocation()`
- `useHistory()`

Po wykonaniu zadania, oczekujemy, że komponent App.js nie będzie miał żadnego wywołania `useState()`,
gdyż cały stan będzie przechowywany w adresie przeglądarki.

Odświeżenie strony nie resetuje stanu aplikacji, a natywna historia pozwala na cofnięciu się do poprzednio odwiedzonych podstron.

## wersje kodu

* branch 5-routing-simple-react-router-example - pokazuje prosty sposób dodania routingu
* branch 5-routing-task-1 - rozwiązanie zadania 1
* branch 5-routing-task-2 - rozwiązanie zadania 2
* branch 5-routing-task-3 - rozwiązanie zadania 3
