---
layout: side-navigation
order: 3
title: Basic Markdown syntax
description: Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
related:
  items:
  - text: Markdown Guide
    href: https://www.markdownguide.org
---
## Headings

To create a heading, add number signs (`#`) in front of a word or phrase.

The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., `### My Header`).

| Markdown | Rendered output |
| - | - |
| `# Heading level 1` | <h1 class="govuk-heading-l">Heading level 1</h1> |
| `## Heading level 2` | <h2 class="govuk-heading-m">Heading level 2</h2> |
| `### Heading level 3` | <h3 class="govuk-heading-s">Heading level 3</h3> |
| `#### Heading level 4` | <h4 class="govuk-heading-s">Heading level 4</h4> |
| `##### Heading level 5` | <h5 class="govuk-heading-s">Heading level 5</h5> |
| `###### Heading level 6` | <h6 class="govuk-heading-s">Heading level 6</h6> |

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown | Rendered output |
| - | - |
| <pre class="x-govuk-code x-govuk-code--block govuk-!-margin-0" tabindex="0">This is the first paragraph.<br><br>And this is the second one.</pre> | <p class="govuk-body">This is the first paragraph.</p><p class="govuk-body">And this is the second one.</p> |

## Line breaks

To create a line break or new line (`<br>`), end a line with two or more spaces, and then type return.

| Markdown | Rendered output |
| - | - |
| <pre class="x-govuk-code x-govuk-code--block govuk-!-margin-0" tabindex="0">This is the first line.<br>And this is the second one.</pre> | <p class="govuk-body">This is the first line.<br>And this is the second one.</p> |

## Emphasis

To emphasise text, add one asterisk or underscore before and after a word or phrase.

> The [GDS Style Guide recommends against the use of italics](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#italics), and the GDS Transport font doesn’t provide an italic style. Use ‘single quotation marks’ if referring to a document, scheme or initiative.

| Markdown | Rendered output |
| - | - |
| `This text is *emphasised*.` | <p class="govuk-body">This text is <em>emphasised</em>.</p> |
| `This text is _emphasised_.` | <p class="govuk-body">This text is <em>emphasised</em>.</p> |

## Strong emphasis

To bold text, add two asterisks or underscores before and after a word or phrase.

> The [GDS Style Guide recommends only using emboldened text when referring to text from interfaces](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#bold) in technical documentation or instructions.

| Markdown | Rendered output |
| - | - |
| `This text is **strongly emphasised**.` | <p class="govuk-body">This text is <strong>strongly emphasised</strong>.</p> |
| `This text is __strongly emphasised__.` | <p class="govuk-body">This text is <strong>strongly emphasised</strong>.</p> |

## Blockquotes

To create a blockquote, add a `>` in front of a paragraph.

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.

### Blockquotes with Multiple Paragraphs

Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Nested Blockquotes

Blockquotes can be nested. Add a `>>` in front of the paragraph you want to nest.

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Blockquotes with Other Elements

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you'll need to experiment to see which ones work.

```markdown
> #### Quarterly results
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> Everything is going according to **plan**.
```

The rendered output looks like this:

> #### Quarterly results
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> Everything is going according to **plan**.

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
  * Indented item
  * Indented item
- Third item
```

- First item
- Second item
  * Indented item
  * Indented item
- Third item

#### Nesting different list types

You can also nest an unordered list in an ordered list, or vice versa.

```markdown
1. First item
2. Second item
   * Indented item
   * Indented item
3. Third item
```

1. First item
2. Second item
   * Indented item
   * Indented item
3. Third item

#### Starting unordered list items with numbers

If you need to start an unordered list item with a number followed by a period, you can use a backslash (`\`) to escape the period.

```markdown
- 1968\. A great year!
- I think 1969 was second best.
```

- 1968\. A great year!
- I think 1969 was second best.

## Code

### Code spans

To denote a word or phrase as code, enclose it in backticks (```).

```markdown
At the command prompt, type `npm install`.
```

At the command prompt, type `npm install`.

### Code blocks

To create code blocks, indent every line of the block by at least four spaces or one tab.

```markdown
    console.log('Hello, world!')
```

    console.log('Hello, world!')

## Horizontal rules

To create a horizontal rule, use three or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.

```markdown
___

---

***
```

The rendered output of all three looks identical:

***

## Links

[link text](https://www.gov.uk)

[link with title](https://www.gov.uk "Visit GOV.UK")

Autolinked text: https://www.gov.uk

## Images

To add an image, add an exclamation mark (`!`), followed by alternative text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a caption in quotation marks after the path or URL.

The rendered output looks like this:

```markdown
![A crown icon above the words GOV.UK](/assets/images/govuk-opengraph-image.png "The GOV.UK logo")
```

![A crown icon above the words GOV.UK](/assets/images/govuk-opengraph-image.png "The GOV.UK logo")

### Linking images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```markdown
[![A crown icon above the words GOV.UK](/assets/images/govuk-apple-touch-icon-180x180.png "Visit GOV.UK")](https://www.gov.uk)
```

The rendered output looks like this:

[![A crown icon above the words GOV.UK](/assets/images/govuk-apple-touch-icon-180x180.png "Visit GOV.UK")](https://www.gov.uk)
