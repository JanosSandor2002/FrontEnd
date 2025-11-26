# HTML-CSS-TS

## Új projekt mappa létrehozása

node -v

npm install

mkdir my-ts-project

cd my-ts-project

## NPM inicializálása

npm init -y

## TypeScript telepítése fejlesztői függőségként

npm install typescript --save-dev

## TypeScript konfigurációs fájl létrehozása

npx tsc --init

## (Ezután szerkeszd a tsconfig.json-t, és add hozzá a HTML/CSS/TS fájlokat)

# Node.js

## még nincs kész

# React.js

## Node kezelés

node -v

npm install

## Struktúra létrehozása

### create-react-app

npm create-react-app@latest my-app

npm start

npm run build

### vite

npm create vite@latest my-app

npm run dev

npm run build

## Mappa megnyitása

mkdir my-ts-project

cd my-ts-project

## (Ezután szerkeszd a tsconfig.json-t, és add hozzá a HTML/CSS/TS fájlokat)

# React Native

## Create

npx create-expo-app my-expo-app

npx create-expo-app 03 --template blank

npx create-expo-app 03 --template blank-typescript

## TypeScript verzió

npx create-expo-app my-expo-app --template blank-typescript

## Run

cd my-expo-app
npx expo start

## android: a

## ios: i

## web: npm run web

## 4. environment variables

## .env fájl a gyökérben

## EXPO_PUBLIC_API_URL=https://api.example.com

## EXPO_PUBLIC_ENV=production

## Build

eas login
eas build:configure
eas build -p android --profile production
eas build -p ios --profile production

## lokális build

## eas build --local

## Extra commands

npm run lint
npm run reset-project
npm run android
npm run ios
npm run web
