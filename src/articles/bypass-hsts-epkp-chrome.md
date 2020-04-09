---
title: Bypass HSTS or EPKP error message in Chrome
description: How bypass HSTS or EPKP error message in Chrome
permalink: article/bypass-hsts-epkp-chrome.html
tags:
  - article
  - short
keywords: 'bypass, hsts, epkp, NET::ERR_CERT_COMMON_NAME_INVALID, chrome, debug'
layout: article
---

If you also find yourself debugging and need to bypass the HSTS or HPKP error message on Chrome there is no button like https cert failures instead you need to type in:

```
thisisunsafe
```

On the error screen

Should magically let you past issues like

```
NET::ERR_CERT_COMMON_NAME_INVALID
```

_Note: you need to type the characters in specifically, cannot copy / paste_
