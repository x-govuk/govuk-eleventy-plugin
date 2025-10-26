---
layout: page
title: Markdown guide
description: Markdown is a lightweight markup language that allows you to add formatting to plain text documents.
---

<!-- markdownlint-disable no-inline-html -->

[[toc]]

## Paragraphs and line breaks

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown                                                                                                                                  | Rendered output                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block govuk-!-margin-0" tabindex="0">This is the first paragraph.<br><br>And this is the second one.</pre> | <p class="govuk-body">This is the first paragraph.</p><p class="govuk-body">And this is the second one.</p> |

To create a line break or new line (`<br>`), end a line with 2 or more spaces, and then type return.

| Markdown                                                                                                                         | Rendered output                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block govuk-!-margin-0" tabindex="0">This is the first line.<br>And this is the second one.</pre> | <p class="govuk-body">This is the first line.<br>And this is the second one.</p> |

## Headings

To create a heading, add number signs (`#`) in front of a word or phrase.

The number of number signs you use should correspond to the heading level. For example, to create a heading level 3 (`<h3>`), use 3 number signs (e.g., `### My Header`).

| Markdown                 | Rendered output                                  |
| ------------------------ | ------------------------------------------------ |
| `# Heading level 1`      | <h1 class="govuk-heading-l">Heading level 1</h1> |
| `## Heading level 2`     | <h2 class="govuk-heading-m">Heading level 2</h2> |
| `### Heading level 3`    | <h3 class="govuk-heading-s">Heading level 3</h3> |
| `#### Heading level 4`   | <h4 class="govuk-heading-s">Heading level 4</h4> |
| `##### Heading level 5`  | <h5 class="govuk-heading-s">Heading level 5</h5> |
| `###### Heading level 6` | <h6 class="govuk-heading-s">Heading level 6</h6> |

## Horizontal rules

To create a horizontal rule, use 3 or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.

```markdown
***
---
___
```

The rendered output of all 3 looks identical:

---

## Blockquotes

To create a blockquote, add a `>` in front of a paragraph.

```markdown
> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.
```

The rendered output looks like this:

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.

### Blockquotes with multiple paragraphs

Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

```markdown
> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.
>
> Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
```

The rendered output looks like this:

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.
>
> Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.

### Blockquotes with attribution

You can attribute a quote to its author by adding two hyphens (`--`) before the attribution you want to add.

```markdown
> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.
>
> Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
>
> -- Winston Churchill, [in a speech to the House of Commons](https://hansard.parliament.uk/Commons/1947-11-11/debates/ab1e1152-6b4a-4d04-ac38-954df6634b08/ParliamentBill#207). 11th November 1947
```

