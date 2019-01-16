---
id: compiling-plugins
title: How to compile a plugin
---

This document will guide you through compiling an Evoplex plugin.

## Prerequisites

Install all dependencies described <a href="installing-dependencies" target="_blank">here</a>.

Note that you do not need to compile Evoplex from source to be able to compile a plugin. However, if you did, you already have all dependencies and so, you **do not** have to install anything else.

> **Important note:** The plugin **must** be compiled with the same architecture (32/64 bits) and mode (*Release/Debug*) of Evoplex.

## Instructions for Linux <img src="/img/linux-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

### Compiling the plugin from the command-line
<details><summary>Show/Hide</summary>

<details><summary><b>1. I run Evoplex from an AppImage</b></summary>
* Go to the directory where the Evoplex AppImage is (e.g., `cd ~/evoplex`)
* Run `./evoplex.AppImage --appimage-extract` to extract the AppImage to `~/evoplex/squashfs-root`
* Run `export EvoplexCore_DIR=~/evoplex/squashfs-root/usr/lib/cmake/Evoplex/`
</details>

<details><summary><b>1. I compiled Evoplex from the source code</b></summary>
* Assuming you compiled **Evoplex** at `~/evoplex/build`.
* Run `export EvoplexCore_DIR=~/evoplex/build/src/core/EvoplexCore/`

</details>

2. Go to the plugin's directory (e.g., `cd ~/evoplex/plugin/`)
3. Create a folder `mkdir build`
4. Access the folder `cd build`
5. Run `cmake ..`
6. Run `cmake --build .`
7. The plugin (i.e., dynamic library file -- `.so` on Linux) will be placed at `~/evoplex/plugin/build/plugin/`
</details>

### Compiling the plugin with QtCreator
<details><summary>Show/Hide</summary>

<details><summary><b>If you run Evoplex from an AppImage, click HERE!</b></summary>
* Open the terminal
* Go to the directory where the Evoplex AppImage is (e.g., `cd ~/evoplex`)
* Run `./evoplex.AppImage --appimage-extract` to extract the AppImage to `~/evoplex/squashfs-root`

</details>

1. In the toolbar, click on `File => Open File or Project...`
2. In the plugin's directory (e.g., `~/evoplex/plugin/`), select the `CMakeLists.txt` file
3. Open the `Projects` panel (it may open automatically when you first open the CMake file)
    * Select the desired modes (e.g., Release)
    * Choose the directory in which the plugin will be built (eg., `~/evoplex/plugin/build/`)
    * Click on `Configure Project`
4. In the Build Settings (`Projects` panel), add the `EvoplexCore_DIR` variable (directory -- <a href="/img/qtcreator-plugin.png" target="_blank">see this screenshot</a>) as follows:
    * If you extracted the Evoplex libs from an **AppImage** (e.g., at `~/evoplex/squashfs-root`), the variable should be set to `~/evoplex/squashfs-root/usr/lib/cmake/Evoplex`
    * If you compiled Evoplex from the **source code** (e.g., Evoplex was compiled at `~/evoplex/build/`), the variable should be set to `~/evoplex/build/src/core/EvoplexCore`
    * Hit ENTER to confirm
5. Click on `Apply Configuration Changes`
6. Click on Build
7. The plugin (i.e., dynamic library file -- `.so` on Linux) will be placed at `~/evoplex/plugin/build/plugin/`
</details>


</details>





## Instructions for macOS <img src="/img/apple-logo.svg" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

### Compiling the plugin from the command-line
<details><summary>Show/Hide</summary>

<details><summary><b>1. I installed Evoplex from a DMG file</b></summary>
* Assuming that **Evoplex** is installed at `/Applications/evoplex.app`
* Run `export EvoplexCore_DIR=/Applications/evoplex.app/Contents/MacOS/lib/cmake/Evoplex`
</details>

<details><summary><b>1. I compiled Evoplex from the source code</b></summary>
* Assuming you compiled **Evoplex** at `~/evoplex/build`.
* Run `export EvoplexCore_DIR=~/evoplex/build/evoplex.app/Contents/MacOS/lib/cmake/Evoplex`

</details>

2. Go to the plugin's directory (e.g., `cd ~/evoplex/plugin/`)
3. Create a folder `mkdir build`
4. Access the folder `cd build`
5. Run `cmake ..`
6. Run `cmake --build .`
7. The plugin (i.e., dynamic library file -- `.dylib` on macOS) will be placed at `~/evoplex/plugin/build/plugin/`
</details>

### Compiling the plugin with QtCreator
<details><summary>Show/Hide</summary>
1. In the toolbar, click on `File => Open File or Project...`
2. In the plugin's directory (e.g., `~/evoplex/plugin/`), select the `CMakeLists.txt` file
3. Open the `Projects` panel (it may open automatically when you first open the CMake file)
    * Select the desired modes (e.g., Release)
    * Choose the directory in which the plugin will be built (eg., `~/evoplex/plugin/build/`)
    * Click on `Configure Project`
