#!/bin/bash
electron-packager . "Gmail4Mac" --platform=darwin --arch=x64 --version=0.35.0 --icon=./icon.icns --overwrite --asar=true --prune=true --out=./compiled