// src/data/projects.js
// Rendered by src/app/projects/page.jsx. An entry with a `slug` links to
// src/app/projects/<slug>/page.jsx; one without is shown as a plain card.
// `tags`, `period`, and `status` are optional and only render when present.
export const projects = [
  {
    // slug: 'moca-detection', // TODO(maanas): restore once the deep-dive's placeholders are filled in
    title: 'MoCA Detection',
    // TODO(maanas): confirm this one-liner reads the way you'd describe it out loud.
    blurb:
      'Convolutional networks that score the drawing items of the Montreal Cognitive Assessment, so a lab can grade cognitive screens consistently and at scale.',
    tags: ['Deep Learning', 'PyTorch', 'Computer Vision', 'Cognitive Neuroscience'],
    period: '2025 — present', // TODO(maanas): real start date
    status: 'Active',
  },
  {
    title: 'How Somatostatin Might Drive Alzheimer’s Disease',
    blurb:
      'We looked at a large gene database and saw that somatostatin (SST) levels are nearly 4× higher in Alzheimer’s brains. SST disrupts calcium balance in neurons, fueling production of the toxic amyloid‑β fragments. Our computer models suggest SST binds the pump‑regulator sarcolipin, further upsetting calcium control. Next steps: lab tests in cells and animal studies to see if blocking this interaction slows disease.',
  },
];
