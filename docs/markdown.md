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

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Larry the cat sat on the cabinet table](https://www.gov.uk/assets/government-frontend/history/buildings/larry-the-cat-a47549e08bdbc6cd0e3e042eea943f65b7a4590d95642586e51acb44bb2dcea2.jpg)

With caption:

![Larry the cat sat on the cabinet table](https://www.gov.uk/assets/government-frontend/history/buildings/larry-the-cat-a47549e08bdbc6cd0e3e042eea943f65b7a4590d95642586e51acb44bb2dcea2.jpg 'Larry the cat')

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

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnotes **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

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
