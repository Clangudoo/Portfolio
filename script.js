document.addEventListener("DOMContentLoaded", function () {

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav-list");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ------------------------------------------------------------------
     Cover image: scrollable/pannable directly on the page, no click
     needed first. Trackpad and touch scroll it natively since the
     container just uses normal overflow; this adds click-and-drag
     support for mouse users. A drag is not treated as a click, so it
     will not also pop open the lightbox below.
     ------------------------------------------------------------------ */
  document.querySelectorAll(".detail-cover").forEach(function (cover) {
    var isDown = false;
    var dragged = false;
    var startX, startY, scrollLeft, scrollTop;

    cover.scrollTop = 0;
    cover.scrollLeft = 0;

    var coverImg = cover.querySelector("img");
    if (coverImg) {
      coverImg.addEventListener("load", function () {
        cover.scrollTop = 0;
        cover.scrollLeft = 0;
      });
    }

    cover.addEventListener("mousedown", function (e) {
      isDown = true;
      dragged = false;
      cover.classList.add("is-panning");
      startX = e.pageX;
      startY = e.pageY;
      scrollLeft = cover.scrollLeft;
      scrollTop = cover.scrollTop;
    });

    window.addEventListener("mouseup", function () {
      isDown = false;
      cover.classList.remove("is-panning");
    });

    window.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      var dx = e.pageX - startX;
      var dy = e.pageY - startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragged = true;
      cover.scrollLeft = scrollLeft - dx;
      cover.scrollTop = scrollTop - dy;
    });

    cover.addEventListener("click", function (e) {
      if (dragged) {
        e.stopPropagation();
        dragged = false;
      }
    });
  });

  /* ------------------------------------------------------------------
     Lightbox: click any real image inside an .artboard to view it
     large, click again to zoom in and scroll around, click the
     backdrop or press Escape to close. Placeholder boxes (no <img>
     inside) are not clickable.
     ------------------------------------------------------------------ */
  var overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close image">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>' +
    "</button>" +
    '<p class="lightbox-hint">Click the image to zoom in</p>' +
    '<div class="lightbox-frame"><img class="lightbox-img" src="" alt=""></div>';

  document.body.appendChild(overlay);

  var lightboxImg = overlay.querySelector(".lightbox-img");
  var closeBtn = overlay.querySelector(".lightbox-close");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightboxImg.classList.remove("is-zoomed");
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lightboxImg.classList.remove("is-zoomed");
    lightboxImg.src = "";
  }

  /* Delegate so it also works on images rendered dynamically
     (works grid, home featured work, work detail page). */
  document.addEventListener("click", function (e) {
    var img = e.target.closest(".artboard.is-zoomable img");
    if (!img) return;
    e.preventDefault();
    openLightbox(img.src, img.alt);
  });

  lightboxImg.addEventListener("click", function () {
    lightboxImg.classList.toggle("is-zoomed");
  });

  closeBtn.addEventListener("click", closeLightbox);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  /* ------------------------------------------------------------------
     Works page filter (only runs if the filter row exists, works
     whether cards are static or rendered from PROJECTS).
     ------------------------------------------------------------------ */
  var filterRow = document.querySelector(".filter-row");
  if (filterRow) {
    filterRow.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;

      var category = btn.getAttribute("data-filter");
      filterRow.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      document.querySelectorAll(".work-item").forEach(function (item) {
        var itemCategory = item.getAttribute("data-category");
        item.hidden = !(category === "all" || itemCategory === category);
      });
    });
  }
});
