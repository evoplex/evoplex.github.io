---
id: getting-source-code
title: Evoplex from Source Code
sidebar_label: Getting the source code
---

If you want to debug an issue or want to understand how Evoplex works, you'll want to get the source code, build and run it. However, if you just want to use Evoplex, you should install it directly from the [binary packages](index#downloads).

The main steps to compile Evoplex are as follows:
1. [Get the source code](#1-getting-the-source-code)
2. <a href="installing-dependencies" target="_blank">Install dependencies</a>
3. <a href="compiling-evoplex" target="_blank">Use CMake to compile the source code into an executable</a>

## 1. Getting the source code
### Using Git (recommended)
Assuming you have <a href="https://git-scm.com/downloads" target="_blank">Git</a> installed on your computer,
1. Open the terminal (Git Bash on Windows)
2. Go to the directory where you want to place it (i.e., using `cd /the/path/to/your/dir`)
3. a) You can fork <a href="https://github.com/evoplex/evoplex" target="_blank">our repository on GitHub</a> and clone it from
    ``` bash
    git clone https://github.com/<your-username>/evoplex evoplex/evoplex
    ```
    b) Or you can clone it directly from our repository as follows:
    ```bash
    git clone https://github.com/evoplex/evoplex.git evoplex/evoplex
    ```
    It will download the repository to `evoplex/evoplex` relative to your current directory.

### From .zip archive
Alternatively, you can download the source code from the `.zip` archive.
* Under development: <a href="https://github.com/evoplex/evoplex/archive/master.zip" target="_blank">Master branch</a>
* Latest stable release: <a href="https://github.com/evoplex/evoplex/archive/v0.2.1.zip" target="_blank">Evoplex 0.2.1</a>