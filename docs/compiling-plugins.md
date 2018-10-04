---
id: compiling-plugins
title: How to compile a plugin
---

This document will guide you through compiling an Evoplex plugin.

## Prerequisites

Install all dependencies described [here](installing-dependencies).

Note that you do not need to compile Evoplex from source to be able to compile a plugin. However, if you did, you already have all dependencies and so, you **do not** have to install anything else.

> **Important note:** The plugin **must** be compiled with the same architecture (32/64 bits) and mode (*Release/Debug*) of Evoplex.

## Build using QtCreator
1. Open the `CMakeLists.txt`
2. In the projects page, make sure the `EvoplexCore_DIR` is set. If it shows `EvoplexCore_DIR-NOTFOUND` and you compiled Evoplex from source (eg., at `~/evoplex/build`), set it to `~/evoplex/build/src/core/EvoplexCore/` as shown <a href="/img/qtcreator-plugin.png" target="_blank">here</a>.
3. Click on Build

The will be generated at `your-build-dir/plugin/`

## Build using Command-line
Assuming the plugin's source code is at `~/evoplex/plugin` and you are at `~/evoplex`,
1. Create a folder `mkdir build-plugin`
2. Access the folder `cd build-plugin`
3. Run `cmake ../plugin`
4. Run `cmake --build .`

The will be generated at `~/evoplex/build-plugin/plugin/`

<details><summary>If you get an **error** like `FindEvoplexCore.cmake` not found...</summary>
Make sure you set the `EvoplexCore_DIR` variable correctly. For instance, if you compiled Evoplex from source, eg., at `~/evoplex/build`,
``` bash
export EvoplexCore_DIR=~/evoplex/build/src/core/EvoplexCore/
```
</details>

> Need help? [click here](/help)