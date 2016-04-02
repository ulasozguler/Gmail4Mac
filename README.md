# Gmail4Mac
This is a really simple wrapper of Gmail web interface, made for Mac.

I just wanted a free email client with support of all Gmail features. Like [Sparrow](https://en.wikipedia.org/wiki/Sparrow_(email_client)). Since its development process is killed by Google and they didn't published the source code, this is what I came up with.

I don't plan to actively develop this project but I can review pull requests.

![Screenshot](http://i.imgur.com/T5DT8bc.png)

## Installation
Just [download](https://github.com/ulasozguler/Gmail4Mac/releases) the latest release and run.

I also activated a lab feature. You can enable it from Gmail > Settings > Labs. Search for "Preview Pane". This is optional, makes the UI more like Sparrow (3 columns structure).

## Compiling
You will need [Electron](http://electron.atom.io/) and [electron-packager](https://www.npmjs.com/package/electron-packager).

Run `build.sh` from source code location. 

It has only one (long) line of command:

```
electron-packager . "Gmail4Mac" --platform=darwin --arch=x64 --version=0.35.0 \
--icon=./icon.icns --overwrite --asar=true --prune=true --out=./compiled
```

Some parameters may be required to change. (Like architecture and Electron version)

I did not try it with any other Electron version, so there may be problems if you don't use v0.35.

## Features
- Pretty much everything on the web interface (including shortcuts)
- Notifications of unread emails on dock icon
- Ads on the right are removed

## Known Issues
- Page reloads after exiting preview of attachments
- Notification number only works for current label you selected
- Gives "This version of Chrome is no longer supported." warning


## Next?
- Multiple account support
- Desktop notifications


## License
Licensed under [Creative Commons Attribution NonCommercial (CC-BY-NC)](https://tldrlegal.com/license/creative-commons-attribution-noncommercial-(cc-nc))