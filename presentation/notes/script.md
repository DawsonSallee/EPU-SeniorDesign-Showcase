# Senior Design Showcase — Speaker Script

**Project:** External Performance Unit (EPU)  
**Deck:** https://dawsonsallee.github.io/EPU-SeniorDesign-Showcase/  
**Due:** April 15, 2026 — **video hard cap ~10 minutes** (plan **~2–2.5 minutes per person**).  
**Recording:** **Microsoft Clipchamp** — add **facecam in the bottom-right**; first person to record shares placement so everyone matches.

**Speaking rate target:** ~130 words/minute (you will need **short, tight** scripts to stay under 2.5 min each).

---

## Final slide ownership (record these on camera)

| Who | Slides | ~Time budget |
|-----|--------|----------------|
| **Dawson** | 1, 2, 15, 16, 17, 18, 19 | ~2–2.5 min |
| **David** | 3, 4, 5, 6, 7, 8 | ~2–2.5 min |
| **Joel** | 9, 10, 11, 12, 13, 14 | ~2–2.5 min |
| **Van** | 20, 21, 22, 23, 24 | ~2–2.5 min |

**Note:** Slide 11 is **electrical / control** content. Joel owns the slide in the run order; **Van** is the electrical lead — either Joel narrates from the team script or **Van records the voiceover for slide 11 only** (your call).

**Team roles (for intros — match the deck):** Van — electrical & DAQ; Joel — CFD, testing & software; David — mechanical & CAD; Dawson — systems integration & controls.

---

## Slide-by-slide narration

### Slide 1 — Title [Dawson]

Welcome to our Senior Design presentation. We are Team 2 from UCF's College of Engineering and Computer Science, and today we're presenting the External Performance Unit — a modular cooling enhancement kit for the Arctic Liquid Freezer III.

---

### Slide 2 — Team Introduction [Dawson]

Our team is four mechanical engineering seniors. I'm Dawson Sallee — systems integration and controls. **Van Nguyen** focused on **electrical systems and data acquisition**. **David Loaiza** owned **mechanical design and CAD**. **Joel Lopez** led **CFD, experimental testing, and our telemetry and control software**. Our advisor is Dr. Darshan Yadav.

---

### Slide 3 — The Problem [David]

*(Keep tight.)* Modern CPUs throttle when they overheat — users lose performance they paid for. Mid-range AIOs like the Arctic Liquid Freezer III top out around **265 W** of practical dissipation. Stepping up often means **throwing away** a working cooler and spending **$250+**. We targeted an **affordable upgrade path** instead of a full replacement.

---

### Slide 4 — Why This Topic [David]

High-performance workloads — AI, simulation, gaming — all push thermals. The industry also encourages early hardware turnover and e-waste. We wanted to show you can **extend** what you already own and still reach enthusiast-grade cooling.

---

### Slide 5 — Project Goals [David]

Four targets: **≥320 W** thermal headroom; **under 35 dBA** while **quieter than stock at the same 265 W base load**; **under $65** BOM; and **under 20 minutes** to install with common tools.

---

### Slide 6 — Technology Assessment [David]

We surveyed cooling options from **TIMs and loops** through **TECs, vapor compression, thermosyphons, and jet impingement**. On the control side we compared **MCUs vs SBCs**, control strategies, and telemetry. The **flat-lay photo** is real hardware we used to ground the study in physical parts.

---

### Slide 7 — Concept Selection [David]

Three concepts down-selected with a **weighted Pugh matrix**. Internal hybrid risked **VRM/RAM** interference. A **chained second radiator** blew the **$175** budget. The **External Performance Unit** — external **push-pull** — balanced **thermal, acoustic, cost, and fit**.

---

### Slide 8 — The EPU Concept [David]

Push-pull through the radiator raises **static pressure** and **airflow** — our analysis predicted about **+31.3%** volumetric flow and a **~348 W** theoretical ceiling. **Two fan rows share the pressure work**, so you can run **lower RPM** for the same job — that is central to how we improved **noise**.

---

### Slide 9 — Mechanical Design [Joel]

PETG housing, **three P12 Pro** fans, **magnetic lid**, **#6-32** mounting to standard 120 mm spacing, footprint **360 × 120 × 65 mm** — designed to sit on cases that already fit the LF III.

---

### Slide 10 — CAD Views [Joel]

Full assembly on the case, housing base, and baseline **Arctic Liquid Freezer III** reference — the EPU is an **add-on**, not a from-scratch loop.

---

### Slide 11 — Electrical & Control Design [Joel *or* Van]

