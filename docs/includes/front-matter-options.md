Use these options to customise the appearance, content and behaviour of any layout.

| Name | Type | Description |
| :--- | :--- | :---------- |
| **layout** | string | Page layout. |
| **includeInBreadcrumbs** | boolean | Include page as the last item in any breadcrumbs. Default is `false`. |
| **order** | number | Ranking of page in navigation. Lower numbers appear before pages with a higher number. |
| **title** | string | Page title. |
| **description** | string | Page description. |
| **opengraphImage** | object | Open Graph image that appears on social media networks. |
| **opengraphImage.src** | string | Path to Open Graph image. Can be a relative or absolute URL. This value overrides `opengraphImageUrl` in plugin options. |
| **opengraphImage.alt** | string | Alternative text for Open Graph image. |
| **aside** | object | Small portion of content that is indirectly related to the main content. |
| **aside.title** | string | Title for aside. |
| **aside.content** | string | Content for aside. Accepts Markdown. |
| **related** | object | Related links. See [related](#options-for-related). |

### Options for related

With one section:

| Name | Type | Description |
| :--- | :--- | :---------- |
| **title** | string | Title for group of related links. Default is `'Related content'`. |
| **items** | array | See [items](#options-for-items). |
| **subsections** | array | Title for sub-group of related links. |
| **subsections.title** | string | |
| **subsections.items** | array | See [items](#options-for-items). |

With multiple sections:

| Name | Type | Description |
| :--- | :--- | :---------- |
| **sections** | array | See [items](#options-for-related). |

### Options for items

| Name | Type | Description |
| :--- | :--- | :---------- |
| **text** | string | Title of related content. |
| **href** | string | Link for the related content. |
