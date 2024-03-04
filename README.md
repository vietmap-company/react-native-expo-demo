## If you run below flow, the app will not run with the Expo app, you must debug with the development build, (press s to switch). The EAS cloud build will run normally. 
```
It will not work in the Expo Go app, so you will need to create a build (e.g. a development build to use instead of Expo Go, or a preview build if you want to test a standalone app on your phone without publishing it to testflight/App Store/Google Play, or production build.)
```
### Add package
```bash
yarn add @vietmap/vietmap-gl-react-native
```
### Run prebuild to generate android & iOS folder
```bash
npx expo prebuild
```
### Add android and iOS folders to gitignore
```bash
echo "/android/" >> .gitignore && echo "/ios/" >> .gitignore
``` 
Expo cloud build will auto-generate the android & ios folders while run eas build.
```text
"Prebuild" just generates the native android and ios projects and applies any config plugins while doing so.

So it's similar to the old "expo eject", but it is actually used for every Expo app.
You can run `npx expo prebuild` yourself, e.g. if you want to build with Android Studio/Xcode while debugging something.

If you add /android/ and /ios/ to your .gitignore (make sure to add them like that to avoid ignoring the directories inside your modile) then they will not be uploaded to the build server during eas build.

On the build server, if the android and ios directories are missing, then the build server will automatically run prebuild to generate them.
So while prebuild is required for every Expo app, the user has the choice of running it themselves and uploading it to the build servers, or letting the build servers generate the native projects.

Also, if you run `npx expo run` then it will first prebuild and then build using `gradlew/xcodebuild`.

See also: https://docs.expo.dev/workflow/continuous-native-generation/
```

## If you need add some configuration on the native module, follow this guide
You can add an object as a child of an ios object in the `app.json` like so:

```json
"infoPlist": {
  "NSLocationWhenInUseUsageDescription": "When in use permissions description"
},
"android":{
    ...
    "permission":["YOUR_PERMISSION_HERE"],
    ...
}
```
## Show the map
Add the below code to `package.json` file
```json
    "@vietmap/vietmap-gl-react-native": "^0.0.6",
    "@react-navigation/native": "5.7.3",
    "@react-navigation/stack": "5.9.0",
    "@types/geojson": "^7946.0.14",
    "react-native-elements": "3.4.3",
    "react-native-gesture-handler": "1.10.3",
    "react-native-safe-area-context": "3.3.2",
    "react-native-select-dropdown": "3.4.0",
    "react-native-vector-icons": "^10.0.3"
```
Run `npm i` or `yarn install` to install the packages

Add [ShowMap.js](./ShowMap.js) and [Navigation.js](./Navigation.js) files to the root project 

Add the below code to `App.js/App.tsx` file
```js
Vietmap.setApiKey(null)
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigation />
    </SafeAreaView>
  );
}
```
`Vietmap.setApiKey(null)` must be called when the app initial.

Run the project

For more documentation, follow guide from [this repository](https://github.com/vietmap-company/vietmap-gl-react-native.git)