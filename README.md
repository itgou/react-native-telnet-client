
# react-native-telnet-client

## Getting started

`$ npm install react-native-telnet-client --save`

### Mostly automatic installation

`$ react-native link react-native-telnet-client`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-telnet-client` and add `RNTelnetClient.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNTelnetClient.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTelnetClientPackage;` to the imports at the top of the file
  - Add `new RNTelnetClientPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-telnet-client'
  	project(':react-native-telnet-client').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-telnet-client/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-telnet-client')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNTelnetClient.sln` in `node_modules/react-native-telnet-client/windows/RNTelnetClient.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Telnet.Client.RNTelnetClient;` to the usings at the top of the file
  - Add `new RNTelnetClientPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNTelnetClient from 'react-native-telnet-client';

// TODO: What to do with the module?
RNTelnetClient;
```
  