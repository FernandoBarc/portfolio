/* ===========================================================================
   data.js — ALL THE CONTENT OF THE SITE LIVES HERE.

   This is the only file you need to touch to update your portfolio.
   Nothing here is code logic: they are just lists of items that main.js
   turns into HTML.

   Rules of thumb:
   - Keep the quotes and the commas. If the page goes blank, you probably
     deleted a comma or a closing brace.
   - Any field you leave as an empty string ("") is simply not rendered.
     That is how the placeholders work (e.g. a project with no repo link
     will not show a GitHub button).
   - To add an item, copy an existing block from { to }, paste it below,
     and edit the text.
   =========================================================================== */


/* ---------------------------------------------------------------------------
   1. PROFILE — the intro at the top of the homepage and the footer details.
   --------------------------------------------------------------------------- */
const PROFILE = {
  name: "Fernando Barcelata",
  role: "Geoinformatics Engineer (WIP) · Data Analyst · Electronics Engineer",

  // Short paragraphs of the intro. Add or remove strings from this list.
  intro: [
    "Using data to understand the environment and take better decisions.",
    "The intend of this web is to showcase the latest projects I've worked on.",
    "As of 2026-2027 I'll be looking for roles to gain some experience on Earth Observation. If you interested on working with me send me an email or contact me through LinkedIn!.",
//    "Spent four years running experiments in the laboratory and validating equipment, translating raw data into insights and data informed results. I am a MSc student in Geoinformatics Engineering at Politecnico di Milano, working on remote sensing, machine learning and spatial analysis.",
//    "I am looking for roles in Earth observation, geospatial analytics and environmental data."
  ],

  // Small "acquisition metadata" strip under the intro. Edit freely.
  meta: [
    { label: "Based in", value: "Milan, Italy" },
    { label: "Coordinates", value: "45.4642° N, 9.1900° E" },
    { label: "Status", value: "MSc 2025–2027 · open to internships" }
    //{ label: "Languages", value: "ES native · EN C2 · IT B1" }
  ],

  // Three short cards under the intro. Delete the list to hide the section.
  focus: [
    {
      title: "Earth observation",
      text: "Optical and SAR imagery, spectral indices, change detection and land-cover classification with Sentinel, Landsat and Google Earth Engine."
    },
    {
      title: "Spatial data analysis",
      text: "Time-series and geodetic data: interpolation, harmonic decomposition, statistical testing, and the maps and figures that make the result readable."
    },
    {
      title: "Machine Learning and AI",
      text: "Supervised Machine Learning and Artifical Neural Networks for data analysis with Python"
      //text: "Six years across electronics validation and manufacturing. I am comfortable with instruments, messy measurements and explaining findings to people with little context."
    }
  ],

  // Contact + links. Leave "" to hide a link.
  email: "barcelataf@gmail.com",
  // phone: "+39 352 057 4667",
  linkedin: "https://linkedin.com/in/fernando-barcelata-iec",
  github: "https://github.com/FernandoBarc", // e.g. "https://github.com/yourhandle"
  cv: "assets/FernandoBarcelata_CV.pdf"   // drop your PDF here, or set to ""
};


/* ---------------------------------------------------------------------------
   2. EXPERIENCE — homepage, reverse chronological.

   logo: path to an image inside assets/logos/. If the file is missing the
         site automatically falls back to the company initials, so the page
         never looks broken while you collect the logos.
   --------------------------------------------------------------------------- */
