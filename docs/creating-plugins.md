---
id: creating-plugins
title: How to create a plugin
---

Evoplex was created to hopefully make it simple for you to create a plugin, which can be either a **model** or a **graph** generator. As the plugins are written in C++, you'll need to [install a few dependencies](installing-dependencies) to be able to compile them.

The easiest way to create your first plugin is to look at some of the examples that we provide [here](example-plugins). Thus:
1. [Download (or clone via Git) one of them](example-plugins);
2. [Install the dependencies](installing-dependencies);
3. [Compile](compiling-plugins) from scracth to generate the dynamic library file (`.so` on Linux, `.dll` on Windows and `.dylib` on macOS);
4. [Load and run](running-plugins) the plugin on Evoplex.

## Download a template

We provide a template with the essential files for you to create a new plugin.

Thus, you can either follow a Git workflow (i.e., fork the repository on GitHub, and clone it to your computer) or just download the zip archive provided below.

* To create a model:
    * Git repository - https://github.com/evoplex/minimal-model
    * Zip archive - https://github.com/evoplex/minimal-model/archive/master.zip

* To create a graph generator:
    * Git repository - https://github.com/evoplex/minimal-graph
    * Zip archive - https://github.com/evoplex/minimal-graph/archive/master.zip

## Directory structure

Any plugin has at least the following files:
``` bash
├── CMakeLists.txt
├── metadata.json
├── plugin.h
└── plugin.cpp
```

* `CMakeLists.txt` which does not need to be changed by the modeller and is just a CMake script to ease the compilation process and make it portable across different compilers and IDEs.
* [`metadata.json`](#the-metadatajson-file) which holds the definition of all the attributes of the plugin.
* [`plugin.h`](#the-pluginh-file) which contains the plugin's header file.
* [`plugin.cpp`](#the-plugincpp-file) which contains the plugins' source code.

> **Note:** you should **not rename** any of those files.

## The `metadata.json` file

After downloading a [template](#download-a-template), the first thing you should do is edit the `metadata.json` file to refer to your needs.

Besides the fields used to identify your plugin (e.g., type, id, description etc.), this file is important because it defines all the attributes of your plugin.

<details>
<summary>
If you started from the `minimal-model`, your `metadata.json` file should look like:
</summary>
``` json
{
  "type": "model",
  "uid": "minimalModel",
  "version": 1,
  "title": "Mininal Model",
  "author": "Evoplex Team",
  "description": "This is a mininal example of a model plugin for Evoplex.",

  "pluginAttributesScope": [],
  "nodeAttributesScope": [],
  "edgeAttributesScope": [],

  "supportedGraphs": [],
  "customOutputs": []
}
```
</details>

<details>
<summary>
If you started from the `minimal-graph`, your `metadata.json` file should look like:
</summary>
``` json
{
  "type": "graph",
  "uid": "minimalGraph",
  "version": 1,
  "title": "Mininal Graph",
  "author": "Evoplex Team",
  "description": "This is a mininal example of a graph plugin for Evoplex.",

  "pluginAttributesScope": [],
  "supportsEdgeAttrsGen": true,
  "validGraphTypes": ["undirected", "directed"]
}
```
</details>

### Mandatory fields
* `type` - The plugin's type, i.e., `model` or `graph`.
* `uid` - An unique id (without spaces) to be used by Evoplex to identify this plugin.
* `version` - The current version of your plugin. It must be an integer.
* `title` - The title of your plugin.
* `author` - The name(s) of the author(s) of this plugin.
* `description` - A short description of what this plugin does.

### Optional fields
* `pluginAttributesScope` - An array of objects defining all the attributes (inputs) of your plugin. In Evoplex, those attributes will be exposed to the user as the inputs of your model/graph ([click here for details](#the-attributes-scope)).

#### Optional fields for models
* `nodeAttributesScope` - An array of objects defining all the nodes' attributes ([click here for details](#the-attributes-scope)).
* `edgeAttributesScope` - An array of objects defining all the edges' attributes ([click here for details](#the-attributes-scope)).
* `customOutputs` - An array of strings defining the name of any custom output that you want to implement in the `plugin.cpp` file.
* `supportedGraphs` - An array of strings (graph uids) defining the supported graphs for the model. Leave empty (or remove) to allow any graph. For instance, to support only the `squareGrid` and the `cycle` graphs, this field would be set as follows:
    ```json
    { "supportedGraphs": ["squareGrid", "cycle"] }
    ```

#### Optional fields for graphs
* `validGraphTypes` - An array of strings with the supported graph types, i.e., `directed` and/or `undirected`.
* `supportsEdgeAttrsGen` - `true` if the graph supports creating edges attributes via the *Attributes Generator* tool.


### The Attributes Scope

The "attributes' scope" field is an array of objects where each object defines both the name and range of each attribute as follows:
```json
{
"xxxxAttributesScope": [
    {"attribute_name1": "attribute_range1"},
    ...
    {"attribute_nameN": "attribute_rangeN"}
]
}
```

For instance, if your plugin needs to request an integer from 0 to 10 (assigned to `variableA`) from the user; the `metadata.json` file would have the line below.
```json
{ "pluginAttributesScope": [ {"variableA": "int[0,10]"} ] }
```
Then, as shown in <a href="/img/screenshots/021/experimentDesigner.png" target="_blank">this screenshot</a>, after compiling and loading the plugin in *Evoplex*, the `variableA` will be displayed in the *Experiment Designer* tool.


## The `plugin.h` file

If you are creating your plugin from the `minimal-model` or any other existing plugin, you should rename the `#ifndef` and `#define` directives, and the `class` name to refer to your own plugin.

The virtual functions available for a **model plugin** are described <a href="https://github.com/evoplex/minimal-model/blob/master/plugin.h" target="_blank">here</a>, and the functions available for a **graph generator plugin** are described <a href="https://github.com/evoplex/minimal-graph/blob/master/plugin.h" target="_blank">here</a>.


## The `plugin.cpp` file

If you renamed the `class` name in the [header file](#the-pluginh-file), make sure you adjust the `plugin.cpp` file as well.

### The base classes

<img src="/api/0.2.1/classevoplex_1_1AbstractPlugin.png" />

The model plugins are based on the `AbstractModel` class, while the graph plugins are based on the `AbstractGraph` class. Please, refer to the <a href="/api/0.2.1/modules.html" target="_blank">API documentation</a> to know which functions are available in your `plugin.cpp` file.

