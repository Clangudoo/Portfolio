/* ==========================================================================
   Project data
   Add a real project by copying one of these objects. Each image/video
   slot (cover, and each item in gallery) is an object like:

     { src: "", type: "image", alt: "", tag: "Ad_01.jpg", size: "1200 x 900px" }

   Leave "src" empty ("") to keep showing the dashed placeholder box.
   For a photo or design file, fill "src" in with a path like
   "images/ad-campaign-01.jpg". For a video, set "type": "video", point
   "src" at a video file such as "videos/process-reel.mp4", and add a
   "poster" path to an image shown before the video plays. Keep video
   files reasonably small (an exported, compressed .mp4, not a raw
   screen recording) so pages stay fast to load.

   The "id" on each project is used in the page URL
   (work-detail.html?id=...), so keep it short and unique.
   ========================================================================== */

const PROJECTS = [
  {
    id: "ad-campaign-01",
    title: "Spec Ads 1 - The Body Shop",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    brief: "Describe the brief here: the problem the client brought to you, any constraints (platform, brand guidelines, timeline), and what success looked like for this project.",
    approach: "Explain the thinking behind the design decisions: layout, type, color, and how the piece was adapted across the sizes or formats it needed to run in.",
    cover: { src: "Images/Creative_Ads_1.png", alt: "", tag: "Creative_Ads_1.png", size: "1920 x 1080px" },
    gallery: [
      { src: "Images/Creative_Ads_1.png", alt: "", tag: "Creative_Ads_1.png", size: "1200 x 900px" },
    ]
  },
  {
    id: "ad-campaign-02",
    title: "Spec Ads 2 - The Body Shop",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 3 sizes",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "Images/Creative_Ads_2.png", alt: "", tag: "Ad_Campaign_02.jpg", size: "1080 x 1350px" },
    gallery: [
      { src: "Images/Creative_Ads_2.png", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
    ]
  },
  {
    id: "ad-campaign-03",
    title: "Spec Ads 3 - The Body Shop",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "Images/Creative_Ads_3.png", alt: "", tag: "Ad_Campaign_03.jpg", size: "1080 x 1080px" },
    gallery: [
      { src: "Images/Creative_Ads_3.png", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
    {
    id: "ad-campaign-04",
    title: "Spec Ads 4 - Vaebo",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "Images/Creative_Ads_4.png", alt: "", tag: "Ad_Campaign_03.jpg", size: "1080 x 1080px" },
    gallery: [
      { src: "Images/Creative_Ads_4.png", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
    {
    id: "ad-campaign-05",
    title: "Spec Ads 5 - Dermalogica",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "Images/Creative_Ads_5.png", alt: "", tag: "Ad_Campaign_03.jpg", size: "1080 x 1080px" },
    gallery: [
      { src: "Images/Creative_Ads_5.png", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
    {
    id: "ad-campaign-06",
    title: "Spec Ads 6 - The Body Shop",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "Images/Creative_Ads_6.png", alt: "", tag: "Ad_Campaign_03.jpg", size: "1080 x 1080px" },
    gallery: [
      { src: "Images/Creative_Ads_6.png", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
    {
    id: "ad-campaign-07",
    title: "Spec Ads 7 - Bearpaw",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "Images/Creative_Ads_7.png", alt: "", tag: "Ad_Campaign_03.jpg", size: "1080 x 1080px" },
    gallery: [
      { src: "Images/Creative_Ads_7.png", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
    {
    id: "ad-campaign-08",
    title: "Spec Ads 8 - Bearpaw",
    category: "Creative ads",
    categoryFilter: "ads",
    client: "Client name",
    year: "2026",
    deliverables: "Static ad set, 4 sizes",
    brief: "Describe the brief here.",
    approach: "Explain the thinking behind the design decisions.",
    cover: { src: "Images/Creative_Ads_8.png", alt: "", tag: "Ad_Campaign_03.jpg", size: "1080 x 1080px" },
    gallery: [
      { src: "Images/Creative_Ads_8.png", alt: "", tag: "Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "email-series-02",
    title: "Spec Email 2 - The Body Shop",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "Images/Email 3.png", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "Images/Email 3.png", alt: "", tag: "Email_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Email_Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
    {
    id: "email-series-03",
    title: "Spec Email 3 - Onnit",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "Images/Email 4.png", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "Images/Email 4.png", alt: "", tag: "Email_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Email_Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
      {
    id: "email-series-04",
    title: "Spec Email 4 - Bearpaw",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "Images/Email 5.png", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "Images/Email 5.png", alt: "", tag: "Email_Detail_01.jpg", size: "1200 x 900px" },
      { src: "", alt: "", tag: "Email_Detail_02.jpg", size: "1200 x 900px" }
    ]
  },
  {
    id: "site-ui-01",
    title: "Audio-Visual Department Calendar",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "vid/Projects/AVCalendar_vid.mp4", type: "video", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "vid/Projects/AVCalendar_vid.mp4", type: "video", poster: "", alt: "", tag: "Process_Reel.mp4", size: "1920 x 1080px, MP4", full: true }
    ]
  },
  {
    id: "site-ui-02",
    title: "LRTRS - LRT tracker",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "vid/Projects/LRTRS_vid.mp4", type: "video", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "vid/Projects/LRTRS_vid.mp4", type: "video", poster: "", alt: "", tag: "Process_Reel.mp4", size: "1920 x 1080px, MP4", full: true }
    ]
  },
  {
    id: "site-ui-03",
    title: "Sipa AI Game",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "vid/Projects/SipAIGame_vid.mp4", type: "video", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "vid/Projects/SipAIGame_vid.mp4", type: "video", poster: "", alt: "", tag: "Process_Reel.mp4", size: "1920 x 1080px, MP4", full: true }
    ]
  },
  {
    id: "site-ui-04",
    title: "2d Head Animation",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "vid/Extracurriculars/Extra3_vid.mp4", type: "video", alt: "", tag: "Email_Series_01.jpg", size: "1200 x 1600px" },
    gallery: [
      { src: "vid/Extracurriculars/Extra3_vid.mp4", type: "video", poster: "", alt: "", tag: "Process_Reel.mp4", size: "1920 x 1080px, MP4", full: true }
    ]
  },
  {
    id: "site-ui-05",
    title: "Trangkaso Facebook Carousel Post",
    category: "Email design",
    categoryFilter: "email",
    client: "Client name",
    year: "2026",
    deliverables: "3-part email series",
    brief: "Describe the brief here: who the audience was, what the emails needed to communicate, and any platform constraints (Klaviyo, Mailchimp, and so on).",
    approach: "Explain the layout and type decisions, and how the design was tested to hold up across inbox clients and screen widths.",
    cover: { src: "vid/Extracurriculars/Extra1_img.png", alt: "", tag: "Email_Series_01.jpg", size: "1500 x 1500px" },
    gallery: [
      { src: "vid/Extracurriculars/Extra1_img.png", poster: "", alt: "", tag: "Process_Reel.mp4", size: "1500 x 1500px, MP4", full: true }
    ]
  }
];

/* Ids shown in the homepage "Selected work" section, in order. */
const FEATURED_PROJECT_IDS = ["ad-campaign-01", "email-series-01", "site-ui-01", "ad-campaign-02"];

/* ==========================================================================
   Shared render helpers
   ========================================================================== */

/* Builds one .artboard element:
   - a real <img> if image.src is filled in and type is "image" (default)
   - a real <video> if image.src is filled in and type is "video"
   - the dashed placeholder box otherwise
   Pass zoomable = true for the detail page, where a video gets visible
   controls and an image opens the large click-to-zoom view. Leave it
   false/omitted for cards that should navigate instead (works grid,
   homepage featured work): there a video plays a silent preview on
   hover instead of showing controls. */
function buildArtboard(image, extraClass, zoomable) {
  var div = document.createElement("div");
  div.className = "artboard" + (extraClass ? " " + extraClass : "") + (zoomable ? " is-zoomable" : "");

  if (image && image.src && image.type === "video") {
    var video = document.createElement("video");
    video.src = image.src;
    if (image.poster) video.poster = image.poster;
    video.setAttribute("playsinline", "");
    video.muted = true;
    video.loop = true;
    video.preload = "metadata";
    if (zoomable) {
      video.controls = true;
      video.className = "video-full";
    } else {
      video.className = "video-preview";
    }
    div.appendChild(video);
  } else if (image && image.src) {
    var img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt || "";
    img.loading = "lazy";
    div.appendChild(img);
  } else {
    var tag = document.createElement("span");
    tag.className = "artboard-tag";
    tag.textContent = (image && image.tag) || "image.jpg";

    var kind = image && image.type === "video" ? "video" : "design";
    var label = document.createElement("div");
    label.className = "artboard-label";
    label.innerHTML = "<strong>Insert " + kind + " here</strong>" + ((image && image.size) || "");

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
