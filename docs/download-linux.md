---
id: download-linux
title: Evoplex for Linux
---

## DEB and RPM Packages <img src="/img/linux-logo.png" width="25" style="vertical-align: sub;">

> Need help? [click here](/help)

### Latest stable release

| Version             | Release Date  | Compiler  | Qt    |     |
| ------------------- |:-------------:| ---------:| -----:| ---:|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0 - x86_64 DEB](https://github.com/evoplex/evoplex/releases/download/0.1.0/evoplex-0.1.0.x86_64.deb) | Aug 06, 2018    | gcc8 | 5.11.1| [Release Notes](/blog/2018/08/06/evoplex-010-released) |
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0 - x86_64 RPM](https://github.com/evoplex/evoplex/releases/download/0.1.0/evoplex-0.1.0.x86_64.rpm) | Aug 06, 2018    | gcc8 | 5.11.1| [Release Notes](/blog/2018/08/06/evoplex-010-released) |

### Past releases

| Version             | Release Date  | Compiler  | Qt    |
| ------------------- |:-------------:| ---------:| -----:|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0-alpha - x86_64 DEB](https://github.com/evoplex/evoplex/releases/download/0.1.0-alpha0/evoplex-0.1.0-alpha0.x86_64.deb) | Jun 21, 2018 | gcc8 | 5.11.0|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0-alpha - x86_64 RPM](https://github.com/evoplex/evoplex/releases/download/0.1.0/evoplex-0.1.0.x86_64.rpm) | Jun 21, 2018 | gcc8 | 5.11.0|




## Build from Source Code <img src="/img/linux-logo.png" width="25" style="vertical-align: sub;">

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
* QtSvg >= 5.8

You can run the command below to install all of the necessary requirements.
#### Ubuntu >= 17.10 (Artful) and Debian >= 10 (Buster)
``` bash
sudo apt-get install build-essential cmake qt-default libqt5charts5-dev libqt5svg5-dev
```
#### Fedora >= 26
``` bash
sudo dnf install cmake qt5-qtbase-devel qt5-qtcharts-devel qt5-qtsvg-devel
```
#### openSUSE
``` bash
sudo zypper install cmake libqt5-qtbase libQt5Charts5 libQt5Svg5
```
#### Others
For any other distribution, you can download and install the latest open source version of Qt from [installer](https://www.qt.io/download).
* The required packages are `Desktop gcc` and `Qt Charts`.
* It's recommended that you install it at `/opt/Qt/`.
* You should add Qt to your `PATH` variable as follows (assuming you installed Qt 5.11.1):
``` bash
export PATH=/opt/Qt/5.11.1/gcc_64/bin:$PATH
```

### 3. Building Evoplex
Assuming you are at `/home/you/evoplex/` and the source code is at `/home/you/evoplex/evoplex/`, run the commands below.
``` bash
mkdir build
cd build
cmake ../evoplex/
make -j8
```

To run Evoplex:
``` bash
./bin/evoplex
```