**Photo:** actual **EPU electrical build** in the housing. **Small image:** SATA direct-drive **reference schematic**.

**Talk track:** We use **SATA direct-drive** so we are not limited by **1 A** motherboard headers — fused feed from the **PSU**. **Firmware** produces **25 kHz PWM**, reads **tach**, and handles **stall recovery**. **Acoustics:** we used **push-pull** and **lower PWM** where thermals allowed — that matches the **dBA** improvements we show later.  
*(Do **not** emphasize custom molded gasket / accordion details — keep it high level.)*

---

### Slide 12 — CFD Simulation [Joel]

ANSYS workflow: **section model**, **Discovery** regions, **Mechanical** mesh — **Fluent** runs at **900 and 3000 RPM**, single fan vs push-pull.

---

### Slide 13 — CFD Results [Joel]

Push-pull gains **heat rejection** and **air-side HTC**; the big win for users is running **~30% lower RPM** for **equivalent cooling** — less noise for the same thermal job.

---

### Slide 14 — Prototype Build [Joel]

Three **equal** panels: EPU on the rig, **interior** with the LF III, and **EPU Control** — our **local dashboard** for telemetry, **manual PWM**, and fault status during test runs. *(This replaces a generic “parts on a bench” electronics photo.)*

---

### Slide 15 — Test Methodology [Dawson]

Prime95 **Small FFTs**, **HWiNFO64** at **2 Hz**, **45-minute** equilibrium runs, **1 m** **dBA** SPL. Report **ΔT** where it helps compare runs fairly.

---

### Slide 16 — Thermal Results [Dawson]

**336.3 W** sustained, **82.6 °C** peak — well below **100 °C** throttle. Plateau shows **equilibrium**. **CoP 25.1** vs target **19**.

---

### Slide 17 — Power & Safety [Dawson]

**13.39 W** peak EPU draw vs **20 W** budget. **Stall detection** tests show **fast recovery** — important for a SATA-powered fan stack.

---

### Slide 18 — Acoustic Results [Dawson]

**38.1 dBA** stock vs **29.3 dBA** EPU at **265 W** — **8.8 dBA** better at the **same load**. The chart may still show a **32 dBA** reference line from milestone work; our **stated goal** on the deck is **<35 dBA** and **quieter than stock at 265 W** — both satisfied.

---

### Slide 19 — Results Summary [Dawson]

Walk the table: **TDP, CoP, acoustics, power, exhaust ΔT, stall, BOM** — **7/7 pass**. Keep it **fast** — this is a recap slide.

---

### Slide 20 — Feedback Integration [Van]

M3/M5/M6 iterations: **CFD BCs**, **45 vs 30 min** runs per advisor, **FMEA** drove **fuse** and **stall** logic.

---

### Slide 21 — Broader Impacts [Van]

**$65 vs $250+**, **upcycling**, **3D-printed** housing keeps early manufacturing **accessible** without heavy tooling.

---

### Slide 22 — Conclusions [Van]

One line: **mid-range hardware → enthusiast-grade** at **~¼** replacement cost; **metrics passed**.

---

### Slide 23 — Future Work [Van]

**RPM sync / beat tones**, **life test** on **PETG + fans**, **injection molding** at scale.

---

### Slide 24 — Thank You [All]

Short sign-off; **Go Knights** optional.

---

## Quick reference — key numbers

| Metric | Value |
|--------|-------|
| TDP achieved | 336.3 W |
| TDP target | ≥ 320 W |
| Peak CPU temp | 82.6 °C |
| CoP | 25.1 |
| Noise @ 265 W (stock) | 38.1 dBA |
| Noise @ 265 W (EPU) | 29.3 dBA |
| Noise @ 320 W (EPU) | 31.5 dBA |
| Acoustic goal (deck) | < 35 dBA; quieter than stock @ 265 W |
| Max EPU power | 13.39 W |
| BOM | $64.05 |
| Airflow increase (analytical) | +31.3% |
| CFD HTC improvement (push-pull) | +14.5% |

---

## Recording checklist (Clipchamp)

1. **1920×1080**, **16:9**. Facecam **bottom-right**, match first recorder’s framing.
2. Full-screen the deck (**F** in browser) or record the browser window only — **no speaker notes** on screen if you don’t want them in the final cut.
3. **Manual advance** per slide is fine — easier than racing auto-advance.
4. Export a **master clip per person**; Dawson stitches in Clipchamp or your editor of choice.
5. Upload **unlisted** to YouTube; turn on **captions**.
