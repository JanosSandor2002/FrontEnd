[🇬🇧 English](README.md) | 🇭🇺 Magyar

# frontend-practicing

Ez a repó a frontend fejlesztés gyakorlására szolgáló terep — itt kísérletezem különböző technológiákkal, könyvtárakkal és megközelítésekkel, hogy elmélyítsem a tudásomat, és egymás mellett tudjam összehasonlítani őket.

## A repó célja

A backend-es párjához hasonlóan ez a repó is szándékosan egy **sandbox**. Minden branch egy külön tanulási irányt képvisel, amely egy adott frontend technológia vagy gyakorlatsor elmélyült megismerésére fókuszál.

## Branch struktúra

Jelenleg **öt aktív branch** van:

### `react-js`

React gyakorlás — komponensek, hookok, state management, és általános React alapok, egy konkrét projekt kontextusától függetlenül.

### `react-native`

React Native gyakorlás — mobil UI építése React-tel, navigáció, natív komponensek, és a webes React fejlesztéshez képesti különbségek felfedezése.

### `html-css-ts`

Tiszta HTML és CSS kombinálása TypeScript-tel — framework nélkül, az erősen típusos DOM manipulációra és a vanilla frontend kód TypeScript-tel való strukturálására fókuszálva.

### `html-css-js`

Tiszta HTML, CSS és JavaScript gyakorlás — framework és TypeScript nélkül. A fókuszban a webes alapok állnak: DOM manipuláció, stílusozás és vanilla JS logika.

### `web-tech-exercise`

Az egyetemi **Web technológiák** tantárgy gyakorlatai — a tanulmányaim során elkészített feladatok és beadandók, amelyek a webfejlesztés alapvető témaköreit ölelik fel.

## Váltás a branchek között

```bash
# Összes branch listázása
git branch -a

# Váltás egy adott branchre
git checkout react-js
git checkout react-native
git checkout html-css-ts
git checkout html-css-js
git checkout web-tech-exercise

# Egy még helyben nem létező branch lehúzása
git fetch origin
git checkout -b react-native origin/react-native
```

Mivel ezek a branchek egymástól független gyakorlási irányokat képviselnek (és nem lesznek egymásba mergelve), érdemes branch-váltás előtt `git status`-szal ellenőrizni, hogy tiszta working directory-ból indulsz-e.

## Megjegyzések

- Minden branch önmagában áll — a kód, a függőségek és a struktúra szándékosan eltér köztük.
- A commit history az egyes brancheken belül inkább fokozatos tanulási lépéseket tükröz, mint egy egységes feature roadmapet.
- A repó várhatóan idővel bővül majd, ahogy új technológiák vagy gyakorlatok kerülnek be új branchekként.

## Licenc

Személyes/oktatási célú projekt — jelenleg nincs újrafelhasználásra licencelve.
