# FCM Mobile Technical Challenge

## Overview

FCM Digital is launching a new travel guide app to complement our business itinerary product. The app will provide travellers with rich city guides including itineraries, local currency, monuments, dining options, and more. The backend is powered by a GraphQL API, and the mobile prototype is built with React Native using Expo.

Your task is to build a first prototype of the app. **You have two weeks to complete your submission.** You may focus on the level that best reflects your current experience, but feel free to tackle additional enhancements if time permits.

*It would be great if you can also provide a compiled version of the app (APK/IPA or Expo link) for direct testing, if possible.*

---

## Common Requirements for All Levels

- **Project Setup:** Use Expo to bootstrap a new React Native application.

- **GraphQL API:** Consume data from a GraphQL API. To help you get started, we provide a db.js file that can be served using the [json-graphql-server](https://www.npmjs.com/package/json-graphql-server) library.

- **Basic Functionality:**

- **Home Screen:** Displays a list of cities.

- **City Detail Screen:** Provides additional information (e.g., city name, local currency, monuments, restaurants).

- **Design & Usability:** Keep a clean and straightforward UI. Follow the KISS principle—don’t overcomplicate the interface.

- **Animations (Bonus):** If you’re familiar with animations in React Native, we’d love to see something visually appealing.

- **Delivery:** Submit your source code (preferably hosted on GitHub) with clear instructions on how to run the project. Additionally, if possible, include a compiled version or an Expo link so we can test the app directly.

- **Documentation:** Provide a README that explains in a detailed way, all your decisions made to achieve the challenge.

---

## Level-Specific Challenges

### Junior Developer

Focus: **Fundamental React Native and reusable components.**

**Deliverables:**

- **New Expo App:** Generate a new Expo project with a basic structure.

- **Reusable Components:** Build at least 2–3 reusable React components (e.g., CityCard, Button, ListItem).

- **Basic Navigation:** Implement navigation between the Home screen and City Detail screen using React Navigation/Expo Router.

- **Code Quality:** Write clear and maintainable code with inline comments where needed.

---

### Intermediate Developer

Focus: **Improved architecture, adherence to SOLID principles, and organised file structure.**

**Deliverables:**

- **All Junior Deliverables** plus:

- **Folder & File Organisation:** Structure your project with clearly separated directories (e.g., components, screens, services, hooks).

- **State Management:** Introduce a simple state management solution (Context API or Zustand) to handle data fetching and state across screens.

- **Error & Loading States:** Implement basic error handling and loading indicators during data fetches.

- **Basic Testing:** Write a few unit tests (e.g., for a reusable component or a simple hook) to demonstrate testing practices.

- **Linter, TypeScript Configuration & Dependencies:** Configure a linter (such as ESLint) and provide a basic TypeScript configuration (even if minimal) along with proper dependency management to ensure code quality and maintainability.

**Optional Enhancements:**

- **Animations (Optional):** Enhance user experience by adding basic animations if you’re comfortable with them.

---

### Senior Developer

Focus: **Advanced architecture, strong TypeScript and SOLID principles, design system, and optional enhancements.**

**Required Deliverables:**

- **TypeScript:** Use TypeScript throughout your project with strict typing.

- **Clean Architecture & SOLID:** Organise your codebase to separate concerns (e.g., presentation, business logic, data) and demonstrate SOLID design principles.

- **Design System:** Build a basic design system (e.g., theming, typography, and a reusable component library) that can be scaled.

- **Advanced Testing:** Implement comprehensive tests including:

- Unit tests for business logic and components.

- Integration tests for data fetching and state management.

- If possible, basic end-to-end (E2E) tests (using Detox / Maestro / Appium).

- **Network Handling:** Implement offline support and graceful error handling for network issues.

**Optional Enhancements:**

- **Animations (Optional):** Show off your expertise by integrating advanced animations to enhance the user experience.

- **CI/CD Pipeline (Optional):** Configure GitHub Actions (or another CI tool) to run your tests automatically on push or pull requests.

---

### Native Knowledge in iOS/Android

We’re also interested in candidates with strong native iOS/Android expertise. If you have a background in native development, you can showcase your skills through an additional native integration challenge.

**Focus:** Demonstrate your native development skills by integrating a native library with React Native, following SOLID principles.

**Requirements:**

- **Native Library Integration:** Integrate a native iOS/Android library by creating a React Native or Expo bridge. This could include:

- Creating a custom native module using Swift/Objective-C for iOS and Kotlin/Java for Android.

- Exposing the native functionality to your React Native code.

- **SOLID Principles:** Ensure that your native integration adheres to SOLID principles, promoting a modular and maintainable design.

- **Showcase Use Case:** Use the integrated native module to add a feature or functionality that enhances the app. For example, this could be advanced animations, native sensor data, or platform-specific optimisations.

- **Documentation:** Provide a brief explanation of your native integration, detailing the challenges addressed and how it enhances the overall app experience.

**Final Notes**

- **Time Management:** You have two weeks. Prioritise a working prototype that meets your chosen level’s requirements. If you run out of time, clearly document what remains and how you would approach the remaining work.

- **Innovation:** While the requirements are set, you’re welcome to add additional features or improvements that showcase your skills. Just make sure the core functionalities are complete.

- **Evaluation Criteria:** We will evaluate based on functionality, code quality, adherence to design principles, documentation, and overall architectural decisions.

Good luck, and we look forward to seeing your solution!
