# 🌆 City Explorer App

A simple React Native app built with **Expo** that displays a list of cities and their details using a **GraphQL API**.

## ⚡ Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the mock GraphQL server

   ```bash
   npx json-graphql-server db.js -p 4000 --host 0.0.0.0
   ```

3. Start the app

   ```bash
   npx expo start
   ```

## 🧪 Testing

All tests live inside \_\_tests\_\_. You can run the test suite with:

```bash
npm run test
```

It will find and run all files containing a _-test_ suffix.

## 🧪 Linting

The project contains an **ESLint** config provided by Expo with their own defaults, allowing further customization of configuration and rules.

You can run the built-in script with:

```bash
npm run lint
```

## 🚀 Tech Stack

- **Expo** — Bootstraps and runs the React Native application.
- **TypeScript** — Provides static typing for safer, more maintainable code.
- **Expo Router / React Navigation** — Manages screen routing and navigation.
- **Zustand** - Handles state management with a simple API with great Typescript support. It also supports persistence through the _persist_ middleware.
- **Apollo Client** — Consumes the GraphQL API.
- **json-graphql-server** — Serves the mock GraphQL API locally.
- **Reanimated** — Enables performant animations and gesture-based interactions on the native thread.
- **React Native Paper** - Implements Material Design components for consistent UI elements.
- **React Native Maps** - Allows the display of a map in the app (using Apple Maps on iOS and Google Maps on Android).
- **React Native Testing Library** — Facilitates writing UI / components tests that focus on user interactions.
- **Jest** - As the preferred testing framework.

---

## 🧱 Project Structure

The project follows the principles of **Hexagonal Architecture** with a feature-oriented or domain-driven structure for clarity and scalability:

- **app/** - App screens and modals with file-based routing. Expo treats all files inside _app_ as a separate screen / route.
- **components/** — Reusable UI components.
- **core/** - Foundational layer with reusable patterns, factories, helpers and utilities, types and interfaces, all of which are domain or feature-agnostic.
- **domain/** - Entities and core business objects, business logic and rules, use cases and orchestrators, adapters / mappers, stores for domain-specific state.
- **data/** — DTOs, GraphQL queries, mutations, API client setup.
- **shared/** — Small helpers and pure utility functions used across domains which are not foundational to the app.
- **\_\_tests\_\_** — Unit and integration tests using Jest and React Native Testing Library.
- **\_\_mocks\_\_** — Mocks for testing.

## 📱 Features

The app is structured around **features**, each representing a specific domain or user goal. Features are self-contained and depend on **core** and **domain**, but are decoupled from each other for scalability and maintainability.

### 1. Cities

- **Home Screen**
  - Displays a list of cities fetched from the GraphQL API.
  - Cities are persisted in the AsyncStorage once fetched.
- **City Detail Screen**
  - Shows detailed information about a selected city:
    - Name
    - Language spoken
    - Local currency
    - Restaurants
    - Monuments
  - Shows a map with pins of restaurants and monuments.

### 2. Filter and Search (Optional / Bonus)

- Supports basic filtering and search.
- Filter and search work together: cities are first filtered based on the selected filters. Then the search is applied on the filtered subset.

### 3. Favorites (Optional / Bonus)

- Allows users to mark cities as favorites.
- Displays a separate list of favorite cities in a separate tab.
- Uses **Zustand** to persist the cities marked as favorite.
- Uses **Reanimated** to implement the heart icon animation when marking a city as favorite.

### 4. Core-Driven Features

- Reusable **fetching hook (`useFetch`)** with a common interface for API calls so that implementations can be swapped easily.
- Shared **store factory** for filters to generate **Zustand** stores for any feature with an enforced state structure.
- Centralized **types** to enforce type safety across features.
- Generic **factory methods** for creating search functions that can work with any type or entity and for creating atomic domain functions that update any given store that follows a particular contract.

---

### 5. Feature Design Principles

- **Encapsulation:** Each domain is self-contained.
- **Reusability:** Common logic and utilities are extracted into either **core** or **shared** to avoid duplication.
- **UI-agnostic business logic:** Domain models and factories are used across features to keep rules consistent.
- **Testable:** Features can be tested independently.

## ⚠️ Known Issues or Limitations

### Map

---

The map will only show when using **Expo Go** as the API keys have not been set :D

### Filters

---

Even though **createFilterStore** creates a generic filter store for any domain looking to implement filtering functionality, there are some limitations in terms of reusability:

- The **Filters** type assumes that all filters are string-based. There could be boolean, numeric, or range filters in the future.
- The **FiltersView** component is still coupled with **CityFilters**. The idea would be to have a filtering mechanism flexible enough to handle different data types.

### Design System

---

- I would explore a more robust and scalable solution. It would be a good opportunity to try out the new library **Unistyles**, developed by _Callstack_ and built in C++ for blazing-fast performance.

### Localization

---

- I would move hard-coded strings to a JSON and possibly support localization with a couple of different languages.

### Hard-coded strings and colors

---

### Testing

- E2E tests are missing. The project is only covered by unit and integration tests. Some components have been tested with the React Native Testing Library. Nonetheless, some components (and screens) remain untested.
