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

* **Step 1 - Install C/C++ compiler and CMake:** Open the terminal and run the command below:
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

* **Step 2 - Install Qt Framework**
  * Download and install the <u>recommended version</u> of Qt using their <a href="https://www.qt.io/download" target="_blank">installer</a> **(select the open source license)**.
    * The required packages are `Desktop gcc` and `Qt Charts`.
    * Select a directory to install Qt, e.g., `/opt/qt/`.
    * Add Qt to the `PATH` and `CMAKE_PREFIX_PATH` variables in your `~/.bashrc` file. For example, assuming you installed Qt 5.9.5 at `/opt/qt/`:
      ``` bash
      echo 'export CMAKE_PREFIX_PATH=/opt/qt/5.9.5/gcc_64/' >> ~/.bashrc
      echo 'export PATH=/opt/qt/5.9.5/gcc_64/bin/:$PATH' >> ~/.bashrc
      ```
    * **Close the terminal and open again!**
</details>


## Instructions for macOS <img src="/img/apple-logo.svg" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

* **Step 1 - Install XCode:**
  * Download the latest Xcode package from the Mac App Store for your system (it's free).

* **Step 2 - Install CMake:**
  * [Download](https://cmake.org/download) and install the latest version of CMake.
  * When installing, select the `Add CMake to the system PATH for all users` option.

* **Step 3 - Install Qt Framework**
  * Download and install the <u>recommended version</u> of Qt using their <a href="https://www.qt.io/download" target="_blank">installer</a> **(select the open source license)**.
    * The required packages are `macOS` and `Qt Charts`.
    * Select a directory to install Qt, e.g., `/Users/you/qt/`.
    * Add Qt to the `PATH` and `CMAKE_PREFIX_PATH` variables in your `~/.bashrc` file. For example, assuming you installed Qt 5.9.5 at `/Users/you/qt/`:
      ``` bash
      echo 'export CMAKE_PREFIX_PATH=/Users/you/qt/5.9.5/clang_64/' >> ~/.bashrc
      echo 'export PATH=/Users/you/qt/5.9.5/clang_64/bin/:$PATH' >> ~/.bashrc
      ```
    * **Close the terminal and open again!**
</details>


## Instructions for Windows <img src="/img/windows-logo.png" width="25" style="vertical-align: sub;">
<details><summary>Show/Hide</summary>

* **Step 1 - Install Microsoft Visual Studio (MSVC):**
  * We recommend **MSVC 2017**, but MSVC >= 2013 should be fine.
  * [Download](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15) and install the `Desktop development with C++` component.
  * ⇒ Any MSVC version is fine, e.g., *Community*, *Professional* or *Enterprise*.

* **Step 2 - Install CMake:**
  * [Download](https://cmake.org/download) and install the latest version of CMake, eg., `cmake-3.11.3-win64-x64.msi`
  * When installing, select the `Add CMake to the system PATH for all users` option.

* **Step 3 - Install Qt Framework:**
  * Download and install the <u>recommended version</u> of Qt using their <a href="https://www.qt.io/download" target="_blank">installer</a> **(select the open source license)**.
  * The required packages are `Qt MSVC2017` (use the same version of your MSVC) and `Qt Charts`
  * It's recommended that you install it at `C:\Qt\`
  * You should add Qt to your `PATH` variable as follows (assuming you installed *Qt 5.9.5* at `c:\Qt`):
    * *If you installed Qt for 64-bit:*
      ``` bash
      C:\Qt\Qt5.9.5\msvc2017_64;C:\Qt\Qt5.9.5\msvc2017_64\bin;C:\Qt\Qt5.9.5\msvc2017_64\lib;C:\Qt\Qt5.9.5\msvc2017_64\include
      ```
    * *If you installed Qt for 32-bit:*
      ``` bash
      C:\Qt\Qt5.9.5\msvc2017;C:\Qt\Qt5.9.5\msvc2017\bin;C:\Qt\Qt5.9.5\msvc2017\lib;C:\Qt\Qt5.9.5\msvc2017\include
      ```

        * How to set the `PATH` on Windows 10 and 8:
            1. Search for `Edit Environment Variables`, click <a href="/img/windows-envvar.png" target="_blank">Environment Variables</a>.
            2. In the section System Variables, find the `PATH` environment variable and select it.
            3. Click Edit. If the `PATH` environment variable does not exist, click New.
            4. In the Edit System Variable (or New System Variable) window, copy the value specified above.
            5. Click OK. Close all remaining windows by clicking OK.

* **After installing all those dependencies, reboot the computer.**
</details>