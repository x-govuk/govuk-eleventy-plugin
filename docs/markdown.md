---
layout: page
title: Using Markdown
tags:
- getting-started
- search-index
---
## Headings

```markdown
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules

```markdown
___

---

***
```

___

---

***

## Emphasis

```markdown
**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strike-through~~
```

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strike-through~~

## Blockquotes

```markdown
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
```

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

### Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

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

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
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

## Links

[link text](https://www.gov.uk)

[link with title](https://www.gov.uk "Visit GOV.UK")

Autolinked text: https://www.gov.uk

## Images

![The GOV.UK logo](/assets/images/govuk-opengraph-image.png)

With caption:

![A crown icon above the words GOV.UK](/assets/images/govuk-opengraph-image.png "The GOV.UK logo")

Linked:

[![The GOV.UK logo](/assets/images/govuk-apple-touch-icon.png)](https://www.gov.uk)

## Markdown extensions

### Typographic replacements

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

### Subscript

- H~2~O

### Superscript

- 19^th^

### Inserted text

++Inserted text++

### Marked text

==Marked text==

### Footnotes

Here’s a simple footnote,[^1] and here’s a longer one.[^big note]

[^1]: This is the first footnote.

[^big note]: Here’s one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

        { my code }

    Add as many paragraphs as you like.

### Definition lists

Term 1

: Definition 1
with lazy continuation.

Term 2 with *inline markup*

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

### Abbreviations

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language
