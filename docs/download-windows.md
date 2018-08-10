---
id: download-windows
title: Evoplex for Windows
---

## Evoplex Installer for Windows (binaries) <img src="/img/windows-logo.png" width="25" style="vertical-align: sub;">

The installation on Windows is very straightforward:

1. Download the Evoplex installer for Windows ([links below](#latest-stable-release)).
2. Once it is downloaded, run the installer.
3. By default it will be installed at `C:\Program Files\evoplex` for a 64-bit machine.

The installer should work fine on Windows 7, 8 and 10

> Need help? [click here](/help)

### Latest Stable Release

| Version             | Release Date  | Compiler  | Qt    |     |
| ------------------- |:-------------:| ---------:| -----:| ---:|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0 - Windows 64-bit](https://github.com/evoplex/evoplex/releases/download/0.1.0/evoplex_0.1.0.win64.exe) | Aug 06, 2018    | MSVC2017 | 5.11.1| [Release Notes](/blog/2018/08/06/evoplex-0.1.0-released) |



### Previous Releases

| Version             | Release Date  | Compiler  | Qt    |
| ------------------- |:-------------:| ---------:| -----:|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0-alpha - Windows 64-bit](https://github.com/evoplex/evoplex/releases/download/0.1.0/evoplex_0.1.0.win64.exe) | Jun 21, 2018 | MSVC2017 | 5.9.1|


## Build from Source Code <img src="/img/windows-logo.png" width="25" style="vertical-align: sub;">

If you want to debug an issue or want to understand how Evoplex works, you'll want to get the source, build and run it. However, if you just want to use Evoplex, you don't need to compile it from source, you can install it directly from the [binary packages](#latest-stable-release).

### Getting the source code
Assuming you have [Git](https://git-scm.com/downloads) installed on your computer, you can fork our repository on GitHub and clone it from `https://github.com/<your-username>/evoplex`, or you can clone it directly from our repository as follows:
```sh
git clone https://github.com/evoplex/evoplex.git evoplex/evoplex
```
It will download the repository to `evoplex/evoplex` relative to your current directory.

Alternatively, you can download the source code from the [.zip archive](https://github.com/evoplex/evoplex/archive/master.zip).


### Installing dependencies

* **CMake >= 3.1.0:**
    * [Download](https://cmake.org/download) and install the latest version of CMake, eg., `cmake-3.11.3-win64-x64.msi`
    * When installing, select the `Add CMake to the system PATH for all users` option.

* **Microsoft Visual Studio Community 2017:**
    * [Download](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15) and install the `Desktop development with C++` component.

* **Qt >= 5.8:**
    * [Download](https://www.qt.io/download) and install the latest open source versions of `Qt` (eg, Qt 5.11 MSVC2017) and `QtCharts`. It's recommended that you install it at `C:\Qt\`.
    * You should add Qt to your `PATH` variable as follows (assuming you installed *Qt 5.11.1*):
        * *If you installed Qt for 32-bit:* `C:\Qt\Qt5.11.1\msvc2017_64;C:\Qt\Qt5.11.1\msvc2017_64\bin;C:\Qt\Qt5.11.1\msvc2017_64\lib;C:\Qt\Qt5.11.1\msvc2017_64\include`
        * *If you installed Qt for 32-bit:* `C:\Qt\Qt5.11.1\msvc2017;C:\Qt\Qt5.11.1\msvc2017\bin;C:\Qt\Qt5.11.1\msvc2017\lib;C:\Qt\Qt5.11.1\msvc2017\include`

        * How to set the `PATH` on Windows 10 and 8:
            1. Search for `Edit Environment Variables`, click <a href="/img/windows-envvar.png" target="_blank">Environment Variables</a>.
            2. In the section System Variables, find the PATH environment variable and select it.
            3. Click Edit. If the PATH environment variable does not exist, click New.
            4. In the Edit System Variable (or New System Variable) window, copy the value specified above.
            5. Click OK. Close all remaining windows by clicking OK.

* **After installing all those dependencies, reboot the computer.**


### Building from the command-line
We assume that you have already obtained the source code and placed it at `C:\evoplex\evoplex\`. No? Please, follow the instructions [here](Getting-the-source-code) first.

If you installed [Git](https://gitforwindows.org/) and all [dependencies](#installing-dependencies) correctly, you should have Git Bash installed on your computer.
1. Open Git Bash
2. access the root Evoplex directory, eg., `cd /c/evoplex/`
3. create a build directory and access it, ie., `mkdir build && cd build`
4. assuming the repository is at `C:/evoplex/evoplex`; run cmake to generate the build files `cmake.exe -G"Visual Studio 15 2017 Win64" ../evoplex`
5. Finally, build it! `cmake.exe --build . --config Release --target ALL_BUILD -- /maxcpucount:8`

All commands:
```bash
cd /c/evoplex/
mkdir build && cd build
cmake.exe -G"Visual Studio 15 2017 Win64" ../evoplex
cmake.exe --build . --config Release --target ALL_BUILD -- /maxcpucount:8
```

Now, to run Evoplex:
```bash
./releases/evoplex
```

### Building with QtCreator
We assume that you have already obtained the source code and placed it at `C:\evoplex\evoplex\`. No? Please, follow the instructions [here](Getting-the-source-code) first.

#### Configuring QtCreator
If you installed all [dependencies](#installing-dependencies) correctly,
1. In QtCreator, open `Tools => Options...` in the toolbar
2. Open the 'Kits' tab in the `Build&Run` panel.
3. Click on the auto-detected kit (eg., *Desktop Qt 5.11.1 MSVC2017 64bit*)
    1. Make sure the compiler (C and C++) is set correctly. For example:
        * C ``Microsoft Visual C++ Compiler 15.0 (amd64)``
        * C++ ``Microsoft Visual C++ Compiler 15.0 (amd64)``
    2. Make sure that the path to the `CMake Tool` was detected (eg., `C:\Program Files\CMake\bin\cmake.exe`)
    3. Make sure the CMake generator is set to your version of Visual Studio (eg., `Visual Studio 15 2017 Win64`). Leave the fields `Platform` and `Toolset` blank.
4. Click OK

#### Configuring QtCreator for Evoplex
1. In the toolbar, click on `File => Open File or Project...`
2. In the `C:\evoplex\evoplex\` directory, select the `CMakeLists.txt` file
3. Open the `Projects` panel (it may open automatically when you first open the CMake file)
    * Select the desired modes (eg., Release)
    * Choose the directory in which Evoplex will be built (eg., `C:/evoplex/evoplex/build/`)
    * Click on `Configure Project`
4. Wait until the project loads, go back to the 'Projects' panel. There, make sure you target `ALL_BUILD` in the build steps. Optionally, you may want to set the `/maxcpucount:N` variable to build it in parallel, where N is the number of working threads.
<p align="center">
  <img alt="QtCreator" src="/img/qtcreator-windows-settings.png">
</p>