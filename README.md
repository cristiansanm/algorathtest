# TEST BY CRISTIAN SANCHEZ

## Description

This is a project made with Expo and React Native, it is a simple app that allows you to see an Logo Icon as a first tab and a list of users as a second tab. The users are fetched from `https://jsonplaceholder.typicode.com/users` and displayed in a FlatList. User details are shown on next screen when a user is clicked.

## Installation

1. Clone the repository
2. Run `yarn` or `npm install` to install the dependencies
3. Run `yarn start` or `npm start` to start the project
4. Download the Expo Go app on your phone
5. Scan the QR code with the Expo Go app on your phone or run it on an emulator.

## Technologies

- React Native
- Expo
- React Navigation
- Redux (RTK)

## Screenshots

1. First Screen (tab logo)
   ![First Screen](./screenshots/first_tab.png)

2. Second Screen (tab users)
   ![Second Screen](./screenshots/second_tab.png)

3. User Details Screen
   ![User Details Screen](./screenshots/user_details.png)

## Optmiizations

- CreateSelector: The app is optimized for memoization on the UserList and UserDetail components, only selecting the memoized data. This way, re-renders are minimized and only will reload the data when the user changes.

## Tests

All tests will run with `yarn test`

### Unit Tests

Made with Jest and React Testing Library for these components:

- ScreenContainer -> ![ScreenContainer.test.js](./src/components/ScreenContainer/__test__/ScreenContainer.test.tsx)

- Loader -> ![Loader.test.js](./src/components/Loader/__test__/Loader.test.tsx)

- Spacer -> ![Spacer.test.js](./src/components/Spacer/__test__/Spacer.test.tsx)

- AppText -> ![AppText.test.js](./src/components/AppText/__test__/AppText.test.tsx)

### Integration Tests

Made with Jest and React Testing Library and `msw` for mocking the API calls for these components:

- UserList -> ![UserList.test.js](./src/modules/UserList/container/__test__/UserList.test.tsx)

- UserDetail -> ![UserDetail.test.js](./src/modules/UserDetail/components/__test__/UserDataText.test.tsx)
