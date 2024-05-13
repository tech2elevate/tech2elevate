## Week 1 Content

### HTML Tags

- Activity: Go to favorite website and right click inspect
- Change text on the page
- HTML is made of up tags: opening tag `<ElementName>` closing tag `</ElementName>`
- For example:

```html
<div></div>
```

- These tags, plus the content inside or in between the tags, make up what are called **elements**. One type of element used often is a heading element

```html
<h1>Content Inside</h1>
```

- There are 6 different headings and sub-headings, each with a different size. They are used to differentiate sections on a page, just like headings in a book or table of contents

```html
<h1>Biggest</h1>
<h2>Bigger</h2>
<h3>Big</h3>
<h4>Small</h4>
<h5>Smaller</h5>
<h6>Smallest</h6>
```

- div

```html
<div>Biggest</div>
```

- paragraph

```html
<p>Biggest</p>
```

- link

```html
<link />
```

- button

```html
<button>Biggest</button>
```

- Some elements contain their closing tag within their opening tag. Image is one example.

```html
<img />
```

<iframe
  width="768"
  height="432"
  src="https://stackblitz.com/edit/js-rw1ae4?file=index.html"
  frameborder="0"
  scrolling="no"
  allow="fullscreen; clipboard-read; clipboard-write"
  allowfullscreen
></iframe>

### HTML w/ Attributes: Id and Class

- Attributes provide additional information about an HTML element.
- All HTML elements can have attributes.
- Atributes are always included in the opening tag.
- Attributes usually come in name/value pairs.

```html
<h1 id="student_id_num"></h1>
```

- id
- The id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.
- An id attribute is used to seperate a specific element apart.

```html
<h1 class="student_class_num"></h1>
```

- class
- The class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class.
- A class attribute is used to classify/group specific elements together.
