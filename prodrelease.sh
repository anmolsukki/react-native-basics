#!/bin/bash

cd android

rm ~/Desktop/APK/gyftr.aab

./gradlew bundleRelease

mv app/build/outputs/bundle/release/app-release.aab ~/Desktop/APK/gyftr.aab

./gradlew clean

cd ..
