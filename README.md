# Opis zadania

Musisz napisać aplikację, która pozwoli przeglądać zdjęcia poszczególnych ras psów.
Wszystkie potrzebne masz wyeksportowane z folderu "data".

W pliku index.html masz stworzoną bazową strukturę, możesz ją dowolnie modyfikować.

W pliku styles/index.css masz plik cssowy, który możesz dowolnie edytować, jeżeli potrzebujesz możesz użyć dowolnego preprocesora do cssa(SASS, Less, Stylus etc.).
Stylując projekt pamiętaj, aby wszystko tworzyć na podstawie komponentów. Jeżeli będziesz chciał użyć ikon to pobierz je z icomoon jako plik symbol-defs.svg.
Font możesz pobrać z google fonts.

Tworząc projekt bazuj na dostarczonym designie, zrealizuj komponenty i postaraj się na ich podstawie zbudować cały projekt.
Pracuj na tym designie(chyba, że masz pomysł na inny):
https://www.figma.com/community/file/874766871676128442

Pisząc javascript pamiętaj, aby Twój kod był reużywalny, miał wyseparowane fragmenty odpowiadające za poszczególne funkcjonalności.

# Zadania

## I Wyszukiwanie ras

1. Za pomocą Javascriptu zaimportuj zmienną breedsList z pliku data/data.js.
2. Zmienna przetrzymuje dane w formacie JSON - sparsuj je do javascriptowego obiektu.
3. Na podstawie listy ras(zagnieżdżone podrasy pomiń) wyrenderuj formularz z selectem, który w opcjach będzie miał do wyboru rasy.
4. Po wyborze rasy w selecie i zatwierdzeniu formularza powinna wykonać się funkcjonalność z zadania II.

### Wersja rozszerzona

5. Zamiast selecta wykonaj input z wyszukiwarką, który po wpisaniu min 3 znaków filtruje rasy z listy i wyświetla je.
6. Po kliknięciu w wybraną rasę z listy wartość inputa się aktualizuje a formularz automatycznie wysyła.

### Wersja rozszerzona 2.0

8. Dodaj do formularza dodatkowy input o typie numerycznym, który pozwala na wybranie ilości zdjęć które mają sie wyrenderować(min 1, max 5).

## II Renderowanie zdjęć psów

1. Za pomocą JSa zaimportuj zmienną breedImages.
2. Zmienna przechowuje dane w formacie JSON(klucz to nazwa razy, a wartość to tablica jej zdjęć) - sparsuj je do javascriptowego obiektu.
3. Stwórz funkcjonalność, która na podstawie dostarczonej rasy wyszuka w obiekcie odpowiednią listę zdjęć.
4. Wyrenderuj zdjęcia jako html w tagu main(strukturę możesz dostosować).
5. Jeżeli użytkownik wybierze inną rasę to pamiętaj, aby usunąć html po starych zdjęciach.

### Wersja rozszerzona

6. Dodaj możliwość ograniczenia ilości wyświetlanych zdjęć.

### Wersja rozszerzona 2.0

7. Dodaj do strony heading, który będzie wyświetlał aktualnie wybraną rasę - jeżeli rasa nie jest wybrana to niech wyświetla jakieś powitanie.

## Zadanie III

1. Każdy obrazek ze zdjęciem psa ma przy sobie przycisk z możliwością dodania go do ulubionych
2. Ulubione zdjęcia powinny się wyświetlać w dodatkowej kolumnie i aktualizować po dodaniu kolejnego.
3. Po kliknięciu przycisku "dodaj do ulubionych" po raz drugi - zdjęcie uswa się z ulubionych.

### Wersja rozszerzona

4. Ulubione zdjęcia są zapisane w formacie JSON jako string do localStorage, a przy ponownym odpaleniu aplikacji pobierane i automatycznie renderowane.

### Wersja rozszerzona 2.0

5. Dodaj przycisk do kasowania wszystkich zdjęć z listy ulubionych

### Wersja rozszerzona 3.0

6. Zdjęcia ulubione nie wyświetlają się w dodatkowej kolumnie, a na oddzielnej podstronie do której można przejść z nawigacji(którą trzeba dodać).
7. W nawigacji powinna być możliwość wybierania między stroną z aktualną rasą, a stroną z ulubionymi zdjęciami.

## Zadanie IV

1. Na start aplikacji pobierz wszystkie rasy psów z endpointu:
   https://dog.ceo/api/breeds/list/all
2. Po pobraniu dodaj wszystkie rasy do selecta.
3. Po wybraniu rasy w selecie zrób request o wszystkie zdjęcia danej rasy:
   https://dog.ceo/api/breed/{nazwa-rasy}/images
4. Po pobraniu wszystkich zdjęć - wyświetl je

### Zadanie rozszerzone

5. Wyświetl loader po wejściu na stronę i ukryj go kiedy załadujesz wszystkie rasy

### Zadanie rozszerzone 2.0

6. Dodaj loader do listy zdjęć danej rasy, który wyświetli się zanim zdjęcia zostaną pobrane.

# Powodzenia!
