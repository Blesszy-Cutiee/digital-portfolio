let currentCategory = "All";
let activeSeminars = [];
let selectedSeminarId = null;

const defaultProfile = {
  name: "Nabus,\nBlesszy Joy",
  title: "UI/UX DESIGNER",
  bio: "A fourth-year BSIT student and aspiring UI/UX designer, I craft clean, functional, and user-centered websites.",
  image: "Profile/joy.png"
};

// 7 Certificates + 1 Badge (Total 8 entries with Attendance Proof screenshots)
const defaultSeminars = [
  {
    id: "1",
    type: "Certificate",
    title: "Cultivating Innovation: Turning Agricultural Challenges into Tech Opportunities",
    provider: "DICT Calabarzon Regional Office",
    category: "Trends and Innovation",
    date: "2026-08-27",
    hours: 3,
    certImg: "Certificates/cert1.jpg",
    docFile: {
      type: "image",
      url: "Documentation/Doc1.jpg",
      name: "Attendance_Proof_AI_Summit.jpg"
    },
    narrative: 'The DICT CALABARZON webinar, "Cultivating Innovation: Turning Agricultural Challenges into Tech Opportunities, " emphasized the role of innovative solutions and emerging technologies like IoT, precision farming, and data analytics in transforming agriculture. The webinar further disclosed the extent of the economic, financial, and logistical bottlenecks faced by the farmers and fisherfolk. Lastly, the webinar showed that digital adoption has become a must not just a choice in establishing climate-resilient, sustainable, and efficient food supply chains.',
    takeaways: [
      "Learned about cutting-edge smart farming tools such as IoT sensors, precision agriculture, and data analytics to improve farm productivity.",
      "Understood how integrating climate-compatible technologies empowers farmers and fisherfolk to adapt to changing weather patterns.",
      "Discovered the necessity of placing technology at the core of agriculture to solve post-harvest wastage, financial barriers, and logistical bottlenecks."
    ],
    speaker: "Ms. Catherine P. Amante",
  },
  {
    id: "2",
    type: "Certificate",
    title: "Reach Beyond Limits: Creating Accessible Social Media Content",
    provider: "LIFT Organization",
    category: "Trends and Innovation",
    date: "2026-05-15",
    hours: 2,
    certImg: "Certificates/cert2.jpg",
    docFile: {
      type: "image",
      url: "Documentation/Doc2.jpg",
      name: "Seminar"
    },
    narrative: 'The 1.5-hour Zoom webinar with LIFT Org, Inc. "REACH BEYOND LIMITS: CREATING ACCESSIBLE SOCIAL MEDIA CONTENT" provided an illuminating view of digital accessibility for visually impaired individuals. From how the screen reader turns images into speech or braille and use of live, tools, like, alt, text, and graph descriptions, to principles for effective writing, and "technical" ideals like transcending functionality towards both universal design and auto-enabled WCAG compliance, this was truly an eye-opening session. All of this just reinforced the need for accessibility audits and peer-led workshops for eventual classes and community projects to come.',
    takeaways: [
      "Learned alt-text best practices, including concise descriptions and decorative empty alt tags.",
      "Discovered how screen readers and WCAG standards ensure universal digital access for all users.",
      "Identified ways to apply accessibility audits and workshops to future academic IT projects."
    ],
    speaker: "Harris Rainier",
  },
  {
    id: "3",
    type: "Certificate",
    title: "Don't Get Hacked: Detect, Defend, and Secure Your Digital Life",
    provider: "DICT Region V",
    category: "Cyber Security in IT",
    date: "2026-08-13",
    hours: 2,
    certImg: "Certificates/cert3.jpg",
    docFile: {
      type: "image",
      url: "Documentation/Doc3.jpg",
      name: "Zoom_Attendance_Proof_UX.jpg"
    },
    narrative: `Aug 13, 2026 I participated in a webinar "Don't Get Hacked: Detect, Defend, and Secure your Digital Life" by DICT Catanduanes. It discussed the most common online threats, social engineering, multi-factor authentication and privacy. End-user is the main line of defense against data and identity theft.`,
    takeaways: [
      "Practiced identifying common social engineering tactics, digital threats, and online vulnerability risks.",
      "Evaluated essential security controls including multi-factor authentication, privacy policies, and strict account recovery protocols.",
      "Discovered strategies to integrate personal security audits and digital literacy workshops into community and university IT initiatives."
    ],
    speaker: "Engr.Rodel N. Villarez",
  },
  {
    id: "4",
    type: "Certificate",
    title: "Understanding Artificial Intelligence: A Begginers Guide to AI Concepts and Real-World Applications",
    provider: "Clarendon College Inc",
    category: "AI in Practice",
    date: "2026-05-19",
    hours: 3,
    certImg: "Certificates/cert4.jpg",
    docFile: {
      type: "image",
      url: "Documentation/Doc4.jpg",
      name: "Web_Perf_Proof_Screenshot.jpg"
    },
    narrative: `I attended Clarendon College webinar "Understanding Artificial Intelligence: A Beginner's Guide to AI Concepts and Uses in the Real World." The webinar showed the development from machine learning to generative use of AI in different industries. It covered ethical modifications and privacy of data as AI becomes more autonomous.`,
    takeaways: [
      "Learned core AI concepts, tracing technological evolution from traditional programming to deep learning and generative models.",
      "Explored how AI is actively integrated into daily tools, healthcare, education, transportation, and modern business.",
      "Identified opportunities to deploy beginner-friendly AI models and chatbots for local data-tracking and community support tools."
    ],
    speaker: "Ms. Kiesy Ortega",
  },
  {
    id: "5",
    type: "Certificate",
    title: "Making the case for working on AI safety and governance in the Philippines",
    provider: "UP ISC",
    category: "AI in Practice",
    date: "2026-11-18",
    hours: 2,
    certImg: "Certificates/cert5.jpg",
    docFile: {
      type: "image",
      url: "Documentation/Doc5.jpg",
      name: "Public_Speaking_Attendance_Proof.jpg"
    },
    narrative: `I joined UPISC's webinar "Making the Case for Working on AI Safety and Governance in the Philippines" led by Mx. Jan Llenzl Dagohoy. The talk covered ways to balance AI's rapid expansion with ethical policy, risk disclosure, and national security concerns. It also touched on current arguments over Philippine tech bills and the proposed "AI Act.".`,
    takeaways: [
      "Explored the dual nature of AI, balancing rapid economic value against misinformation and safety risks.",
      "Discovered national policy trends, ethical frameworks, and governance strategies aimed at preventing unaligned model behaviors.",
      "Identified ways to incorporate localized AI safety guidelines, responsible prompt engineering, and digital literacy into academic projects."
    ],
    speaker: "Mr. Lance Isaac Reamon",
  },
  {
    id: "6",
    type: "Certificate",
    title: "Introduction to AI in Azure",
    provider: "BlackStride Cyber",
    category: "Cloud Computing",
    date: "2026-08-14",
    hours: 2,
    certImg: "Certificates/cert6.jpg",
    docFile: {
      type: "image",
      url: "Documentation/Doc6.jpg",
      name: "Analytics_Workshop_Attendance.jpg"
    },
    narrative: `I attended the webinar of BlackStride Cyber's "Introduction to AI in Azure (AI-901)" live webinar on cloud infrastructure and AI workloads. We learned about the structure of Microsoft Azure, cloud tenants, Entra ID, resource groups, and security boundaries. We saw how cloud infrastructure supports the development of on-demand, secure production-ready AI models with Microsoft Foundry and other tools.`,
    takeaways: [
      "Grasped fundamental Azure architecture, including tenant structures, identity governance, subscriptions, and resource groups.",
      "Explored diverse Azure AI workloads spanning generative agents, computer vision, natural language processing, and speech recognition.",
      "Identified ways to build secure, cloud-hosted community applications like automated newsletters and ecological surveying tools."
    ],
    speaker: "Gel Supnet",
  },
  {
    id: "7",
    type: "Certificate",
    title: "Startup Awareness Webinar: Startup Business and Innovation - Spot the Gap, Build System",
    provider: "DICT Region VIII and ICT Industry Development Bureu",
    category: "Tech Startups",
    date: "2026-09-2",
    hours: 3,
    certImg: "Certificates/cert7.jpg",
    docFile: {
      type: "image",
      url: "Documentation/Doc7.jpg",
      name: "Cybersec_Attendance_Proof.jpg"
    },
    narrative: `I was a part of DICT Region VIII - Startup Awareness Webinar: "Startup Business and Innovation: Spot the Gap, Build the System." The seminar discussed the transition from advanced technical skills to value-driven startup building, agile development, lean approach. It was all about real world application of local pain point rather than coding just sexy code.`,
    takeaways: [
      "Practiced identifying common social engineering tactics, digital threats, and online vulnerability risks.",
      "Evaluated essential security controls including multi-factor authentication, privacy policies, and strict account recovery protocols.",
      "Discovered strategies to integrate personal security audits and digital literacy workshops into community and university IT initiatives."
    ],
    speaker: "Dr. Hani Doghman",
  },
  {
    id: "8",
    type: "Badge",
    title: "Cyber Security in IT",
    provider: "Cyber Security Webinar Introduction to AI in Azure",
    category: "Badge Achievement",
    date: "2026-08-14",
    hours: 18,
    certImg: "Certificates/badge.png",
    docFile: {
      type: "image",
      url: "Documentation/Doc8.jpg",
      name: "Badge_Verification_Proof_Screenshot.jpg"
    },
    narrative:  `I attended the webinar of BlackStride Cyber's "Introduction to AI in Azure (AI-901)" live webinar on cloud infrastructure and AI workloads. We learned about the structure of Microsoft Azure, cloud tenants, Entra ID, resource groups, and security boundaries. We saw how cloud infrastructure supports the development of on-demand, secure production-ready AI models with Microsoft Foundry and other tools.`,
    takeaways: [
      "Grasped fundamental Azure architecture, including tenant structures, identity governance, subscriptions, and resource groups.",
      "Explored diverse Azure AI workloads spanning generative agents, computer vision, natural language processing, and speech recognition.",
      "Identified ways to build secure, cloud-hosted community applications like automated newsletters and ecological surveying tools."
    ],
    speaker: "Gel Sulnet",
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  loadProfile();
  loadSeminars();
  setupEventListeners();
  renderCategories();
  renderSeminars();
  checkUrlHash();
});