const EXPERIENCE = [
  {
    company: "Intel",
    role: "Electrical Validation Engineer",
    location: "Jalisco, Mexico",
    period: "Jun 2022 — Jul 2025",
    logo: "assets/logos/intel.svg",
    points: [
      //"Planned and ran PCIe validation on Intel server CPUs: link speed, error tolerance and electrical eye margins acrorg.freedesktop.locale1oss temperature and voltage corners. Contributed to two products launched in three years.",
      "Plan and execution of Electrical Validation for High Speed interfaces (PCIe and UPI) on Server CPU's link speed, error tolerance and electrical eye margins across temperature and voltage corners. Contributed to two products launched in three years.",
      "Analysed the resulting datasets in JMP and Python, traced lane-level anomalies and endpoint errors to known design constraints, and estimated their impact on manufacturing volume.",
      "Acted as the bridge between Electrical Validation and Pre-production Manufacturing: ran the weekly cross-team forum, arbitrated schedule against coverage, and redirected effort to blocking issues.",
      //"Led an eight-person taskforce that rewrote a validation test running 30× over its time budget; reusing register-access strategies from a sister team brought it to half the allocated budget and earned a Departmental Recognition Award."
    ],
    tags: ["Python", "CMD", "Bash", "Git/Github", "JMP", "PCIe", "Data analysis",]
  },
  {
    company: "Vitesco Technologies",
    role: "Hardware Design and Validation Engineer",
    location: "Jalisco, Mexico",
    period: "Mar 2021 — Jun 2022",
    logo: "assets/logos/vitesco.svg",
    points: [
      "Validated the fuel injection circuit of a new Electronic Control Unit for a major US car manufacturer, characterising MOSFET gate transition timing across operating scenarios.",
      //"Ran bench measurement campaigns with oscilloscopes, power supplies and digital analysers, and documented compliance against automotive standards."
    ],
    tags: ["Oscilloscopes", "Test benches", "Documentation", "Power Supplies"]
  },
  {
    company: "BMW Group",
    role: "IoT Engineering Intern",
    location: "San Luis Potosí, Mexico",
    period: "Aug 2020 — Mar 2021",
    logo: "assets/logos/bmw.svg",
    points: [
      "Scoped an IoT dust-monitoring system for the plant's docking bays, interviewing shop-floor stakeholders to define requirements and expected outcomes.",
      "Built a Python + Tkinter tool that batch-renames archived files and folders from their metadata to enforce the company's naming convention, with extensive edge-case and error handling.",
      "Programmed the routine of a robotic arm introduced as a fallback for a manual assembly station."
    ],
    tags: ["Python", "Tkinter", "IoT", "Requirements Engineering"]
  },
  /*{
    company: "Volkswagen",
    role: "Maintenance Engineering Intern",
    location: "Puebla, Mexico",
    period: "Jan 2020 — Mar 2020",
    logo: "assets/logos/volkswagen.svg",
    points: [
      "Digitised the maintenance inspection forms for the metal stamping shop, replacing paper checklists with a tablet-friendly form built in Excel VBA to improve tool and labour traceability.",
      "Presented the proposal to maintenance and operations leadership — my first exposure to defending a project in front of stakeholders."
    ],
    tags: ["Excel VBA", "Process digitisation", "Manufacturing"]
  },
  {
    company: "CFE — Laguna Verde Nuclear Power Plant",
    role: "Electrical Engineering Intern",
    location: "Veracruz, Mexico",
    period: "Add dates",          // <- placeholder, fill in
    logo: "assets/logos/cfe.svg",
    points: [
      "Add a short description of what you worked on here."   // <- placeholder
    ],
    tags: ["Power systems"]
  }*/
];


/* ---------------------------------------------------------------------------
   3. TIMELINE — academic path plus extracurriculars, on one vertical track.

   kind: "academic"       -> full-size entry with logo (visually prominent)
         "extracurricular" -> smaller, muted entry (visually secondary)

   Items are drawn in the order written here, top to bottom.
   --------------------------------------------------------------------------- */
const TIMELINE = [
  {
    kind: "academic",
    institution: "Politecnico di Milano",
    title: "MSc in Geoinformatics Engineering",
    period: "Sep 2025 — Sep 2027 (expected)",
    logo: "assets/logos/polimi.svg",
    text: "Remote sensing, spatial statistics and geospatial software, taught between the environmental and computer engineering schools.",
    details: [
      "Coursework: Earth Observation and AI, Geospatial Data Analysis, Geographic Information Systems, Positioning and Location Based Services, Computer Architecture, Internet of Things.",
      "Selected scholar, SECIHTI (Mexican Ministry of Education) Masters Abroad Grant."
    ]
  },
  {
    kind: "extracurricular",
    institution: "ETH Zürich · Campus Heilbronn",
    title: "Summer School — Beyond the Visible: AI Sensing and the Future of Terrestrial Resources",
    period: "Jun 2026",
    logo: "assets/logos/ethz.png",
    text: "One week of keynotes and hands-on work with ESA, ETH and SBB researchers on AI for Earth observation.",
    details: [
      "First prize with team MINERVA: drone-based mine detection combining multispectral and SAR imagery for post-conflict reconstruction.",
      "Invited to pitch at the ESA BIC annual conference, Zürich, September 2026."
    ]
  },
  {
    kind: "extracurricular",
    institution: "Legambiente · MIND Social Innovation Academy, Milan",
    title: "EcoHackathon Milano — 24h sustainability hackathon",
    period: "Apr 2026",
    logo: "assets/logos/ecohackathon.svg",
    text: "Built and pitched a geolocated inventory of Milan's photovoltaic panels to close the traceability loop from installation to recycling.",
    details: []
  },
  {
    kind: "academic",
    institution: "Universidad Veracruzana",
    title: "BSc in Electronics and Communications Engineering",
    period: "Aug 2015 — Apr 2021",
    logo: "assets/logos/uv.svg",
    text: "Analogue and digital electronics, signals and communications, with internships across automotive, energy and manufacturing.",
    details: [
      "Selected scholar, inter-faculty UV IoT Summer Research Grant.",
      "Elected student representative for Electronics and Communications Engineering, 2018/2019.",
      "UV Excellence Scholarship."
    ]
  },
  {
    kind: "extracurricular",
    institution: "Platzi",
    title: "Datacademy Challenge",
    period: "2022",
    logo: "assets/logos/platzi.svg",
    text: "Applied data analysis in Python, taken to consolidate the analysis workflow I was using day to day at Intel.",
    details: []
  },
  {
    kind: "extracurricular",
    institution: "Platzi",
    title: "Python Data Challenge",
    period: "2021",
    logo: "assets/logos/platzi.svg",
    text: "Four-week introduction to data analysis with Python, ending in a graded final challenge.",
    details: []
  }
];


