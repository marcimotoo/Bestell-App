# ByteBites Icons

## Enthalten

- Navigation: `menu`, `search`, `user`, `x`
- Warenkorb: `shopping-cart`, `plus`, `minus`, `trash-2`, `arrow-right`
- Informationen: `star`, `truck`, `map-pin`, `clock`, `check`, `circle-check`
- Kategorien: `hamburger`, `salad`, `soup`, `chef-hat`, `utensils`
- Socials: `instagram`, `youtube`, `twitch`, `tiktok`, `x-social`

## Einzelne SVG-Datei verwenden

```html
<img src="./assets/icons/shopping-cart.svg" alt="" aria-hidden="true">
```

Wenn ein Icon nur einen sichtbaren Button ergänzt, bleibt sein `alt` leer. Der Button selbst benötigt einen verständlichen Namen:

```html
<button type="button" aria-label="Warenkorb öffnen">
  <img src="./assets/icons/shopping-cart.svg" alt="">
</button>
```

## Sprite verwenden und per CSS färben

Den Inhalt von `bytebites-icons.svg` einmal versteckt in die HTML-Datei kopieren. Danach ein Symbol so einsetzen:

```html
<svg class="icon" aria-hidden="true">
  <use href="#icon-shopping-cart"></use>
</svg>
```

```css
.icon {
  width: 24px;
  height: 24px;
  color: #00ff99;
}
```

## Hinweise zur Accessibility

- Dekorative Icons mit `aria-hidden="true"` ausblenden.
- Icon-Buttons über sichtbaren Text oder `aria-label` benennen.
- Informationen nie ausschließlich durch ein Icon vermitteln.
- Social-Links beispielsweise mit `aria-label="ByteBites auf Instagram"` beschriften.

## Lizenz

Die allgemeinen UI-Icons basieren auf Lucide und stehen unter der ISC-Lizenz. Die Social-Symbole sind vereinfachte, projektbezogene Darstellungen und keine offiziellen Marken-Assets.
