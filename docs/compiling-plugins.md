---
id: compiling-plugins
title: How to compile a plugin
---

This document will guide you through compiling an Evoplex plugin.

## Prerequisites

Install all dependencies described [here](installing-dependencies).

Note that you do not need to compile Evoplex from source to be able to compile a plugin. However, if you did, you already have all dependencies and so, you **do not** have to install anything else.

> **Important note:** The plugin **must** be compiled with the same architecture (32/64 bits) and mode (*Release/Debug*) of Evoplex.

## Compiling a plugin

Despite not needing to compile Evoplex from source, the process to build Evoplex or a plugin is the same.

Thus, to compile a plugin, you should follow the steps described in [this document]().

* After compiling the plugin, the dynamic library file (i.e., `.so` on Linux, `.dll` on Windows and `.dylib` on macOS) will be placed at `your-build-dir/plugin/`.

* If you get an **error** like **`FindEvoplexCore.cmake` not found**. Make sure you set the `EvoplexCore_DIR` variable correctly! For instance:
    * **if using QtCreator**, go to the `Projects` panel; if it shows `EvoplexCore_DIR-NOTFOUND` and you compiled Evoplex from source (eg., at `~/evoplex/build`), set it to `~/evoplex/build/src/core/EvoplexCore/` as shown <a href="/img/qtcreator-plugin.png" target="_blank">here</a>.

    * **if building from command-line** and compiled Evoplex from source, eg., at `~/evoplex/build`, you should run:
      ``` bash
      export EvoplexCore_DIR=~/evoplex/build/src/core/EvoplexCore/
      ```
</details>

> Need help? [click here](/help)