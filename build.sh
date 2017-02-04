#!/bin/bash
electron-packager . "Gmail4Mac" --platform=darwin --arch=x64 --electron-version=0.35.0 --icon=./icon.icns --overwrite --prune=true --out=./compiled
