---
layout: sub-navigation
order: 5
title: Markdown
description: A lightweight markup language that allows you to add formatting to plain text text documents.
related:
  sections:
    - items:
        - text: Markdown Guide
          href: https://www.markdownguide.org
---

[[toc]]

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

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown                                                                                                                                  | Rendered output                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block govuk-!-margin-0" tabindex="0">This is the first paragraph.<br><br>And this is the second one.</pre> | <p class="govuk-body">This is the first paragraph.</p><p class="govuk-body">And this is the second one.</p> |

## Line breaks

To create a line break or new line (`<br>`), end a line with 2 or more spaces, and then type return.

| Markdown                                                                                                                         | Rendered output                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block govuk-!-margin-0" tabindex="0">This is the first line.<br>And this is the second one.</pre> | <p class="govuk-body">This is the first line.<br>And this is the second one.</p> |

## Emphasis

To emphasise text, add one asterisk or underscore before and after a word or phrase.

> The [GDS Style Guide recommends against the use of italics](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#italics), and the GDS Transport font doesn’t provide an italic style. Use ‘single quotation marks’ if referring to a document, scheme or initiative.

| Markdown                     | Rendered output                                             |
| ---------------------------- | ----------------------------------------------------------- |
| `This text is *emphasised*.` | <p class="govuk-body">This text is <em>emphasised</em>.</p> |
| `This text is _emphasised_.` | <p class="govuk-body">This text is <em>emphasised</em>.</p> |

## Strong emphasis

To bold text, add 2 asterisks or underscores before and after a word or phrase.

> The [GDS Style Guide recommends only using emboldened text when referring to text from interfaces](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#bold) in technical documentation or instructions.

| Markdown                                | Rendered output                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| `This text is **strongly emphasised**.` | <p class="govuk-body">This text is <strong>strongly emphasised</strong>.</p> |
| `This text is __strongly emphasised__.` | <p class="govuk-body">This text is <strong>strongly emphasised</strong>.</p> |

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

### Nested blockquotes

Blockquotes can be nested. Add a `>>` in front of the paragraph you want to nest.

```markdown
> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.
>
> > Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
```

The rendered output looks like this:

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise.
>
> > Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.

### Blockquotes with other elements

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you'll need to experiment to see which ones work.

```markdown
> #### Check the MOT status of a vehicle
>
> If your vehicle is new, you must [get an MOT test](https://www.gov.uk/getting-an-mot) by the third anniversary of its registration.
```

The rendered output looks like this:

> #### Check the MOT status of a vehicle
>
> If your vehicle is new, you must [get an MOT test](https://www.gov.uk/getting-an-mot) by the third anniversary of its registration.

## Lists

You can organize items into ordered and unordered lists.

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

## Code

### Code spans

To denote a word or phrase as code, enclose it in backticks (`` ` ``).

```markdown
At the command prompt, type `npm install`.
```

At the command prompt, type `npm install`.

### Code blocks

By default, [Eleventy doesn’t support the Markdown syntax for indented code blocks](https://www.11ty.dev/docs/languages/markdown/#indented-code-blocks) because pages can get rendered incorrectly should a layout or component include indented markup.

To include code blocks in your documentation, use [fenced code blocks](../markdown-advanced/#fenced-code).

## Horizontal rules

To create a horizontal rule, use 3 or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.

```markdown
---
---

---
```

The rendered output of all 3 looks identical:

---

## Links

To create a link, enclose the link text in brackets (e.g., `[GOV.UK]`) and then follow it immediately with the URL in parentheses (e.g., `(https://www.gov.uk)`).

```markdown
Visit [GOV.UK](https://www.gov.uk).
```

The rendered output looks like this:

Visit [GOV.UK](https://www.gov.uk).

### URLs and email addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets.

```markdown
<https://www.gov.uk>
<mailbox@example.org>
```

The rendered output looks like this:

<https://www.gov.uk>  
<mailbox@example.org>

### Formatting links

To [emphasize](../markdown#emphasis) links, add asterisks before and after the brackets and parentheses. To denote links as [code](../markdown#code), add backticks in the brackets.

```markdown
Visit the **[Markdown Guide](https://www.markdownguide.org)**.
See the section on [`code`](../markdown#code).
```

The rendered output looks like this:

Visit the **[Markdown Guide](https://www.markdownguide.org)**.  
See the section on [`code`](../markdown#code).

## Images

To add an image, add an exclamation mark (`!`), followed by alternative text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a caption in quotation marks after the path or URL.

The rendered output looks like this:

```markdown
![A crown icon above the words GOV.UK.](/assets/images/govuk-opengraph-image.png "The GOV.UK logo")
```

![A crown icon above the words GOV.UK.](/assets/images/govuk-opengraph-image.png 'The GOV.UK logo')

### Linking images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```markdown
[![A crown icon above the words GOV.UK.](/assets/images/govuk-icon-180.png 'Visit GOV.UK')](https://www.gov.uk)
```

The rendered output looks like this:

[![A crown icon above the words GOV.UK.](/assets/images/govuk-icon-180.png 'Visit GOV.UK')](https://www.gov.uk)

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
| Section              | `(P)` `(p)`           | (P)                 |
