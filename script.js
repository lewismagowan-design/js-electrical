/* =========================================================
   Mobile navigation toggle
   ========================================================= */
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  // Closing the mobile menu after clicking any navigation link
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });

  // Closing the mobile menu when clicking outside of it
  document.addEventListener("click", (event) => {
    const clickedInsideNav = siteNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
      siteNav.classList.remove("open");
    }
  });

  // Closing the mobile menu with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      siteNav.classList.remove("open");
    }
  });
}

/* =========================================================
   Footer year
   ========================================================= */
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================================
   Customer review data
   Keeping the review data here means the site stays free
   and does not rely on Google APIs.

   TO ADD A NEW REVIEW: copy a Google review and paste it in as
   a new object anywhere in the list below (order doesn't matter,
   newest is always shown first automatically). Use this template:

   {
     name: "Customer Name",
     date: "YYYY-MM-DD",       // date the review was posted
     rating: 5,                // 1-5
     category: ["all"],        // always keep "all"; add "lighting"
                                // and/or "tidy" if the review mentions
                                // that (matches the filter buttons above
                                // the reviews grid). "recent" is added
                                // automatically for anything within the
                                // last 45 days, don't set it manually.
     text: "The review text, copied as-is.",
     ownerReply: "Thank you <Name>!" // omit this line entirely if there's no reply yet
   },
   ========================================================= */
