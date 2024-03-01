---
layout: center
---

# Question of the Day

What is the first thing that comes to your mind when you think of style?
<img src="https://c8.alamy.com/comp/E1YGC8/style-word-written-on-white-board-E1YGC8.jpg" style="width:500px;" />

---

# What is CSS?

### Cascading Style Sheets

- A language used to add style to HTML files
  - Color
  - Size
  - Layout/Background
  - Font

---

## layout: center

# Example

---

# What does a CSS ruleset look like?

- There are two ways to add a CSS ruleset.
- The first is with a .css stylesheet, which looks something like:

```
h1 {
  color: red;
}
```

- The second way is called inline CSS:

```
<html>
    <body>
        <h1 style="color:red;">This is a paragraph.</h1>
    </body>
</html>
```

- See live coding example.

---

# What are the different types of selectors?

- Element

```
h1 {
  color: red;
}
```

- Class

```
.redText {
  color: red;
}
```

- Attribute (id)

```
#redTextId {
  color: red;
}
```

- Pseudo-class

```
a:hover {
  color: red;
}
```

- See live coding example.

---

# How do you select multiple elements?

- Say we wanted to make the color of the following HTML elements red:

```
<h1>Your Name Here</h1>
<h2>About me</h2>
<h3>My favorite foods</h3>
<h4>My favorite things to do</h3>
```

- You can achieve this by creating CSS ruleset with a comma separated list of selectors:

```
h1,h2,h3,h4 {
  color: red;
}
```

- See live coding example.

---

# Fonts

- How do you add fonts?

```
p {
font-family: "Times New Roman", Times, serif;
}
```

- How do you adjust the font size?

```
p {
  font-size: 14px;
}
```

- You can set any additional formatting text

```
p.thick {
font-weight: bold;
}
```

---

## layout: center

# Intro Page Exercise

---

## layout: center

# Project: Shopping Cart

---

## Resources (CSS)

- https://flexboxfroggy.com/
- https://css-tricks.com/css-basics-syntax-matters-syntax-doesnt/
- https://www.youtube.com/watch?v=qKoajPPWpmo
- https://www.youtube.com/watch?v=UO0ZPL8yMpU
- https://www.youtube.com/watch?v=JT0gyzbpD2U
