---
layout: side-navigation
order: 4
title: Extended Markdown syntax
related:
  items:
  - text: Markdown Guide
    href: https://www.markdownguide.org
---
[[toc]]

## Strike-through

~~Strike-through~~

## Task list

Task lists allow you to create a list of items with checkboxes. To create a checkbox, add brackets with a space (`[ ]`) at the start of a list item. To show a selected checkbox, add an `x` in between the brackets (`[x]`).

```markdown
1. [x] Write the press release
2. [ ] Update the website
3. [ ] Contact the media
```

1. [x] Write the press release
2. [ ] Update the website
3. [ ] Contact the media

## Fenced code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Typographic replacements

```markdown
1/2 1/3 2/3 1/4 3/4

4 x 2.4

<<Bonjour!>>

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

"Smartypants, double quotes", 'single quotes',
-- en-dash and --- em-dash

And ellipses...
```

1/2 1/3 2/3 1/4 3/4

1/2 x 3/4

4 x 2.4

<<Bonjour!>>

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

"Smartypants, double quotes", 'single quotes',
-- en-dash and --- em-dash

And ellipses...

## Subscript

- H~2~O

## Superscript

- 19^th^

## Inserted text

++Inserted text++

## Marked text

==Marked text==

## Footnotes

Here’s a simple footnote,[^1] and here’s a longer one.[^big note]

[^1]: This is the first footnote.

[^big note]: Here’s one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

        { my code }

    Add as many paragraphs as you like.

## Definition lists

Term 1

: Definition 1
with lazy continuation.

Term 2 with *inline markup*

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

## Abbreviations

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language
