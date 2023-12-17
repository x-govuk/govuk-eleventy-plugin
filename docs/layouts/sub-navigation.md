---
order: 2
title: Page with sub navigation
description: Layout with sub navigation.
---

> View an <a href="/example-layouts/sub-navigation" target="_blank">example page that uses this layout (opens in a new tab)</a>

This layout offers a page with sub navigation, appearing to the left of content on wider viewports, and above on narrower ones.

To use this layout, make `sub-navigation` the value for a page’s `layout` key:

```yaml
---
layout: sub-navigation
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts#common-front-matter-options), this layout also accepts the following options:

| Name           | Type   | Description                                                                                                                                                |
| :------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **sectionKey** | string | Parent navigation key (usually a page title) to show items below in the sub navigation. Default is `homeKey` value provided in [plugin options](/options). |
