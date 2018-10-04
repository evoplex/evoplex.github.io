---
id: compiling-evoplex
title: Compiling Evoplex
sidebar_label: Compiling Evoplex
---

The instructions below assume that you have already downloaded the [source code](getting-source-code), and [installed all dependencies](installing-dependencies).

> Need help? [click here](/help)

## Instructions for Linux <img src="/img/linux-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

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
</details>


## Instructions for macOS <img src="/img/apple-logo.svg" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

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
</details>


## Instructions for Windows <img src="/img/windows-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

### Building from the command-line
If you installed [Git](https://gitforwindows.org/) and all [dependencies](installing-dependencies) correctly, you should have Git Bash installed on your computer.
1. Open Git Bash
2. access the root Evoplex directory, eg., `cd /c/evoplex/`
3. create a build directory and access it, ie., `mkdir build && cd build`
4. assuming the repository is at `C:/evoplex/evoplex`; run cmake to generate the build files
    ``` bash
    cmake.exe -G"Visual Studio 15 2017 Win64" ../evoplex
    ```
5. Finally, build it!
    ``` bash
    cmake.exe --build . --config Release --target ALL_BUILD -- /maxcpucount:8
    ```
6. Now, to run Evoplex: `./releases/evoplex`

### Building with QtCreator

#### I. Configuring QtCreator
If you installed all [dependencies](installing-dependencies) correctly,
1. In QtCreator, open `Tools => Options...` in the toolbar
2. Open the 'Kits' tab in the `Build&Run` panel.
3. Click on the auto-detected kit (eg., *Desktop Qt 5.9.5 MSVC2017 64bit*)
    1. Make sure the compiler (C and C++) is set correctly. For example:
        * C ``Microsoft Visual C++ Compiler 15.0 (amd64)``
        * C++ ``Microsoft Visual C++ Compiler 15.0 (amd64)``
    2. Make sure that the path to the `CMake Tool` was detected (eg., `C:\Program Files\CMake\bin\cmake.exe`)
    3. Make sure the CMake generator is set to your version of Visual Studio (eg., `Visual Studio 15 2017 Win64`). Leave the fields `Platform` and `Toolset` blank.
4. Click OK

#### II. Configuring QtCreator for Evoplex
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
</details>
