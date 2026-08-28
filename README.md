# Portfolio site — how to run and edit it

Plain HTML, CSS and JavaScript. No build step, no framework, no dependencies.

## Run it

Double-click `index.html`. That is it.

For a slightly more realistic preview (and to avoid browser quirks with local
files), run a tiny server from this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

```
index.html        Homepage: intro, focus cards, experience, academic timeline
projects.html     Project grid with tag filtering
css/styles.css    All styling. Design tokens are at the top.
js/data.js        >>> ALL YOUR CONTENT. This is the file you edit. <<<
js/main.js        Turns data.js into HTML. You rarely need to touch this.
assets/logos/     Company and university logos (placeholders included)
assets/projects/  Project screenshots (empty — drop images here)
```

## Editing content

Everything visible lives in `js/data.js`, split into four lists:

| List | Feeds |
|---|---|
| `PROFILE` | intro text, metadata strip, focus cards, contact links, CV link |
| `EXPERIENCE` | the Experience section |
| `TIMELINE` | the academic timeline (degrees + extracurriculars) |
| `PROJECTS` | the projects page |

To add an entry, copy an existing block from `{` to `}`, paste it below,
and change the text. Keep the commas between blocks.

**Empty fields disappear.** Set `image: ""` and the card shows the image
placeholder; set `repo: ""` and the GitHub button becomes a "add link"
placeholder; set `github: ""` in `PROFILE` and the footer link is hidden.

### Timeline: academic vs extracurricular

Each timeline entry has a `kind`:

- `"academic"` — full-size, with logo, filled marker on the track
- `"extracurricular"` — smaller, muted, hollow marker

Entries render in the order you write them, top to bottom.

### Logos

`assets/logos/` contains dashed placeholder squares with initials. Replace a
file with the real logo, keep the same filename, and it appears automatically.
If a file is missing or fails to load, the site falls back to the initials —
the layout never breaks.

A note on logos: company and university marks are trademarks. Using them to
say where you worked or studied is normal in a portfolio; do not restyle or
recolour them, and use official versions from each brand's press or media page.

### Project images

Save screenshots in `assets/projects/` (16:9 crops look best) and point to them:

```js
image: "assets/projects/palermo-landcover.png",
```

### Your CV

Drop the PDF at `assets/FernandoBarcelata_CV.pdf`, or change the `cv` path in
`PROFILE`. The button hides itself if you set it to `""`.

## Changing the look

Open `css/styles.css` and edit the variables in the `:root` block at the top —
colours, fonts, max page width, spacing. Everything else derives from them.

The accent (`--nir`, magenta) is used sparingly on purpose: section markers,
hover states, link underlines. If you change it, change it there only.

Fonts load from Google Fonts via a `<link>` in each HTML file. Remove those
lines to go fully offline; the CSS falls back to system fonts.

