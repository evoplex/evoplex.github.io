---
id: download-mac
title: Evoplex for macOS
---

## DMG Packages <img src="/img/apple-logo.svg" width="25" style="vertical-align: sub;">

Evoplex is compatible with macOS 10.10+ and its installation is very straightforward:

1. Download the DMG package ([links below](#latest-stable-release)).
2. Once it is downloaded, open the file.
3. If you agree with the license terms, a window similar to the one below will appear.
4. Just drag and drop the Evoplex logo into the `Applications` folder.

<center>
<img src="/img/evoplex-dmg.png" width="40%">
</center>

> Need help? [click here](/help)

### Latest stable release

| Version             | Release Date  | Compiler  | Qt    |     |
| ------------------- |:-------------:| ---------:| -----:| ---:|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0 - x86_64 DMG](https://github.com/evoplex/evoplex/releases/download/0.1.0/evoplex-0.1.0.x86_64.dmg) | Aug 06, 2018    | AppleClang9.0 | 5.11.1| [Release Notes](/blog/2018/08/06/evoplex-0.1.0-released) |




## Build from Source Code <img src="/img/apple-logo.svg" width="25" style="vertical-align: sub;">

If you want to debug an issue or want to understand how Evoplex works, you'll want to get the source, build and run it. However, if you just want to use Evoplex, you don't need to compile it from source, you can install it directly from the [binary packages](#latest-stable-release).

### 1. Getting the source code
Assuming you have [Git](https://git-scm.com/downloads) installed on your computer, you can fork [our repository on GitHub](https://github.com/evoplex/evoplex) and clone it from `https://github.com/<your-username>/evoplex`, or you can clone it directly from our repository as follows:
```sh
git clone https://github.com/evoplex/evoplex.git evoplex/evoplex
```
It will download the repository to `evoplex/evoplex` relative to your current directory.

Alternatively, you can download the source code from the [.zip archive](https://github.com/evoplex/evoplex/archive/master.zip).

### 2. Installing dependencies
* CMake >= 3.1.0
* Qt >= 5.8
* QtCharts >= 5.8

You can download and install the latest open source version of Qt from [installer](https://www.qt.io/download). The required packages are `macOS` and `Qt Charts`. Suppose you install it at `/Users/you/Qt/`, you should add Qt to your `PATH` variable as follows (assuming you installed Qt 5.11.1):
``` bash
export PATH=/Users/you/Qt/5.11.1/clang_64/:/Users/you/Qt/5.11.1/clang_64/bin/:$PATH
```

### 3. Building Evoplex
Assuming you are at `/Users/you/evoplex/` and the source code is at `/Users/you/evoplex/evoplex/`, run the commands below.
``` bash
mkdir build
cd build
cmake ../evoplex/
make -j8
```

To run Evoplex:
``` bash
./bin/evoplex.app/Contents/MacOS/evoplex
```