4. In the Build Settings (`Projects` panel), add the `EvoplexCore_DIR` variable (directory -- <a href="/img/qtcreator-plugin.png" target="_blank">see this screenshot</a>) as follows:
    * If you installed Evoplex from a **DMG** file (e.g., at `/Applications/evoplex.app`), the variable should be set to `/Applications/evoplex.app/Contents/MacOS/lib/cmake/Evoplex`
    * If you compiled Evoplex from the **source code** (e.g., Evoplex was compiled at `~/evoplex/build/`), the variable should be set to `~/evoplex/build/evoplex.app/Contents/MacOS/lib/cmake/Evoplex`
    * Hit ENTER to confirm
5. Click on `Apply Configuration Changes`
6. Click on Build
7. The plugin (i.e., dynamic library file -- `.so` on Linux) will be placed at `~/evoplex/plugin/build/plugin/`
</details>

</details>





## Instructions for Windows <img src="/img/windows-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

### Compiling the plugin from the command-line
<details><summary>Show/Hide</summary>

If you installed <a href="https://gitforwindows.org" target="_blank">Git</a> and all <a href="installing-dependencies" target="_blank">dependencies</a> correctly, you should have Git Bash installed on your computer.
1. Open Git Bash

<details><summary><b>2. I installed Evoplex from a binary package (exe file)</b></summary>
* Assuming that **Evoplex** is installed at `/c/Program\ Files/evoplex/`
* Run `export EvoplexCore_DIR=/c/Program\ Files/evoplex/lib/cmake/Evoplex`
</details>

<details><summary><b>2. I compiled Evoplex from the source code</b></summary>
* Assuming you compiled **Evoplex** at `/c/evoplex/build`.
* Run `export EvoplexCore_DIR=/c/evoplex/build/releases/lib/cmake/Evoplex`

</details>

3. Go to the plugin's directory (e.g., `cd /c/evoplex/plugin/`)
4. Create a folder `mkdir build`
5. Access the folder `cd build`
6. Run cmake to generate the build files (make sure you specify the MSVS version properly)
    ``` bash
    cmake.exe -G"Visual Studio 15 2017 Win64" ../evoplex
    ```
7. Finally, build it!
    ``` bash
    cmake.exe --build . --config Release --target ALL_BUILD
    ```
8. The plugin (i.e., `.dll` file) will be placed at `/c/evoplex/plugin/build/plugin/`
</details>

### Compiling the plugin with QtCreator
<details><summary>Show/Hide</summary>

#### I. Configuring QtCreator
If you installed all <a href="installing-dependencies" target="_blank">dependencies</a> correctly, and have not used QtCreator for Evoplex before:
1. In QtCreator, open `Tools => Options...` in the toolbar
2. Open the 'Kits' tab in the `Build&Run` panel.
3. Click on the auto-detected kit (eg., *Desktop Qt 5.9.5 MSVC2017 64bit*)
    1. Make sure the compiler (C and C++) is set correctly. For example:
        * C ``Microsoft Visual C++ Compiler 15.0 (amd64)``
        * C++ ``Microsoft Visual C++ Compiler 15.0 (amd64)``
    2. Make sure that the path to the `CMake Tool` was detected (eg., `C:\Program Files\CMake\bin\cmake.exe`)
    3. Make sure the CMake generator is set to your version of Visual Studio (eg., `Visual Studio 15 2017 Win64`). Leave the fields `Platform` and `Toolset` blank.
4. Click OK

#### II. Configuring QtCreator for the Evoplex plugin
1. In the toolbar, click on `File => Open File or Project...`
2. In the plugin's directory (e.g., `C:\evoplex\plugin\`), select the `CMakeLists.txt` file
3. Open the `Projects` panel (it may open automatically when you first open the CMake file)
    * Select the desired modes (eg., Release)
    * Choose the directory in which the plugin will be built (eg., `C:/evoplex/plugin/build/`)
    * Click on `Configure Project`
4. In the Build Settings (`Projects` panel), add the `EvoplexCore_DIR` variable (directory -- <a href="/img/qtcreator-plugin.png" target="_blank">see this screenshot</a>) as follows:
    * If you installed Evoplex from a **binary package** (e.g., at `c:\Program Files\evoplex`), the variable should be set to `c:\Program Files\evoplex\lib\cmake\Evoplex`
    * If you compiled Evoplex from the **source code** (e.g., Evoplex was compiled at `c:\evoplex\build`), the variable should be set to `c:\evoplex\build\releases\lib\cmake\Evoplex`
    * Hit ENTER to confirm
5. Click on `Apply Configuration Changes`
6. In the Build Settings (`Projects` panel), make sure you target `ALL_BUILD` in the build steps
7. Click on Build


</details>



</details>



> Need help? <a href="/help" target="_blank">click here</a>