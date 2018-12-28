---
id: installing-dependencies
title: Installing Dependencies
sidebar_label: Installing dependencies
---

The dependencies to compile Evoplex or an Evoplex Plugin are as follows:
* C/C++ compiler
* CMake >= 3.1.0
* Qt Framework >= 5.8 (recommended: 5.9.5)
    * *base components:* QtCore, QtConcurrent, QtNetwork, QtWidgets, QtTest and QtSvg
    * *additional component:* QtCharts

> Need help? [click here](/help)

## Instructions for Linux <img src="/img/linux-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

* **C/C++ compiler and CMake:** Open the terminal and run the command below:
  * **Ubuntu and Debian:**
    ``` bash
    sudo apt-get install build-essential libgl1-mesa-dev cmake
    ```
  * **Fedora**
    ``` bash
    sudo dnf install gcc cmake
    ```
  * **openSUSE**
    ``` bash
    sudo zypper install gcc cmake
    ```

* **Qt Framework**
  * Download and install the <u>recommended version</u> of Qt using their [installer](https://www.qt.io/download) **(select the open source license)**.
    * The required packages are `Desktop gcc` and `Qt Charts`.
    * It's recommended that you install it at `/opt/Qt/`.
    * You should add Qt to your `PATH` variable as follows (assuming you installed Qt 5.9.5):
      ``` bash
      export PATH=/opt/Qt/5.9.5/gcc_64/bin:$PATH
      ```
      **⇒ tip:** to make it permanent, add this line at end of your `~/bashrc` file.
</details>


## Instructions for macOS <img src="/img/apple-logo.svg" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

* **XCode:**
  * Download the latest Xcode package from the Mac App Store for your system (it's free).

* **CMake:**
  * [Download](https://cmake.org/download) and install the latest version of CMake.
  * When installing, select the `Add CMake to the system PATH for all users` option.

* **Qt Framework**
  * Download and install the <u>recommended version</u> of Qt using their [installer](https://www.qt.io/download) **(select the open source license)**.
    * The required packages are `macOS` and `Qt Charts`.
    * Suppose you installed it at `/Users/you/Qt/`, you must add Qt to your `PATH` variable as follows (assuming you installed Qt 5.9.5):
      ``` bash
      export PATH=/Users/you/Qt/5.9.5/clang_64/:/Users/you/Qt/5.9.5/clang_64/bin/:$PATH
      ```
      **⇒ tip:** to make it permanent, add this line at end of your `~/bashrc` file.
</details>


## Instructions for Windows <img src="/img/windows-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

* **Microsoft Visual Studio 2017:**
  * [Download](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15) and install the `Desktop development with C++` component.
  * ⇒ Any MVS version is fine, e.g., *Community*, *Professional* or *Enterprise*.

* **CMake:**
  * [Download](https://cmake.org/download) and install the latest version of CMake, eg., `cmake-3.11.3-win64-x64.msi`
  * When installing, select the `Add CMake to the system PATH for all users` option.

* **Qt Framework:**
  * Download and install the <u>recommended version</u> of Qt using their [installer](https://www.qt.io/download) **(select the open source license)**.
  * The required packages are `Qt MSVC2017` (use the same version of your MVS) and `Qt Charts`
  * It's recommended that you install it at `C:\Qt\`
  * You should add Qt to your `PATH` variable as follows:
    * *If you installed Qt for 64-bit:* (assuming you installed *Qt 5.9.5*)
      ``` bash
      C:\Qt\Qt5.9.5\msvc2017_64;C:\Qt\Qt5.9.5\msvc2017_64\bin;C:\Qt\Qt5.9.5\msvc2017_64\lib;C:\Qt\Qt5.9.5\msvc2017_64\include
      ```
    * *If you installed Qt for 32-bit:*
      ``` bash
      C:\Qt\Qt5.9.5\msvc2017;C:\Qt\Qt5.9.5\msvc2017\bin;C:\Qt\Qt5.9.5\msvc2017\lib;C:\Qt\Qt5.9.5\msvc2017\include
      ```

        * How to set the `PATH` on Windows 10 and 8:
            1. Search for `Edit Environment Variables`, click <a href="/img/windows-envvar.png" target="_blank">Environment Variables</a>.
            2. In the section System Variables, find the PATH environment variable and select it.
            3. Click Edit. If the PATH environment variable does not exist, click New.
            4. In the Edit System Variable (or New System Variable) window, copy the value specified above.
            5. Click OK. Close all remaining windows by clicking OK.

* **After installing all those dependencies, reboot the computer.**
</details>