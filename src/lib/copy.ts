// All framing/UI copy lives here. Substantive content is in @/data/content.
// Edit this file to retune the design's voice without touching components.

export const copy = {
  // Status indicator and meta
  status: "available",
  locationLine: "available · tbilisi · GMT+4",

  // Section captions (uppercase mono, displayed at small sizes)
  sections: {
    identity: "section 01 / identity",
    work: "section 02 / work",
    history: "section 03 / history",
    toolkit: "section 04 / toolkit",
    education: "section 05 / education",
    contact: "section 06 / contact",
  },

  // Section headlines
  headlines: {
    about: "Engineering with product instincts and delivery discipline.",
    work: "Selected products shipped for real users.",
    history: "Hands-on delivery across startups and scale-up environments.",
    skills: "A wide stack, with depth where it matters.",
    education: "Academic grounding with strong analytical thinking.",
    contact: "Open for senior work.",
  },

  // Stat labels (mono, sentence case)
  stats: {
    experience: "experience",
    stack: "stack",
    location: "location",
    status: "status",
  },

  // Buttons
  buttons: {
    work: "view selected work",
    contact: "get in touch",
    open: "view live",
  },

  // Hero corner instrument readout (static — see plan §critical risks)
  readout: {
    lat: "LAT 41.7° N",
    lon: "LON 44.8° E",
    build: "BUILD 2026.04",
    status: "STATUS NOMINAL",
    // Initial 600–800ms ignition sequence
    boot: ["INIT", "LINK", "READY"] as const,
  },

  // Footer / contact descriptors
  contact: {
    intro:
      "Open to senior frontend and full-stack roles, product engineering leadership, and high-impact contract work.",
    emailLabel: "email",
    phoneLabel: "phone",
    locationLabel: "location",
    socialsLabel: "elsewhere",
    rights: "© 2026 · luka bendeliani",
  },
} as const;