/* ---------------------------------------------------------------------------
   4. PROJECTS — the projects page.

   image:  path to a screenshot in assets/projects/. Leave "" to show the
           empty image placeholder instead.
   repo:   GitHub URL. Leave "" to hide the button.
   demo:   live page, report or slides. Leave "" to hide the button.
   tags:   used both as labels and as the filter buttons at the top.
   note:   optional small caveat printed under the description.
   --------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Air pollution and land cover change in Romania, 2021–2023",
    year: "2026",
    summary: "A WebGIS study of how land cover shifted across Romania between 2021 and 2023 and how those shifts line up with NO₂, PM2.5 and PM10 concentrations and the population exposed to them. The work combines several data sources and formats into one coherent story, published as a static web page with interactive layers.",
    note: "Layers depend on the POLIMI GeoServer instance and may be unavailable.",
    image: "assets/projects/romania_map.jpg",
    repo: "",
    demo: "",
    tags: ["QGIS", "ArcGIS", "Python", "OpenLayers", "JavaScript", "HTML/CSS", "WebGIS"]
  },
  {
    title: "Flood mapping from SAR and multispectral imagery with machine learning",
    year: "2026",
    summary: "My introduction to machine learning for Earth observation. I started from the standard SAR change-threshold method for flood delineation, then used that binary mask as training labels over a co-registered multispectral image to train a Random Forest and a Support Vector Machine, and compared the three results.",
    image: "assets/projects/PortadaPresentacion.jpeg",
    repo: "",
    demo: "",
    tags: ["Google Earth Engine", "Python", "rasterio", "NumPy", "pandas", "scikit-learn", "SAR"]
  },
  {
    title: "Land cover classification of Palermo, Sicily",
    year: "2025",
    summary: "A supervised land-cover map of the Province of Palermo from Landsat 8 Collection 2 Level-2 imagery, classifying forest, agriculture, urban and water for the first half of 2025. The workflow covers cloud masking, scaling, NDVI computation, training sample generation, Random Forest training and post-classification cleaning, validated with confusion matrices and producer's, user's and overall accuracies.",
    image: "assets/projects/PalermoLCC_v2.png",
    repo: "",
    demo: "",
    tags: ["Google Earth Engine", "Landsat 8", "Random Forest", "Classification"]
  },
  {
    title: "NDVI change analysis, western Milan",
    year: "2025",
    summary: "A two-date comparison of the spectral signature of an area on the outskirts of Milan — water, scattered urban fabric, farmland and uncultivated green — using Sentinel-2 imagery from March and August 2025. The focus is NDVI as a proxy for vegetation health and how it correlates with the other Sentinel-2 bands.",
    image: "assets/projects/NDVIClassedMap.jpeg",
    repo: "",
    demo: "",
    tags: ["QGIS", "PyQGIS", "Python", "Sentinel-2", "NDVI"]
  },
  {
    title: "Seasonal deformation of the Rio–Antirrio bridge",
    year: "2026",
    summary: "A time-series analysis of Copernicus European Ground Motion Service measurements over the largest cable-stayed bridge of its kind in Europe. Stochastic interpolation separates signal from noise, Fourier harmonics capture the seasonal thermal response and polynomial interpolation gives the long-term trend, with each modelling choice backed by statistical tests.",
    image: "assets/projects/istockphoto-183851431-612x612.jpg",
    repo: "",
    demo: "",
    tags: ["MATLAB", "EGMS", "InSAR", "Time series", "Statistics"]
  },
  {
    title: "Home server on a Raspberry Pi",
    year: "2024",
    summary: "A personal project to get properly comfortable with Linux and containers: a Raspberry Pi running Cosmos Cloud to orchestrate Docker containers and self-hosted services, administered over SSH.",
    image: "",
    repo: "",
    demo: "",
    tags: ["Raspberry Pi", "Linux", "Docker", "Bash", "SSH"]
  }
];
