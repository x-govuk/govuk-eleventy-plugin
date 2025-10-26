---
title: Sitemap
description: Help readers find content on your site.
---

A sitemap is a page that lists all the pages on your site. It helps users find content when they cannot locate what they’re looking for through your main navigation.

The GOV.UK Eleventy Plugin creates a sitemap page that automatically lists all your site's pages in a clear, organised way.

> [!NOTE]
> View an [example sitemap (opens in a tab)](/example/sitemap){target=example}

## Configure the sitemap page

The plugin enables the sitemap page by default (it is linked to from the 404 page). To turn it off, set `templates.sitemap` to `false` in your plugin options.

Or, you can customise the page by using these options:

| Name      | Type   | Description                                                                                                                |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| title     | string | Sets the page title. Default is `Sitemap`)                                                                                 |
| permalink | string | Sets the file name and location. Default is `/sitemap/`. Set to `false` to disable writing this file to the output folder. |

## Change how the sitemap page looks

The sitemap page uses the [sitemap layout](/layouts/sitemap). You can override this layout to change how the page appears.
