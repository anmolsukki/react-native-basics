#!/bin/bash

cd android

rm ~/Desktop/APK/gyftr.apk

./gradlew assembleRelease

cp app/build/outputs/apk/release/app-universal-release.apk ~/Desktop/APK/gyftr.apk

./gradlew clean

cd ..
