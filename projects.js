/* ==========================================================================
   Project data
   Add a real project by copying one of these objects. Leave "src" empty
   ("") to keep showing the dashed placeholder box; fill it in with a path
   like "images/ad-campaign-01.jpg" once you have the real design saved
   in an images folder next to this file. The "id" is used in the page
   URL (work-detail.html?id=...), so keep it short and unique.
   ========================================================================== */

const PROJECTS = [
  {
    id: "ad-campaign-01",
    title: "Project title",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here: the problem the client brought to you, any constraints (platform, brand guidelines, timeline), and what success looked like for this project.",
    approach: "Explain the thinking behind the design decisions: layout, type, color, and how the piece was adapted across the sizes or formats it needed to run in.",
    cover: { src: "", alt: "", tag: "Ad_Campaign_01.jpg", size: "1920 x 1080px" },
    gallery: [
      { src: "", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_Wide.jpg", size: "2400 x 1000px", full: true }
    ]
  },
  {
    id: "email-series-01",
    title: "Project title",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "Images/Email 2.png", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "Images/Email 2.png", alt: "", tag: "Email 2.png", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Email_Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "site-ui-01",
    title: "Project title",
    category: "Website UI",
    categoryFilter: "ui",
    client: "Client name",
    year: "2026",
    deliverables: "5 page templates",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here: the product or site, who it's for, and what the interface needed to solve.",
    approach: "Explain the layout system, component choices, and how screens were prepared for handoff to a developer.",
    cover: { src: "", alt: "", tag: "Site_UI_01.jpg", size: "1600 x 1000px" },
    gallery: [
      { src: "", alt: "", tag: "UI_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "UI_Detail_02.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "UI_Full_Page.jpg", size: "2400 x 1200px", full: true }
    ]
  },
  {
    id: "ad-campaign-02",
    title: "Project title",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 3 sizes",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "", alt: "", tag: "Ad_Campaign_02.jpg", size: "1080 x 1350px" },
    gallery: [
      { src: "", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "site-ui-02",
    title: "Project title",
    category: "Website UI",
    categoryFilter: "ui",
    client: "Client name",
    year: "2026",
    deliverables: "Landing page",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "", alt: "", tag: "Site_UI_02.jpg", size: "1600 x 1000px" },
    gallery: [
      { src: "", alt: "", tag: "UI_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "UI_Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "email-series-02",
    title: "Project title",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "Newsletter template",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "", alt: "", tag: "Email_Series_02.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "", alt: "", tag: "Email_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Email_Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "ad-campaign-03",
    title: "Project title",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "", alt: "", tag: "Ad_Campaign_03.jpg", size: "1080 x 1080px" },
    gallery: [
      { src: "", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "site-ui-03",
    title: "Project title",
    category: "Website UI",
    categoryFilter: "ui",
    client: "Client name",
    year: "2026",
    deliverables: "App screens",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "", alt: "", tag: "Site_UI_03.jpg", size: "1600 x 1000px" },
    gallery: [
      { src: "", alt: "", tag: "UI_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "UI_Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "email-series-03",
    title: "Project title",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "Welcome series",
    summary: "Short line on the brief and the outcome.",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "", alt: "", tag: "Email_Series_03.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "", alt: "", tag: "Email_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Email_Detail_02.jpg", size: "1200 x 900px" }
    ]
  }
];

/* Ids shown in the homepage "Selected work" section, in order. */
const FEATURED_PROJECT_IDS = ["ad-campaign-01", "email-series-01", "site-ui-01", "ad-campaign-02"];

/* ==========================================================================
   Shared render helpers
   ========================================================================== */

/* Builds one .artboard element: a real image if image.src is filled in,
   otherwise the dashed placeholder box. Pass zoomable = true to make a
   real image open the large, click-to-zoom view (used on the detail
   page); leave it false/omitted for cards that should navigate instead
   (used on the works grid and homepage featured work). */
function buildArtboard(image, extraClass, zoomable) {
  var div = document.createElement("div");
  div.className = "artboard" + (extraClass ? " " + extraClass : "") + (zoomable ? " is-zoomable" : "");

  if (image && image.src) {
    var img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt || "";
    img.loading = "lazy";
    div.appendChild(img);
  } else {
    var tag = document.createElement("span");
    tag.className = "artboard-tag";
    tag.textContent = (image && image.tag) || "image.jpg";

    var label = document.createElement("div");
    label.className = "artboard-label";
    label.innerHTML = "<strong>Insert design here</strong>" + ((image && image.size) || "");

    div.appendChild(tag);
    div.appendChild(label);
  }
  return div;
}

function findProjectById(id) {
  for (var i = 0; i < PROJECTS.length; i++) {
    if (PROJECTS[i].id === id) return PROJECTS[i];
  }
  return null;
}