const reviews = [
  {
    name: "Peter Tew",
    date: "2026-02-15",
    rating: 5,
    category: ["all"],
    text: "Jake was professional and standard of work was excellent. Very tidy and it was good to get a video of the work completed. Would recommend without hesitation.",
    ownerReply: "Thank you Peter!"
  },
  {
    name: "Chloe Gribben",
    date: "2026-03-17",
    rating: 5,
    category: ["all"],
    text: "Have had Jake out for two different jobs, very very pleased. So friendly and quick, definitely will call for anything else needed!",
    ownerReply: "Thank you Chloe!"
  },
  {
    name: "Michael Niblock",
    date: "2026-03-17",
    rating: 5,
    category: ["all"],
    text: "Jake has been very attentive to our needs, a very professional job. I could not recommend highly enough and I am very pleased with the end result.",
    ownerReply: "Thank you Michael!"
  },
  {
    name: "Michael Thompson",
    date: "2026-02-15",
    rating: 5,
    category: ["all"],
    text: "Jake replied very promptly to my telephone enquiry, arranged to visit, turned up as agreed, located and corrected the problems efficiently. Excellent professional service and highly recommended.",
    ownerReply: "Thank you Michael!"
  },
  {
    name: "Matthew McMahon",
    date: "2026-03-17",
    rating: 5,
    category: ["all", "tidy"],
    text: "Jake was excellent. He was on time, very clean, great communication and clearly knows his business very well. I'll be using his services in the future and have no qualms recommending him.",
    ownerReply: "Thank you Matthew!"
  },
  {
    name: "Sara Freeman",
    date: "2026-02-15",
    rating: 5,
    category: ["all"],
    text: "Jake was fantastic from putting in a loft light to putting in extra sockets and wiring. Solid quotes that are realistic. Would highly recommend.",
    ownerReply: "Thank you Sara!"
  },
  {
    name: "Ross Cowan",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "lighting"],
    text: "Jake was very efficient and did a great job fitting a new light in my attic space. He arrived exactly when he said he would and was willing to arrange around my timetable. Would definitely recommend.",
    ownerReply: "Thank you Ross!"
  },
  {
    name: "James Oconnor",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "tidy"],
    text: "Jake at JS Electrical did a great job rewiring my kitchen. Professional, reliable and very high-quality work. Everything was left clean and tidy. Highly recommend.",
    ownerReply: "Thank you James!"
  },
  {
    name: "Lizzy Sharpe",
    date: "2026-03-17",
    rating: 5,
    category: ["all", "lighting"],
    text: "Jake completed some electrical work in our new loft. Quick, efficient and very easy to pay. Would recommend and call again!",
    ownerReply: "Thank you Lizzy!"
  },
  {
    name: "Brian Black",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "tidy"],
    text: "Friendly, respectful and tidy. Brilliant job, very professional. Would recommend to anyone.",
    ownerReply: "Thank you Brian!"
  },
  {
    name: "John Brown",
    date: "2026-03-17",
    rating: 5,
    category: ["all", "tidy"],
    text: "Excellent job by Jake and very clean, tidy and professional. I can recommend this service 100%.",
    ownerReply: "Thank you John!"
  },
  {
    name: "Paul Walls",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "lighting", "tidy"],
    text: "Had Jake out fitting new lights in my loft. He was very pleasant to speak with and explained the best option for me. He cleaned up after himself and I would recommend him no problem at all.",
    ownerReply: "Thank you Paul!"
  },
  {
    name: "Tony M",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "lighting"],
    text: "Very happy with the great work Jake did at my home. He replaced some existing lighting with high quality spotlights and the place had been completely transformed. Excellent work throughout and I have no hesitation in using him again.",
    ownerReply: "Thank you Tony!"
  },
  {
    name: "Stephen Porter",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "tidy"],
    text: "Jake called and completed an outside plug. Came when he said he would and left the job spotless. Would definitely recommend.",
    ownerReply: "Thank you Stephen!"
  },
  {
    name: "Karl Walsh",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "tidy"],
    text: "Great work completed this morning to fix a wire fault in my oil burner. Arrived in 15 minutes and had the heating back on in no time with no mess left behind. Very reasonably priced as well.",
    ownerReply: "Thank you Karl!"
  },
  {
    name: "Jonathan",
    date: "2026-02-15",
    rating: 5,
    category: ["all"],
    text: "Punctual, kept updated with dates and install, and competitive pricing. Will use again for other electrical projects around the house.",
    ownerReply: "Thank you Jonathan!"
  },
  {
    name: "Paula Penny",
    date: "2026-03-17",
    rating: 5,
    category: ["all"],
    text: "Would like to say a huge thank you to Jake Smith, a great electrician and very friendly and helpful.",
    ownerReply: "Thank you Paula!"
  },
  {
    name: "Crystal Dougherty",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "lighting", "tidy"],
    text: "Jake installed an LED light and switch in our loft in preparation for boarding it and he did an excellent job. The light looks fantastic. He was efficient, tidy and professional throughout the whole process.",
    ownerReply: "Thank you Crystal!"
  },
  {
    name: "Neil Mooney",
    date: "2026-02-15",
    rating: 5,
    category: ["all"],
    text: "Jake was very helpful and pleasant, really knew his stuff. Got my heating sorted in no time.",
    ownerReply: "Thank you Neil!"
  },
  {
    name: "Lindsey Harbinson",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "lighting"],
    text: "Professional service. Did a fantastic job adding lights to my roof space. Highly recommend.",
    ownerReply: "Thank you Lindsey!"
  },
  {
    name: "Isabella Higgins",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "tidy"],
    text: "Jake arrived at the time he said he would, was tidy and did a great job with the works I needed done.",
    ownerReply: "Thank you Isabella!"
  },
  {
    name: "Neil Sinclair",
    date: "2026-02-15",
    rating: 5,
    category: ["all"],
    text: "Jake is a great fella. He does a fantastic professional job. You know how much the job will cost before he starts. He arrives on time and there is always good communication. He's done a few jobs for me now and I would have no hesitation recommending him.",
    ownerReply: "Thank you Neil!"
  },
  {
    name: "Joe Sloan",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "tidy"],
    text: "Very professional workmanship, clean tidy approach and good value for money.",
    ownerReply: "Thank you Joe!"
  },
  {
    name: "Timea Harmatne Horvath",
    date: "2026-02-15",
    rating: 5,
    category: ["all"],
    text: "Wonderful job and very good help with questions and suggestions.",
    ownerReply: "Thank you Timea!"
  },
  {
    name: "Martina Marks",
    date: "2026-02-15",
    rating: 5,
    category: ["all", "tidy"],
    text: "Very pleasant, excellent work, tidy and quick.",
    ownerReply: "Thank you Martina!"
  },
  {
    name: "Anna Mc Donald",
    date: "2026-04-11",
    rating: 5,
    category: ["all", "lighting"],
    text: "Jake did an exceptional job installing a strip light and switch in the attic of my home. He made it look so easy as he chatted away with me while completing his job in what felt like no time at all. I would highly recommend this electrician.",
    ownerReply: "Thank you Anna!"
  },
  {
    name: "1heart Rules",
    date: "2026-04-11",
    rating: 5,
    category: ["all"],
    text: "Jake is very professional, polite and friendly. Highly recommended.",
    ownerReply: "Thank you for your feedback!"
  },
  {
    name: "Ciara Finnegan",
    date: "2026-04-10",
    rating: 5,
    category: ["all"],
    text: "Jake did a few jobs for me and was absolutely brilliant. Very efficient, kept in touch beforehand and arrived on time. Would recommend.",
    ownerReply: "Thank you Ciara, we appreciate your feedback."
  },
  {
    name: "Stephen",
    date: "2026-04-09",
    rating: 5,
    category: ["all", "lighting"],
    text: "Highly professional and knowledgeable service. Jake efficiently installed a new landing light fitting and wireless switch, providing clear explanations throughout the process. It is rare to find such a genuine and transparent tradesman.",
    ownerReply: "Thanks Stephen, appreciate your review!"
  },
  {
    name: "Emma O’Neill",
    date: "2026-04-02",
    rating: 5,
    category: ["all", "lighting", "tidy"],
    text: "I called Jake at 5:30pm to say I had failed to install a light by myself. He made sure someone was with me less than 45 minutes later. Evan was super quick and very reasonably priced. These guys will not be beaten on quality of work and tidiness.",
    ownerReply: "Thank you Emma, we greatly appreciate your review."
  },
  {
    name: "Joanne Mcguigan",
    date: "2026-04-02",
    rating: 5,
    category: ["all", "lighting"],
    text: "Jake, thank you so much for changing the electric meter board in our home and fitting a new light and switch in the attic. You are a joy to have around as you're so professional and pleasant.",
    ownerReply: "Thank you Joanne! Really appreciate your kind words."
  },
  {
    name: "Evelyn Drysdale",
    date: "2026-03-26",
    rating: 5,
    category: ["all", "tidy"],
    text: "Jake from JS Electrical was very professional and informative right from the start. He explained what he was doing throughout the job. His work was excellent, he was neat and tidy and respected my property. I will be using this company again.",
    ownerReply: "Thank you Evelyn!"
  },
  {
    name: "Hazel Neale",
    date: "2026-03-19",
    rating: 5,
    category: ["all", "tidy"],
    text: "Good communication, work was completed quickly and without any mess.",
    ownerReply: "Thank you Hazel!"
  },
  {
    name: "Alistair Toal",
    date: "2026-03-17",
    rating: 5,
    category: ["all", "tidy"],
    text: "Superb service from Jake. Prompt, very detailed and tidy in all his work. Respectful of property and in all dealings with me. Highly recommend.",
    ownerReply: "Thank you Alistair!"
  },
  {
    name: "Jonny Carson",
    date: "2026-03-17",
    rating: 5,
    category: ["all"],
    text: "Excellent and professional service provided by Jake.",
    ownerReply: "Thank you Jonny!"
  },
  {
    name: "Yvonne Anderson",
    date: "2026-03-17",
    rating: 5,
    category: ["all", "tidy"],
    text: "Jake was very professional. Clean and tidy worker. Would recommend 100%.",
    ownerReply: "Thank you Yvonne!"
  },
  {
    name: "Ronan Hart",
    date: "2026-05-09",
    rating: 5,
    category: ["all"],
    text: "Jake replaced a fusebox for me. Great work done, with lots of friendly advice.",
    ownerReply: "Thank you Ronan!"
  },
  {
    name: "Nicola Barlow",
    date: "2026-05-09",
    rating: 5,
    category: ["all"],
    text: "Jake did an excellent job from start to finish, arrived when he said he would, explained the work clearly and completed everything to a high standard. Professional and reliable.",
    ownerReply: "Thank you Nicola!"
  },
  {
    name: "Joanne Jooste",
    date: "2026-05-09",
    rating: 5,
    category: ["all", "lighting", "tidy"],
    text: "We had a brilliant experience! They did a great job fitting 2 outdoor lights and 2 bathroom extractor fans. They were reliable, punctual and their work was tidy. Jake was very knowledgeable and worked with me to find the best products for our needs. I would definitely recommend their services and will happily use again.",
    ownerReply: "Thank you Joanne!"
  },
  {
    name: "Gillian Simms",
    date: "2026-06-08",
    rating: 5,
    category: ["all"],
    text: "I would, without hesitation, recommend Jake. Very professional, helpful and reliable.",
    ownerReply: "Thank you Gillian!"
  },
  {
    name: "Gerard Deane",
    date: "2026-06-08",
    rating: 5,
    category: ["all", "lighting"],
    text: "We needed a light installed in our attic after getting some flooring done. Service was excellent and quick. Can now use the attic properly for storage instead of using the torch. Highly recommended and would certainly use again.",
    ownerReply: "Thank you Gerard!"
  },
  {
    name: "Maureen Mcquiggan",
    date: "2026-06-08",
    rating: 5,
    category: ["all", "lighting", "tidy"],
    text: "Strip light fitted in loft. Evan did a really good job and was very clean when working and very polite.",
    ownerReply: "Thank you Maureen!"
  },
  {
    name: "Tim Kirk",
    date: "2026-06-08",
    rating: 5,
    category: ["all", "lighting"],
    text: "Jake came out to fit some lights in my roofspace and did a fantastic job. Would highly recommend.",
    ownerReply: "Thank you Tim!"
  },
  {
    name: "Joy Hull",
    date: "2026-06-08",
    rating: 5,
    category: ["all", "lighting"],
    text: "Evan installed a light into my roofspace. It was a pleasure to have this young man into my home. Courteous, respectful and pleasant to chat to.",
    ownerReply: "Thank you Joy!"
  },
  {
    name: "Adam Arnott",
    date: "2026-06-17",
    rating: 5,
    category: ["all", "tidy"],
    text: "Great work! Came on time and cleaned up after himself. Will happily use this service again!",
    ownerReply: "Thank you Adam!"
  },
  {
    name: "Eamon Moore",
    date: "2026-06-17",
    rating: 5,
    category: ["all", "tidy"],
    text: "Excellent professional service from a skilled electrician. Friendly to deal with and left everything clean and tidy.",
    ownerReply: "Thank you Eamon!"
  },
  {
    name: "Chris Herron",
    date: "2026-07-05",
    rating: 5,
    category: ["all"],
    text: "Superb service, from start to finish, promptly replied to any query I had. Showed up early and as such called to make sure that was ok, very polite and professional, very quick and great work.",
    ownerReply: "Thank you Chris!"
  },
  {
    name: "Martina Fearon",
    date: "2026-07-07",
    rating: 5,
    category: ["all"],
    text: "Jake is amazing! He's very quick at responding, he gives you a date and sticks to his word. He texts 30 minutes prior to arriving. He is very polite and he's trained properly, not only being an electrician but he actually leaves your place the way he finds it, which is a rare commodity these days. He is my go to electrician."
  },
  {
    name: "Geraldine Maxwell",
    date: "2026-07-07",
    rating: 5,
    category: ["all"],
    text: "I couldn't be happier with the service I received. Callum completed the work without hesitation and was punctual, professional, and courteous throughout. He kept me informed at every stage, consulting with me before making any decisions."
  }
];

