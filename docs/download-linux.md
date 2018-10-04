---
id: download-linux
title: Installing on Linux
---

## AppImage ("universal" Linux package) <img src="/img/linux-logo.png" width="25" style="vertical-align: sub;">

### Latest stable release

| Version             | Release Date  | Compiler  | Qt    |     |
| ------------------- |:-------------:| ---------:| -----:| ---:|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.2.0 - x86_64 AppImage](https://github.com/evoplex/evoplex/releases/download/v0.2.0/evoplex-0.2.0.x86_64.AppImage) | Sep 04, 2018    | gcc4.8 | 5.9.5| [Release Notes](/blog/2018/09/04/evoplex-020-released) |

### How to run Evoplex

We provide an AppImage that runs on most Linux systems. No istallation is needed, just download, make it executable and run it. This can either be done using the GUI or via the command line.

#### Using the GUI

1. Open the location where you placed the `evoplex.AppImage` file
2. Right-click on the AppImage and click on `Properties`
3. In the `Permissions` tab, enable the `Allow executing file as program` checkbox (it's called `Is executable` in Dolphin and `Execute: Anyone` in PCManFM).
4. Close the dialog
5. Double-click the `evoplex.AppImage` file to run.

<center>
<img src="/img/evoplex-appimage.gif" width="50%">
</center>

#### Using the Terminal

1. Open a terminal
2. Change to the directory containing the evoplex.AppImage file, e.g., using `cd <my directory>`
3. Make the AppImage executable: `chmod +x evoplex.AppImage`
4. Run the AppImage: ./evoplex.AppImage

> Need help? [click here](/help)

### Past releases

| Version             | Release Date  | Compiler  | Qt    |     |
| ------------------- |:-------------:| ---------:| -----:| ---:|
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0 - x86_64 DEB](https://github.com/evoplex/evoplex/releases/download/v0.1.0/evoplex-0.1.0.x86_64.deb) | Aug 06, 2018    | gcc8 | 5.11.1| [Release Notes](/blog/2018/08/06/evoplex-010-released) |
| [<img src="/img/download-black.svg" width="17" style="vertical-align: sub;"> Evoplex 0.1.0 - x86_64 RPM](https://github.com/evoplex/evoplex/releases/download/v0.1.0/evoplex-0.1.0.x86_64.rpm) | Aug 06, 2018    | gcc8 | 5.11.1| [Release Notes](/blog/2018/08/06/evoplex-010-released) |
