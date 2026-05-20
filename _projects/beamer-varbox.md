---
layout: page
title: beamer-varboxes
description: A LaTeX package
img: assets/img/corner_gif.gif
related_publications: false
---
<!-- <div style='text-align:justify;'> -->
<!-- When I started to make my own <code>beamer</code> template for presentations, I didn't like the way the standard, rounded <code>beamer</code> boxes looked. So I wrote some TikZ code to make a version I liked. Unfortunately, however, the code was terrible and slow. -->

<div class='row justify-content-sm-center'>
  <div class="col-sm-8 mt-3 mt-md-0" style='text-align:justify;'>
    The package <code>beamer-varbox</code> provides variable size corners for Beamer boxes. The current version is fairly simple and only has one option <code>cornerpercent</code>, which can be called either when importing the package or when setting the <code>beamer</code> template manually and set the scale of the corner relative to the standard corners of the <code>rounded</code> preset. The value 1 gives the standard corner from the predefined option <code>rounded</code>. The value 0 gives a sharp corner. The default value is 0.3.<br/><br/>

    The GIF on the right showcases the effect of different settings.
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/corner_gif.gif" title="cornerarc showcase" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

If you want to check it out and try it for yourself, you can do so by updating your [LaTeX distribution](https://ctan.org/pkg/beamer-varbox) and then calling <code>\usepackage{beamer-varbox}</code> in your preamble. Alternatively, you can manually install it from the source [Github](https://github.com/fabian-m-fuchs/beamer-varbox).
<!-- </div> -->