/* =========================================================
   Review section logic
   ========================================================= */
const reviewsGrid = document.getElementById("reviewsGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const reviewSearch = document.getElementById("reviewSearch");
const filterButtons = document.querySelectorAll(".filter-btn");

// Newest reviews first, regardless of where they're added in the array above
const sortedReviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));

// Number of reviews visible before expanding the section
const initialVisibleCount = 6;

// A review counts as "Recent" if it's within this many days old
const recentDayThreshold = 45;

// This controls whether all reviews are shown or only the first batch
let showAllReviews = false;

// Current selected review filter
let activeFilter = "all";

// Current text in the review search box
let searchTerm = "";

// Creates a visual star string such as ★★★★★
function createStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Turns a review's date into "Recent"-eligible or not
function isRecent(dateStr) {
  const days = (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
  return days <= recentDayThreshold;
}

// Turns a review's date into text like "5 days ago" or "3 months ago"
function formatRelativeTime(dateStr) {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));

  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;

  const weeks = Math.round(days / 7);
  if (weeks < 5) return weeks === 1 ? "a week ago" : `${weeks} weeks ago`;

  const months = Math.round(days / 30);
  if (months < 12) return months === 1 ? "a month ago" : `${months} months ago`;

  const years = Math.round(days / 365);
  return years === 1 ? "a year ago" : `${years} years ago`;
}