function loadProfile() {
  const profile = JSON.parse(localStorage.getItem("certifolio_profile")) || defaultProfile;
  document.getElementById("heroName").textContent = profile.name;
  document.getElementById("heroTitle").textContent = profile.title;
  document.getElementById("heroBio").textContent = profile.bio;
  document.getElementById("heroImage").src = profile.image;

  document.getElementById("profNameInput").value = profile.name;
  document.getElementById("profTitleInput").value = profile.title;
  document.getElementById("profBioInput").value = profile.bio;
}

function saveProfile(e) {
  e.preventDefault();
  const current = JSON.parse(localStorage.getItem("certifolio_profile")) || defaultProfile;
  const fileInput = document.getElementById("profImgInput");

  const update = {
    name: document.getElementById("profNameInput").value,
    title: document.getElementById("profTitleInput").value,
    bio: document.getElementById("profBioInput").value,
    image: current.image
  };

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      update.image = evt.target.result;
      localStorage.setItem("certifolio_profile", JSON.stringify(update));
      loadProfile();
      closeModal("profileModal");
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    localStorage.setItem("certifolio_profile", JSON.stringify(update));
    loadProfile();
    closeModal("profileModal");
  }
}

function loadSeminars() {
  // 1. Reset array to defaultSeminars
  activeSeminars = [...defaultSeminars];
  localStorage.setItem("certifolio_seminars", JSON.stringify(activeSeminars));
  
  // 2. Update stat cards
  updateStats();

  // 3. Re-render category filter pills and seminar cards on screen
  if (typeof renderCategories === "function") renderCategories();
  if (typeof renderSeminars === "function") renderSeminars();
}

