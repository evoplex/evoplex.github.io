---
id: getting-source-code
title: Evoplex from Source Code
sidebar_label: Getting the source code
---

If you want to debug an issue or want to understand how Evoplex works, you'll want to get the source code, build and run it. However, if you just want to use Evoplex, you should install it directly from the [binary packages](intro#downloads).

The main steps to compile Evoplex are as follows:
1. [Get the source code](#1-getting-the-source-code)
2. [Install dependencies](installing-dependencies)
3. [Use CMake to compile the source code into an executable](compiling-evoplex)

## 1. Getting the source code
### Using Git (recommended)
Assuming you have [Git](https://git-scm.com/downloads) installed on your computer,
1. Open the terminal (Git Bash on Windows)
2. Go to the directory where you want to place it (i.e., using `cd /the/path/to/your/dir`)
3. a) You can fork [our repository on GitHub](https://github.com/evoplex/evoplex) and clone it from
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
* Under development: [Master branch](https://github.com/evoplex/evoplex/archive/master.zip)
* Latest stable release: [Evoplex 0.2.0](https://github.com/evoplex/evoplex/archive/v0.2.0.zip)