// Returns only the reviews matching the active filter and search text
function getFilteredReviews() {
  return sortedReviews.filter((review) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "recent" ? isRecent(review.date) : review.category.includes(activeFilter));

    const searchableText = `${review.name} ${review.text}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });
}

// Renders the reviews into the review grid
function renderReviews() {
  if (!reviewsGrid) return;

  const filteredReviews = getFilteredReviews();

  const visibleReviews = showAllReviews
    ? filteredReviews
    : filteredReviews.slice(0, initialVisibleCount);

  reviewsGrid.innerHTML = "";

  // If no reviews match the filter / search
  if (filteredReviews.length === 0) {
    reviewsGrid.innerHTML = `
      <div class="review-card">
        <div class="review-person">
          <h3>No matching reviews found</h3>
          <p class="review-meta">Try a different name or keyword.</p>
        </div>
      </div>
    `;

    if (loadMoreBtn) {
      loadMoreBtn.style.display = "none";
    }

    return;
  }

  // Creating a card for each visible review
  visibleReviews.forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";

    card.innerHTML = `
      <div class="review-card-top">
        <div class="review-person">
          <h3>${review.name}</h3>
          <div class="review-meta">${formatRelativeTime(review.date)}</div>
        </div>
        <span class="review-badge">Verified Review</span>
      </div>

      <div class="review-stars">${createStars(review.rating)}</div>

      <p class="review-text">${review.text}</p>

      ${review.ownerReply ? `<div class="review-owner"><strong>Owner reply:</strong> ${review.ownerReply}</div>` : ""}
    `;

    reviewsGrid.appendChild(card);
  });

  // Showing or hiding the "load more" button depending on review count
  if (!loadMoreBtn) return;

  if (filteredReviews.length <= initialVisibleCount) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "inline-flex";
    loadMoreBtn.textContent = showAllReviews ? "Show Less Reviews" : "Load More Reviews";
  }
}

// Clicking the button toggles between short and full review list
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    showAllReviews = !showAllReviews;
    renderReviews();
  });
}

// Searching reviews by name / keyword
if (reviewSearch) {
  reviewSearch.addEventListener("input", (event) => {
    searchTerm = event.target.value;
    showAllReviews = false;
    renderReviews();
  });
}

// Filtering reviews using the review buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    activeFilter = button.dataset.filter;
    showAllReviews = false;
    renderReviews();
  });
});

/* =========================================================
   Active navigation highlighting while scrolling
   ========================================================= */
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");

// Highlights the current section in the top navigation
function updateActiveNav() {
  let currentId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");

    if (href === currentId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

/* =========================================================
   Work gallery slider
   Make sure these images exist inside your images folder.
   ========================================================= */
const galleryItems = [
  {
    src: "images/work-1.jpg",
    alt: "Attic lighting installation completed by JS Electrical",
    caption: "Attic lighting installation completed neatly and professionally."
  },
  {
    src: "images/work-2.jpg",
    alt: "Socket and switch installation by JS Electrical",
    caption: "Socket and switch installation finished cleanly with a tidy result."
  },
  {
    src: "images/work-3.jpg",
    alt: "Lighting upgrade completed by JS Electrical",
    caption: "Lighting upgrade to improve visibility, finish and functionality."
  },
  {
    src: "images/work-4.jpg",
    alt: "Outdoor electrical work completed by JS Electrical",
    caption: "Outdoor electrical work completed with care and attention to detail."
  },
  {
    src: "images/work-5.jpg",
    alt: "Electrical repair and upgrade work by JS Electrical",
    caption: "Repair and upgrade work carried out efficiently and professionally."
  },
  {
    src: "images/work-6.jpg",
    alt: "Completed electrical installation by JS Electrical",
    caption: "Another completed installation showing the quality of finish provided."
  }
];

const galleryImage = document.getElementById("galleryImage");
const galleryCounter = document.getElementById("galleryCounter");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

// This keeps track of which gallery image is currently showing
let currentGalleryIndex = 0;

// Updates the gallery image and counter
function renderGalleryImage() {
  if (!galleryImage || !galleryCounter) return;

  const currentItem = galleryItems[currentGalleryIndex];

  galleryImage.src = currentItem.src;
  galleryImage.alt = currentItem.alt;
  galleryCounter.textContent = `${currentGalleryIndex + 1} / ${galleryItems.length}`;
}

// Shows the next image in the slider
function showNextGalleryImage() {
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
  renderGalleryImage();
}

// Shows the previous image in the slider
function showPrevGalleryImage() {
  currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
  renderGalleryImage();
}

// Right arrow click event
if (galleryNext) {
  galleryNext.addEventListener("click", showNextGalleryImage);
}

// Left arrow click event
if (galleryPrev) {
  galleryPrev.addEventListener("click", showPrevGalleryImage);
}

/* =========================================================
   Keyboard support for gallery
   Left arrow = previous image
   Right arrow = next image
   ========================================================= */
document.addEventListener("keydown", (event) => {
  if (!galleryImage) return;

  if (event.key === "ArrowRight") {
    showNextGalleryImage();
  }

  if (event.key === "ArrowLeft") {
    showPrevGalleryImage();
  }
});

/* =========================================================
   Gallery lightbox
   Click (or press Enter/Space on) the work image to view it
   enlarged. Closes via the close button, Escape, or clicking
   outside the image.
   ========================================================= */
const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox() {
  if (!galleryLightbox || !lightboxImage || !galleryImage) return;

  lightboxImage.src = galleryImage.src;
  lightboxImage.alt = galleryImage.alt;
  galleryLightbox.hidden = false;
}

function closeLightbox() {
  if (!galleryLightbox) return;
  galleryLightbox.hidden = true;
}

if (galleryImage) {
  galleryImage.addEventListener("click", openLightbox);

  galleryImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox();
    }
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (galleryLightbox) {
  // Clicking the dark backdrop (not the image itself) closes the lightbox
  galleryLightbox.addEventListener("click", (event) => {
    if (event.target === galleryLightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && galleryLightbox && !galleryLightbox.hidden) {
    closeLightbox();
  }
});

/* =========================================================
   Contact form submission
   Submits to Formspree via fetch so the visitor stays on the
   page instead of being redirected.
   ========================================================= */
const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");

if (contactForm && contactFormStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector(".form-submit");
    const formData = new FormData(contactForm);

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    contactFormStatus.textContent = "";
    contactFormStatus.classList.remove("form-status-error", "form-status-success");

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        contactFormStatus.textContent = "Thanks! Your enquiry has been sent — we'll be in touch soon.";
        contactFormStatus.classList.add("form-status-success");
        contactForm.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      contactFormStatus.textContent = "Sorry, something went wrong sending your enquiry. Please call or email us instead.";
      contactFormStatus.classList.add("form-status-error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Enquiry";
    }
  });
}

/* =========================================================
   Back to top button
   ========================================================= */
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.hidden = window.scrollY < 600;
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================================================
   Initial page setup
   ========================================================= */
renderReviews();
renderGalleryImage();
updateActiveNav();