function updateStats() {
  const statSeminars = document.getElementById("statSeminars");
  const statHours = document.getElementById("statHours");
  const statCerts = document.getElementById("statCerts");
  const statBadges = document.getElementById("statBadges");

  if (statSeminars) statSeminars.textContent = "7";
  if (statHours) statHours.textContent = "17 hrs";
  if (statCerts) statCerts.textContent = "7";
  if (statBadges) statBadges.textContent = "1";
}


function renderCategories() {
  const categories = ["All", "Trends and Innovation", "Cyber Security in IT", "AI in Practice", "Cloud Computing", "Tech Startups", "Badge Achievement"];
  const container = document.getElementById("categoriesContainer");
  container.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `category-pill ${cat === currentCategory ? "active" : ""}`;
    btn.textContent = cat;
    btn.onclick = () => {
      currentCategory = cat;
      renderCategories();
      renderSeminars();
    };
    container.appendChild(btn);
  });
}

function renderSeminars() {
  const grid = document.getElementById("seminarsGrid");
  const emptyState = document.getElementById("emptyState");
  const searchVal = document.getElementById("searchInput").value.toLowerCase();
  const sortVal = document.getElementById("sortSelect").value;

  let filtered = activeSeminars.filter(s => {
    const matchesCat = (currentCategory === "All") || (s.category === currentCategory);
    const matchesSearch = s.title.toLowerCase().includes(searchVal) || 
                          s.provider.toLowerCase().includes(searchVal) ||
                          (s.skills && s.skills.some(sk => sk.toLowerCase().includes(searchVal)));
    return matchesCat && matchesSearch;
  });

  filtered.sort((a, b) => {
    return sortVal === "newest" 
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    filtered.forEach(s => {
      const isBadge = s.type === "Badge";
      const isSelected = selectedSeminarId === s.id;
      
      const card = document.createElement("div");
      card.className = `card ${isSelected ? "selected-highlight" : ""}`;
      card.id = `seminar-card-${s.id}`;
      
      // Select card on click with highlight
      card.onclick = (e) => {
        if (e.target.tagName !== "BUTTON" && !e.target.classList.contains("btn")) {
          selectCardHighlight(s.id);
        }
      };

      card.innerHTML = `
        <div class="card-img-wrapper" onclick="openLightbox('${s.certImg}')" title="Click to view full screen image">
          <span class="badge-tag">${s.category}</span>
          <span class="type-badge ${isBadge ? "badge-item" : ""}">${isBadge ? "🎖️ BADGE" : "📜 CERTIFICATE"}</span>
          ${s.docFile ? `<span class="doc-badge">📎 Proof Attached</span>` : ""}
          <img src="${s.certImg}" alt="${s.title}" />
        </div>
        <div class="card-content">
          <span class="card-date">📅 ${s.date}</span>
          <h3 class="card-title">${s.title}</h3>
          <p class="card-provider">🏢 ${s.provider}</p>
          <p class="card-narrative-preview">${s.narrative}</p>
          <div class="tags-container">
            ${(s.skills || []).map(sk => `<span class="tag">${sk}</span>`).join("")}
          </div>
          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <button class="btn btn-outline" style="flex:1; justify-content:center;" onclick="openDetailModal('${s.id}')">
              Read Narrative
            </button>
            <button class="btn btn-outline" style="padding:0.5rem;" title="Copy direct link" onclick="copySeminarLink('${s.id}')">
              🔗 Link
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
}

function selectCardHighlight(id) {
  selectedSeminarId = id;
  document.querySelectorAll(".card").forEach(c => c.classList.remove("selected-highlight"));
  const targetCard = document.getElementById(`seminar-card-${id}`);
  if (targetCard) {
    targetCard.classList.add("selected-highlight");
  }
}

function handleAddSeminar(e) {
  e.preventDefault();
  const certInput = document.getElementById("addCertImage");
  const docInput = document.getElementById("addDocFile");
  
  if (!certInput.files[0]) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const certBase64 = evt.target.result;

    const processDocAndSave = (docData) => {
      const newEntry = {
        id: Date.now().toString(),
        type: document.getElementById("addType").value,
        title: document.getElementById("addTitle").value,
        provider: document.getElementById("addProvider").value,
        category: document.getElementById("addCategory").value,
        date: document.getElementById("addDate").value,
        hours: Number(document.getElementById("addHours").value),
        certImg: certBase64,
        docFile: docData,
        narrative: document.getElementById("addNarrative").value,
        takeaways: document.getElementById("addTakeaways").value.split("\n").filter(t => t.trim() !== ""),
        speaker: document.getElementById("addSpeaker").value,
        skills: document.getElementById("addSkills").value.split(",").map(s => s.trim()).filter(s => s !== "")
      };

      activeSeminars.unshift(newEntry);
      localStorage.setItem("certifolio_seminars", JSON.stringify(activeSeminars));
      
      updateStats();
      renderSeminars();
      closeModal("addModal");
      document.getElementById("addSeminarForm").reset();
    };

    if (docInput.files && docInput.files[0]) {
      const docFile = docInput.files[0];
      const docReader = new FileReader();
      const isImg = docFile.type.startsWith("image/");

      docReader.onload = function(docEvt) {
        processDocAndSave({
          type: isImg ? "image" : "file",
          url: docEvt.target.result,
          name: docFile.name
        });
      };
      docReader.readAsDataURL(docFile);
    } else {
      processDocAndSave(null);
    }
  };

  reader.readAsDataURL(certInput.files[0]);
}

function openDetailModal(id) {
  const item = activeSeminars.find(s => s.id === id);
  if (!item) return;

  selectCardHighlight(id);
  window.history.pushState(null, null, `#seminar-${id}`);

  const detailContent = document.getElementById("detailContent");
  const badgeContainer = document.getElementById("detailBadgeContainer");

  const isBadge = item.type === "Badge";
  badgeContainer.innerHTML = `
    <span class="badge-tag" style="position:static;">${item.category}</span>
    <span class="type-badge ${isBadge ? "badge-item" : ""}" style="position:static; margin-left:6px;">${isBadge ? "🎖️ BADGE" : "📜 CERTIFICATE"}</span>
    <span style="font-size:0.85rem; color:var(--text-muted); margin-left:10px;">${item.date}</span>
  `;

  let docSectionHtml = "";
  if (item.docFile) {
    if (item.docFile.type === "image") {
      docSectionHtml = `
        <div class="doc-box">
          <p class="doc-box-title">📎 Attendance Screenshot / Proof Photo</p>
          <img src="${item.docFile.url}" style="max-height:220px; width:100%; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:1px solid var(--border-color);" onclick="openLightbox('${item.docFile.url}')" title="Click to view fullscreen proof photo" />
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${item.docFile.name}</p>
        </div>
      `;
    } else {
      docSectionHtml = `
        <div class="doc-box">
          <p class="doc-box-title">📎 Attached Attendance Proof File</p>
          <a href="${item.docFile.url}" download="${item.docFile.name}" class="btn btn-outline" style="background:#fff; gap:0.5rem;">
            📥 Download Attached File (${item.docFile.name})
          </a>
        </div>
      `;
    }
  }

  detailContent.innerHTML = `
    <h2 style="font-size:1.4rem; color:var(--text-dark); margin-bottom:0.5rem;">${item.title}</h2>
    <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">🏢 ${item.provider} &bull; ⏱️ ${item.hours} Hours</p>

    <div style="position:relative; margin-bottom:1.5rem; text-align:center;">
      <p style="font-size:0.8rem; font-weight:700; color:var(--primary); text-align:left; margin-bottom:4px;">${isBadge ? "🎖️ Official Badge Image" : "📜 Official Certificate"}</p>
      <img src="${item.certImg}" style="max-height:260px; width:100%; object-fit:cover; border-radius:var(--radius-sm); border:1px solid var(--border-color); cursor:pointer;" onclick="openLightbox('${item.certImg}')" />
      <button class="btn btn-outline" style="position:absolute; bottom:10px; right:10px; background:rgba(255,255,255,0.9);" onclick="openLightbox('${item.certImg}')">🔍 Fullscreen Preview</button>
    </div>

    ${docSectionHtml}

    <div style="background:var(--bg-main); padding:1rem; border-radius:var(--radius-sm); margin-bottom:1rem; border:1px solid var(--border-color);">
      <h3 style="font-size:1rem; color:var(--primary); margin-bottom:0.5rem;">📋 Narrative & Key Takeaways</h3>
      <p style="font-size:0.9rem; color:var(--text-dark); margin-bottom:0.8rem; line-height:1.5;">${item.narrative}</p>
      ${item.takeaways && item.takeaways.length > 0 ? `
        <ul style="padding-left:1.2rem; font-size:0.85rem; color:var(--text-muted);">
          ${item.takeaways.map(t => `<li style="margin-bottom:0.3rem;">${t}</li>`).join("")}
        </ul>
      ` : ""}
    </div>

    ${item.speaker ? `<p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;"><strong>Key Speaker / Facilitator:</strong> ${item.speaker}</p>` : ""}

    <div class="tags-container" style="margin-bottom:1.5rem;">
      ${(item.skills || []).map(sk => `<span class="tag">${sk}</span>`).join("")}
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:1rem; flex-wrap:wrap; gap:0.5rem;">
      <button class="btn btn-danger" onclick="deleteSeminar('${item.id}')">🗑️ Delete Entry</button>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn btn-outline" onclick="copySeminarLink('${item.id}')">🔗 Copy Direct Link</button>
        <button class="btn btn-primary" onclick="window.print()">🖨️ Print / Save PDF</button>
      </div>
    </div>
  `;

  openModal("detailModal");
}

function checkUrlHash() {
  const hash = window.location.hash;
  if (hash.startsWith("#seminar-")) {
    const seminarId = hash.replace("#seminar-", "");
    openDetailModal(seminarId);
  }
}

function copySeminarLink(id) {
  const baseUrl = window.location.href.split("#")[0];
  const directLink = `${baseUrl}#seminar-${id}`;

  navigator.clipboard.writeText(directLink).then(() => {
    alert(`Direct link copied to clipboard!\n\n${directLink}`);
  }).catch(() => {
    prompt("Copy this seminar direct link:", directLink);
  });
}

function deleteSeminar(id) {
  if (confirm("Are you sure you want to delete this entry?")) {
    activeSeminars = activeSeminars.filter(s => s.id !== id);
    localStorage.setItem("certifolio_seminars", JSON.stringify(activeSeminars));
    updateStats();
    renderSeminars();
    closeModal("detailModal");
    window.history.pushState(null, null, " ");
  }
}

function openLightbox(imgSrc) {
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  lightboxImg.src = imgSrc;
  lightboxModal.classList.remove("hidden");
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
  if (id === "detailModal") {
    window.history.pushState(null, null, " ");
  }
}

function setupEventListeners() {
  document.getElementById("editProfileBtn").addEventListener("click", () => openModal("profileModal"));
  document.getElementById("addCertBtn").addEventListener("click", () => openModal("addModal"));

  document.getElementById("profileForm").addEventListener("submit", saveProfile);
  document.getElementById("addSeminarForm").addEventListener("submit", handleAddSeminar);

  document.getElementById("searchInput").addEventListener("input", renderSeminars);
  document.getElementById("sortSelect").addEventListener("change", renderSeminars);

  window.addEventListener("hashchange", checkUrlHash);

  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}