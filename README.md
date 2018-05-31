# React Native Quito Lambda

[![Build Status](https://travis-ci.org/stackbuilders/react-native-quito-lambda.svg?branch=master)](https://travis-ci.org/stackbuilders/react-native-quito-lambda)

A simple [React Native][react-native] GitHub client, that illustrates how to
use React Native in combination with [Redux][redux].

## Requirements

- Install [NVM][nvm].

## Getting Started

Start cloning the repo:

```
git clone https://github.com/stackbuilders/react-native-quito-lambda.git
cd react-native-quito-lambda
```

Install the required NodeJS version:

```
nvm install
```

Install the project dependencies:

```
npm instal
```

## Usage

There are two different ways of running the application:

### Android

Install [Expo][expo-client] Android client from Google Play. After that start
the application using the following command:

```
npm run start
```

Scan the displayed QR Code with your device, and you are ready to go!

### iOS

Install [Xcode][xcode] along with an iOS simulator, once the simulator is in
place, start the application using the following command:

```
npm run start:ios
```

Open the simulator, and you are ready to go!

## Testing

In order to run all test located at [__test__](__test__) folder run the
following command:

```
npm test
```

[expo-client]: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en
[nvm]: https://github.com/creationix/nvm
[react-native]: https://facebook.github.io/react-native
[redux]: https://redux.js.org
[xcode]: https://developer.apple.com/xcode
