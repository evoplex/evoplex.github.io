---
id: compiling-evoplex
title: Compiling Evoplex
sidebar_label: Compiling Evoplex
---

The instructions below assume that you have already downloaded the <a href="getting-source-code" target="_blank">source code</a>, and <a href="installing-dependencies" target="_blank">installed all dependencies</a>.

Evoplex uses CMake to allow easy and portable compilation. In this document, we explain how you can compile the source code from command-line or by using QtCreator, which is a free, open-source and cross-platform IDE suitable for projects using the Qt Framework.

Note that if you installed the  <a href="installing-dependencies" target="_blank">dependencies</a> correctly, you should already have QtCreator installed on your computer.

> Need help? <a href="/help" target="_blank">click here</a>

## Instructions for Linux and macOS <img src="/img/linux-logo.png" width="25" style="vertical-align: sub;"> <img src="/img/apple-logo.svg" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

### Building from the command-line
Assuming you are at `~/evoplex/` and the source code is at `~/evoplex/evoplex/`,
1. Create a folder `mkdir build`
2. Access the folder `cd build`
3. Run `cmake ../evoplex/`
4. Run `cmake --build .`

To run Evoplex:
* On Linux: `./bin/evoplex`
* On macOS: `./bin/evoplex.app/Contents/MacOS/evoplex`

### Build using QtCreator
1. In the toolbar, click on `File => Open File or Project...`
2. In the `~/evoplex/evoplex/` directory, select the `CMakeLists.txt` file
3. Open the `Projects` panel (it may open automatically when you first open the CMake file)
    * Select the desired modes (eg., Release)
    * Choose the directory in which Evoplex will be built (eg., `~/evoplex/build/`)
    * Click on `Configure Project`
4. Optionally, you may want to set the `-j N` variable in the `Project` panel to allow building it in parallel (faster), where N is the number of working threads (e.g., 8).
5. Click on Build
</details>


## Instructions for Windows <img src="/img/windows-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

### Building from the command-line
If you installed [Git](https://gitforwindows.org/) and all [dependencies](installing-dependencies) correctly, you should have Git Bash installed on your computer.
1. Open Git Bash
2. Access the root Evoplex directory, eg., `cd /c/evoplex/`
3. Create a build directory and access it, ie., `mkdir build && cd build`
4. Assuming the repository is at `C:/evoplex/evoplex`; run cmake to generate the build files
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
    * Choose the directory in which Evoplex will be built (eg., `C:/evoplex/build/`)
    * Click on `Configure Project`
4. Wait until the project loads, go back to the 'Projects' panel. There, make sure you target `ALL_BUILD` in the build steps. Optionally, you may want to set the `/maxcpucount:N` variable to build it in parallel, where N is the number of working threads.
<p align="center">
  <img alt="QtCreator" src="/img/qtcreator-windows-settings.png">
</p>
</details>
