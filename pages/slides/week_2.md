---
layout: iframe-right
url: http://localhost:1234/final/src/about/about
---

# What is HTML?

- Stands for **H**yper**T**ext **M**arkup **L**anguage
- Tells the web browser what structure the page will be
- Made of [elements](https://developer.mozilla.org/en-US/docs/Glossary/Element) that allow you to make things look that way you want

---

---

# What does an HTML document look like?

The `index.html` file is the staring point to website and it usually looks something like this:

```html {1|2,10|3,7|4|6|9}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>About Me</title>
  </head>

  <body></body>
</html>
```

- `<!doctype html>` tells the browser not to use [no-quirks mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- `<html></html>` is the root element
- the `lang` attribute tells the browser which language to use
- `<head>` contains the metadata like he title, scripts and style sheets to be read by the machine
- `<body>` is where the content belongs and there can only be `1`

---

---

# What does a HTML element look like?

The element is the opening tag, followed by content, followed by the closing tag.

```html
<p>This is a paragraph</p>
```

- `<p>` is the opening tag
  - The name of the element, wrapped in opening and closing angle brackets which marks where the element begins or starts to take effect.
- `This is a paragraph` is content of the element.
- `</p>` is the closing tag
  - The name of the element with forward slash before the element name which marks where the element ends.

---

layout: iframe-right
url: http://localhost:1234/week_2/headings.html

---

# How do you display text?

Most webpages that are content heavy will be made of paragraphs and headings.

## Headings

```html
<h1>Your Name Here</h1>
<h2>About me</h2>
<h3>My favorite foods</h3>
<h3>My favorite things to do</h3>
```

- Headings allow us to give structure to content
- There should only be one `h1` as the top heading
- Headings should follow order from `1` to `6`

---

---

# How do you display paragraphs?

```html {1-3|2}
<p>
  <i>feel free to add/update/change any of this section</i>
</p>
<p>
  I am in _____ grade and I like to _____. My favorite subject is ______. I have
  ______ siblings.
</p>
<p>
  <i>anything else you would like to add</i>
</p>
```

- usually viewed as blocks of text separated from other blocks by blank lines
- can be any structural grouping of related content such
- `<i>` can be used to make text italic

---

layout: iframe
url: http://localhost:1234/week_2/paragraphs.html

---

---

---

# How do you display a link?

```html
<h3>
  My favorite website is
  <a href="https://unsplash.com/" target="_blank"> unsplash </a>
</h3>
```

- Allows us to link other pages or websites, or parts of a documents
- The `href` attribute allows us to define where the link will take you
- You can tell it open in new tab by adding `target="_blank"`

---

layout: iframe
url: http://localhost:1234/week_2/links.html

---

---

layout: iframe-right
url: http://localhost:1234/week_2/images.html

---

# How do you display an image?

```html
<img src="./puppies.jpeg" />
```

```html
<img src="holder.js/300x200" />
```

- we use the `src` to tell the browser which path to the image to use
- we can use an image that is locally or an external image
