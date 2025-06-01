---
layout: sub-navigation
order: 6
title: Advanced Markdown
description: The plugin supports extra Markdown syntax to ensure pages can contain elements like tables, code blocks and footnotes.
related:
  sections:
    - items:
      - text: Markdown Guide
        href: https://www.markdownguide.org
---

[[toc]]

## Table of contents

The contents list above is generated automatically. To add a table of contents to a page, add the following Markdown:

```markdown
[[toc]]
```

## Tables

To add a table, use 3 or more hyphens (`---`) to create each column’s header, and use pipes (`|`) to separate each column.

```markdown
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

The rendered output looks like this:

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

Cell widths can vary, as shown below. The rendered output will look the same.

```markdown
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
```

### Alignment

You can align text in the columns to the left, right, or center by adding a colon (`:`) to the left, right, or on both side of the hyphens within the header row.

```markdown
| Syntax    | Description | Test Text   |
| :-------- | :---------: | ----------: |
| Header    | Title       | Here’s this |
| Paragraph | Text        | And more    |
```

The rendered output looks like this:

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here’s this |
| Paragraph |    Text     |    And more |

## Fenced code

The basic Markdown syntax allows you to create [code blocks](/markdown#code-blocks) by indenting lines by 4 spaces or one tab. If you find that inconvenient, try using fenced code blocks. You can use 3 backticks (` ``` `) or 3 tildes (`~~~`) on the lines before and after the code block.

````markdown
```
{
  "firstName": "William",
  "lastName": "Pitt",
  "age": 24
}
```
````

The rendered output looks like this:

```text
{
  "firstName": "William",
  "lastName": "Pitt",
  "age": 24
}
```

### Syntax highlighting

This feature allows you to add color highlighting different programming languages. To add syntax highlighting, specify a language next to the backticks before the fenced code block.

````markdown
```json
{
  "firstName": "William",
  "lastName": "Pitt",
  "age": 24
}
```
````

The rendered output looks like this:

```json
{
  "firstName": "William",
  "lastName": "Pitt",
  "age": 24
}
```

## Footnotes

Footnotes allow you to add notes and references without cluttering the body of the document.

When you create a footnote, a superscript number with a link appears where you added the footnote reference. Readers can click the link to jump to the content of the footnote at the bottom of the page.

To create a footnote reference, add a caret and an identifier inside brackets (`[^1]`).

Identifiers can be numbers or words, but they can’t contain spaces or tabs. Identifiers correlate the footnote reference with the footnote itself — in the output, footnotes get numbered sequentially.

Add the footnote using another caret and number inside brackets with a colon and text (`[^1]: My footnote.`).

You don’t have to put footnotes at the end of the document. You can put them anywhere except inside other elements like lists, block quotes, and tables.

```markdown
Here’s a simple footnote,[^1] and here’s a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here’s one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

The rendered output looks like this:

Here’s a simple footnote,[^1] and here’s a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here’s one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## Definition lists

To create a definition list, type the term on the first line. On the next line, type a colon followed by a space and the definition.

```markdown
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```

The rendered output looks like this:

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

## Strike-through

You can strike-through words by putting a horizontal line through the center of them. The result looks ~~like this~~. This feature allows you to show that certain words are a mistake not meant for inclusion in the document. To strike-through words, use 2 tilde symbols (`~~`) before and after the words.

```markdown
~~The world is flat.~~ We now know that the world is round.
```

The rendered output looks like this:

~~The world is flat.~~ We now know that the world is round.

## Highlighted text

To highlight words, use 2 equal signs (`==`) before and after the words.

```text
I need to highlight these ==very important words==.
```

The rendered output looks like this:

I need to highlight these ==very important words==.

## Inserted text

To show inserted text, use 2 plus signs (`++`) before and after the words. You can use this alongside the syntax for [strike-though](#strike-through).

```text
I need to ~~remove~~ ++insert++ a word.
```

The rendered output looks like this:

I need to ~~remove~~ ++insert++ a word.

## Subscript

For subscript text, use one tilde symbol (`~`) before and after the characters.

```text
H~2~O
```

The rendered output looks like this:

H~2~O

## Superscript

For superscript text, use one caret symbol (`^`) before and after the characters.

```text
X^2^
```

The rendered output looks like this:

X^2^
