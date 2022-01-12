# Formularze

## Niekontrolowane inputy

https://reactjs.org/docs/forms.html

W przypadku niekontrolowanych inputów mamy formularz z inputami i przy wysłaniu możemy coś z nimi zrobić. Może to być pożądana sytuacja, natomiast tracimy sporo kontroli nad zachowaniem inputów (np. możemy robić walidację w locie.

## Kontrolowane inputy

Gdy je kontrolujemy (tzw. ich wartość jest zapisana w stanie i z niego wynika) możemy na bieżąco reagować na zmiany w wartościach.

Ponadto, możemy sterować wartością inputów według naszych potrzeb np. uzupełnić formularz o dane ściągnięte z api.

Jak to się robi? - Musimy trzymać stan wartości inputa oraz w przypadku zmian jego wartości aktualizować stan.

# Zadania

## Niekontrolowany input

Wyświetl wartość inputa przy wysłaniu formularza z jednym inputem (imię)

1. Dodaj `form`
2. Dodaj label z `input`em
3. Dodaj `button` typu `submit`
4. Ustaw `onSubmit` formularza

> pamiętaj o event.preventDefault() by powstrzymać przeładowanie strony

> wartość inputa kryje się pod event.target\[nazwa-inputa\].value np. `event.target.username.value`

## Kontrolowany input

Dodaj input na nazwisko

1. Dodaj label oraz input
1. Dodaj stan input
1. Ustaw wartość inputa na stan
1. Ustaw `onChange` inputa by zmieniał wartość stanu

Przykład w `FormularzNiekontrolowany.jsx`

## Kontrolowany formularz

Wysyłanie formularza z dwoma inputami

1. Owiń inputy w form
2. Dodaj przycisk do formularza
3. Przekaż przyciskowi funkcję onSubmit
4. Zablokuj domyślne zachowanie eventu (event.preventDefault())
5. Wyświetl w konsoli wartości obu inputów

## Select

Dodaj select ulubione zwierzę

1. Zdefiniuj wartości `selecta`
1. Zdefiniuj stan `selecta`
1. Dodaj `select` do formularza
   1. Dodaj element select
   2. Zmapuj opcje na option
1. Przekaż wartość selecta na wartość stanu
1. Dodaj `onChange`

## Walidacja

Wyświetl error gdy imię lub nazwisko jest puste

# Formik

https://formik.org/docs/tutorial#the-basics

Dodaj formularz z newsletterem przy użyciu formik

https://formik.org/docs/tutorial#a-simple-newsletter-signup-form