The rendered output looks like this:

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.
>
> Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
>
> -- Winston Churchill, [in a speech to the House of Commons](https://hansard.parliament.uk/Commons/1947-11-11/debates/ab1e1152-6b4a-4d04-ac38-954df6634b08/ParliamentBill#207). 11th November 1947

> [!TIP]
> To render blockquotes as inset text, disable the `blockquote` option for `markdown.govspeak`.

## Alerts

Alerts, based on the blockquote syntax, can be used emphasise critical information. [On GitHub they are displayed with distinctive colors and icons](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts), while pages rendered by the plugin use the [inset text component](https://design-system.service.gov.uk/components/inset-text/) from the GOV.UK Design System.

```markdown
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

The rendered output for the note alert type uses the standard design for inset text:

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

The rendered output for other alert types uses inset text with a coloured border and background:

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

You can also include a title:

```markdown
> [!NOTE] Check the MOT status of a vehicle
>
> If your vehicle is new, you must [get an MOT test](https://www.gov.uk/getting-an-mot) by the third anniversary of its registration.
```

The rendered output looks like this:

> [!NOTE] Check the MOT status of a vehicle
>
> If your vehicle is new, you must [get an MOT test](https://www.gov.uk/getting-an-mot) by the third anniversary of its registration.

## Lists

### Ordered lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

```markdown
1. First item
2. Second item
   1. Indented item
   1. Indented item
3. Third item
```

1. First item
2. Second item
   1. Indented item
   1. Indented item
3. Third item

### Unordered lists

To create an unordered list, add dashes (`-`), asterisks (`*`), or plus signs (`+`) in front of line items. Indent one or more items to create a nested list.

```markdown
- First item
- Second item
  - Indented item
  - Indented item
- Third item
```

- First item
- Second item
  - Indented item
  - Indented item
- Third item

#### Nesting different list types

You can also nest an unordered list in an ordered list, or vice versa.

```markdown
1. First item
2. Second item
   - Indented item
   - Indented item
3. Third item
```

1. First item
2. Second item
   - Indented item
   - Indented item
3. Third item

#### Starting unordered list items with numbers

If you need to start an unordered list item with a number followed by a period, you can use a backslash (`\`) to escape the period.

```markdown
- 2012\. A great year!
- I think 2009 was second best.
```

- 2012\. A great year!
- I think 2009 was second best.

### Description lists

To create a description list, type the term on the first line. On the next line, type a colon followed by a space and the description.

```markdown
First Term
: This is the description of the first term.

Second Term
: This is one description of the second term.
: This is another description of the second term.
```

The rendered output looks like this:

First Term
: This is the description of the first term.

Second Term
: This is one description of the second term.
: This is another description of the second term.

### Contents list

To add a table of contents, add the following Markdown where you want the list to appear on the page:

```markdown
[[toc]]
```

## Code

### Code spans

To denote a word or phrase as code, enclose it in backticks (`` ` ``).

```markdown
At the command prompt, type `npm install`.
```

At the command prompt, type `npm install`.

### Code blocks

By default, [Eleventy doesn’t support the Markdown syntax for indented code blocks](https://www.11ty.dev/docs/languages/markdown/#indented-code-blocks) because pages can render incorrectly should a layout or component include indented markup.

To include code blocks in your documentation, you should use fenced code blocks instead. These use 3 backticks (` ``` `) or 3 tildes (`~~~`) on the lines before and after the code block.

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

## Emphasised text

To emphasise text, add one asterisk or underscore before and after a word or phrase.

> [!NOTE]
> The [GDS Style Guide recommends against the use of italics](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#italics), and the GDS Transport font doesn’t provide an italic style. Use ‘single quotation marks’ if referring to a document, scheme or initiative.

| Markdown                     | Rendered output                                             |
| ---------------------------- | ----------------------------------------------------------- |
| `This text is *emphasised*.` | <p class="govuk-body">This text is <em>emphasised</em>.</p> |
| `This text is _emphasised_.` | <p class="govuk-body">This text is <em>emphasised</em>.</p> |

## Strongly emphasised text

To bold text, add 2 asterisks or underscores before and after a word or phrase.

> [!NOTE]
> The [GDS Style Guide recommends using emboldened text when referring to text from interfaces](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#bold) in technical documentation or instructions.

| Markdown                                | Rendered output                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| `This text is **strongly emphasised**.` | <p class="govuk-body">This text is <strong>strongly emphasised</strong>.</p> |
| `This text is __strongly emphasised__.` | <p class="govuk-body">This text is <strong>strongly emphasised</strong>.</p> |

## Deleted text

To show that certain words are a mistake not meant for inclusion in the document, use 2 tilde symbols (`~~`) before and after the words.

```markdown
~~The world is flat.~~ We now know that the world is round.
```

The rendered output looks like this:

~~The world is flat.~~ We now know that the world is round.

## Inserted text

To show inserted text, use 2 plus signs (`++`) before and after the words. You can use this alongside the syntax for [deleted text](#deleted-text).

```text
I need to ~~remove~~ ++insert++ a word.
```

The rendered output looks like this:

I need to ~~remove~~ ++insert++ a word.

## Highlighted text

To highlight words, use 2 equal signs (`==`) before and after the words.

```text
I need to highlight these ==important words==.
```

The rendered output looks like this:

I need to highlight these ==important words==.

## Subscript and superscript text

For subscript text, use one tilde symbol (`~`) before and after the characters.

```text
H~2~O
```

The rendered output looks like this:

H~2~O

For superscript text, use one caret symbol (`^`) before and after the characters.

```text
X^2^
```

The rendered output looks like this:

X^2^

## Links

To create a link, enclose the link text in brackets (e.g., `[GOV.UK]`) and then follow it with the URL in parentheses (e.g., `(https://www.gov.uk)`).

```markdown
Visit [GOV.UK](https://www.gov.uk).
```

The rendered output looks like this:

Visit [GOV.UK](https://www.gov.uk).

### URLs and email addresses

To turn a URL or email address into a link, enclose it in angle brackets.

```markdown
<https://www.gov.uk>
<mailbox@example.org>
```

The rendered output looks like this:

<https://www.gov.uk>  
<mailbox@example.org>

### Formatting links

To [emphasise](#emphasised-text) links, add asterisks before and after the brackets and parentheses. To denote links as [code](#code), add backticks in the brackets.

```markdown
Visit the **[Markdown Guide](https://www.markdownguide.org)**.
See the section on [`code`](#code).
```

The rendered output looks like this:

Visit the **[Markdown Guide](https://www.markdownguide.org)**.  
See the section on [`code`](#code).

## Images

To add an image, add an exclamation mark (`!`), followed by alternative text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a caption in quotation marks after the path or URL.

The rendered output looks like this:

```markdown
![High angle photo of assorted-colour plastic balls.](/assets/post-image.jpg 'Photo by Greyson Joralemon')
```

![High angle photo of assorted-colour plastic balls.](/assets/post-image.jpg 'Photo by Greyson Joralemon')

### Linking images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```markdown
[![A stylised crown icon.](/assets/rebrand/images/govuk-icon-180.png)](https://www.gov.uk)
```

The rendered output looks like this:

[![A stylised crown icon.](/assets/rebrand/images/govuk-icon-180.png)](https://www.gov.uk)

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

## Footnotes

Footnotes allow you to add notes and references without cluttering the body of the document.

When you create a footnote, a superscript number with a link appears where you added the footnote reference. Readers can click the link to jump to the content of the footnote at the bottom of the page.

To create a footnote reference, add a caret and an identifier inside brackets (`[^1]`).

Identifiers can be numbers or words, but they can’t contain spaces or tabs. Identifiers correlate the footnote reference with the footnote itself — in the output, footnotes get numbered sequentially.

Add the footnote using another caret and number inside brackets with a colon and text (`[^1]: My footnote.`).

You don’t have to put footnotes at the end of the document. You can put them anywhere except inside other elements like lists, blockquotes, and tables.

```markdown
Here’s a simple footnote,[^1] and here’s a longer one.[^longer]

[^1]: This is the first footnote.

[^longer]: Here’s the second, which has 2 paragraphs.

    Indent any following paragraphs to include them in the footnote.
```

The rendered output looks like this:

Here’s a simple footnote,[^1] and here’s a longer one.[^longer]

[^1]: This is the first footnote.

[^longer]: Here’s the second, which has 2 paragraphs.

    Indent any following paragraphs to include them in the footnote.

## Typographic replacements

| Description          | Text                  | Rendered output     |
| -------------------- | --------------------- | ------------------- |
| En dash              | `--`                  | --                  |
| Em dash              | `---`                 | ---                 |
| Ellipsis             | `...`                 | ...                 |
| Single quotes        | `'single'`            | 'single'            |
| Double quotes        | `"double"`            | "double"            |
| Simple fractions     | `1/2 1/3 2/3 1/4 3/4` | 1/2 1/3 2/3 1/4 3/4 |
| Multiplication       | `2 x 3`               | 2 x 3               |
| Greater than         | `2 => 1`              | 2 => 1              |
| Less than            | `1 <= 2`              | 1 <= 2              |
| Plus-minus           | `2.4 +-1`             | 2.4 +-1             |
| Guillemets           | `<<Bonjour!>>`        | <<Bonjour!>>        |
| Copyright            | `(C)` `(c)`           | (C)                 |
| Registered trademark | `(R)` `(r)`           | (R)                 |
| Trademark            | `(TM)` `(tm)`         | (TM)                |

## Govspeak

[Govspeak](https://github.com/alphagov/govspeak) is a simplified version of Markdown used on GOV.UK. It’s designed to be as easy-to-read and easy-to-write as possible, using simple punctuation instead of complicated tags and code.

Configure Govspeak extensions using the `markdown.govspeak` option.

### Addresses

To create an address box, add `$A` before and after the address.

```markdown
$A
HM Revenue and Customs
Bradford
BD98 1YY
$A
```

The rendered output looks like this:

$A
HM Revenue and Customs
Bradford
BD98 1YY
$A

Do not use bold for the address title. This is not accessible because it looks like a heading and can be confusing for users of assistive technology. Use heading Markdown above the address Markdown instead if you need to draw attention to the information.

### Callouts

To draw attention to content, you can use callouts. For example, you can put some text in an information callout to indicate that it’s something related that’s worth knowing, or does not fit the flow of the content.

#### Example callout

To create an example callout, add `$E` before and after the block of text you want to callout as an example.

```markdown
$E
**Example** This is an indented example block.
It may span multiple lines and [contain links](#).

It may even span multiple paragraphs.
$E
```

The rendered output looks like this:

$E
**Example** This is an indented example block.
It may span multiple lines and [contain links](#).

It may even span multiple paragraphs.
$E

#### Information callout

To create an information callout, add one `^` before and after a word or phrase.

```markdown
^The water in the mouth of a blue whale weighs more than its body.^
```

The rendered output looks like this:

^The water in the mouth of a blue whale weighs more than its body.^

#### Warning callout

To create a warning callout, add one `%` before and after a word or phrase.

```markdown
%You can be fined up to £5,000 if you do not register.%
```

The rendered output looks like this:

%You can be fined up to £5,000 if you do not register.%
