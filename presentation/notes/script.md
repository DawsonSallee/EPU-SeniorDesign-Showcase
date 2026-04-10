# Senior Design Showcase — Speaker Script

**Project:** External Performance Unit (EPU)
**Total Target Duration:** ~8 minutes 30 seconds
**Speaking Rate Target:** ~130 words/minute

## Speaker Assignments

| Speaker | Sections | Approx. Time |
|---------|----------|-------------|
| **Dawson** | Slides 1-3 (Title, Team, Problem) + Slide 11 (Electrical) | ~2:15 |
| **Van** | Slides 12-13 (CFD Simulation & Results) + Slide 16 (Thermal Results) | ~1:35 |
| **David** | Slides 8-10 (EPU Concept, Mechanical, CAD) + Slide 14 (Prototype) | ~1:55 |
| **Joel** | Slides 17-18 (Power/Safety, Acoustics) + Slides 20-24 (Impact, Conclusion) | ~2:00 |
| **Shared** | Slides 4-7 (Motivation, Goals, Tech, Concept Selection) + Slide 15 (Methodology) + Slide 19 (Summary) | ~1:45 |

> Assign the "Shared" slides among yourselves as you see fit. Each person should appear on camera at some point during their assigned sections.

---

## Slide-by-Slide Script

---

### Slide 1 — Title (0:00 – 0:15) [Dawson]

Welcome to our Senior Design presentation. We are Team 2 from UCF's College of Engineering and Computer Science, and today we're presenting the External Performance Unit — a modular cooling enhancement kit for the Arctic Liquid Freezer III.

---

### Slide 2 — Team Introduction (0:15 – 0:45) [Dawson]

Our team is made up of four mechanical engineering seniors. I'm Dawson Sallee — I led systems integration and the control electronics. Van Nguyen handled our CFD simulations and thermal analysis. David Loaiza owned the mechanical design and all of our CAD work. And Joel Lopez managed the electrical systems and manufacturing. Our faculty advisor is Dr. Darshan Yadav from the Mechanical and Aerospace Engineering department.

---

### Slide 3 — The Problem (0:45 – 1:30) [Dawson]

As CPUs have become more powerful, thermal management has become the single biggest obstacle to performance. When a CPU gets too hot, it protectively slows itself down — a process called thermal throttling. This means the user doesn't get the full speed they paid for.

Mid-range coolers like the Arctic Liquid Freezer III top out at about 265 watts of thermal dissipation. If a user needs more cooling for tasks like AI training or 3D rendering, the only option today is to throw away their existing cooler and spend over 250 dollars on a premium replacement.

There is no affordable middle ground. That's the gap we set out to fill.

---

### Slide 4 — Why This Topic (1:30 – 2:00) [Shared]

We chose this topic because the demand for high-performance computing is exploding. AI training, simulation, rendering, and gaming all generate extreme heat loads. At the same time, the industry encourages a wasteful cycle where people replace perfectly functional hardware every few years, creating massive electronic waste. We wanted to prove there's a smarter, more sustainable way to get enthusiast-grade performance — one that upgrades what you already own instead of throwing it away.

---

### Slide 5 — Project Goals (2:00 – 2:30) [Shared]

We defined four critical performance targets for the project. First, increase thermal dissipation capacity to 320 watts — that's a 20 percent improvement over the stock cooler. Second, reduce acoustic output to under 30 decibels at maximum load. Third, keep the entire modification kit under 65 dollars. And fourth, make installation possible in under 20 minutes with just a standard Phillips screwdriver.

---

### Slide 6 — Technology Research (2:30 – 3:15) [Shared]

Before committing to any design, we conducted extensive technology research across two semesters. On the cooling side, we evaluated thermal interface materials, liquid loop hydraulics, thermoelectric coolers, vapor compression refrigeration, thermosyphons, and even jet impingement cooling. On the controls and instrumentation side, we compared Arduino microcontrollers versus Raspberry Pi single-board computers, and evaluated fuzzy logic, supervised machine learning, and reinforcement learning as control paradigms. This broad foundation allowed us to make informed, data-driven design decisions.

---

### Slide 7 — Concept Selection (3:15 – 3:45) [Shared]

Using structured morphological analysis and a weighted Pugh matrix, we narrowed our design space down to three finalist concepts. The Hybrid Internal Mod risked colliding with motherboard VRM heatsinks and RAM modules. The Chained Radiator Loop would have exceeded our budget at over 175 dollars. The External Performance Unit provided the best mathematical balance of thermal performance, acoustics, cost, and universal compatibility. It was selected unanimously for full development.

---

### Slide 8 — The EPU Concept (3:45 – 4:15) [David]

The EPU works by adding a second row of fans on the exterior of the PC case, creating what's called a push-pull configuration through the radiator. This effectively doubles the system's static pressure capability, allowing air to overcome the high aerodynamic impedance of the 38-millimeter thick radiator core.

Our analytical P-Q curve modeling predicted a 31.3 percent increase in volumetric airflow, lifting the theoretical thermal capacity ceiling to nearly 348 watts — well above our 320-watt target. The custom silicone gasket reduces vibration transmission to the PC chassis by 92 percent.

---

### Slide 9 — Mechanical Design (4:15 – 4:45) [David]

The EPU housing is 3D-printed from PETG, which we selected for its high glass-transition temperature and dimensional stability. It houses three Arctic P12 Pro 120-millimeter fans optimized for high static pressure. The housing mounts directly to the case using standard number 6-32 machine screws that thread into the existing radiator holes. A magnetic lid provides tool-less access for maintenance and dust filter replacement. The entire assembly fits within the original cooler's footprint at 360 by 120 by 65 millimeters.

---

### Slide 10 — CAD Detail Views (4:45 – 5:10) [David]

Here you can see the complete SolidWorks CAD assembly. On the left, the full system integration with the EPU mounted on a Lian Li LANCOOL 207 case. In the center, the isolated housing base showing the PETG frame with its internal cable-routing channels. And on the right, the baseline Arctic Liquid Freezer III cooler — the platform our entire design is built to enhance.

---

### Slide 11 — Electrical & Acoustic Design (5:10 – 5:40) [Dawson]

For electrical safety, we designed what we call a SATA Direct-Drive topology. Instead of drawing power from the motherboard's fan headers — which are limited to just 1 amp — we draw power directly from the PC's power supply through a fused SATA connection. This provides a 328 percent safety margin over our peak current draw.

An Arduino Nano V3 generates a hardware-accurate 25 kilohertz PWM signal and monitors fan RPM using hardware interrupts with automatic stall detection.

To address acoustics, we engineered a custom 40A durometer RTV silicone compliance gasket with accordion-style bellows. This mechanically decouples the fan motors from the chassis, reducing vibration force transmission by over 92 percent.

---

### Slide 12 — CFD Simulation (5:40 – 6:20) [Van]

To validate our design analytically, we performed computational fluid dynamics simulations using ANSYS Fluent. We built a detailed SolidWorks CAD model of the radiator section with accurate fin density and pipe dimensions. After refining the geometry in ANSYS Discovery and defining internal fluid regions and named selections, we generated a high-quality volume mesh in ANSYS Mechanical. We then ran four simulation scenarios — single-fan and push-pull configurations at both 900 RPM and 3000 RPM — with all simulations converging within 100 iterations.

---

### Slide 13 — CFD Results (6:20 – 6:45) [Van]

The CFD results confirmed our analytical predictions. At maximum RPM, the push-pull configuration increased the heat rejection rate by 4.5 percent and improved the air-side heat transfer coefficient by 14.5 percent. But the most significant advantage is acoustic efficiency: by sharing the pressure load between two fan rows, we can achieve the *same* cooling performance at roughly 30 percent lower RPM — which translates directly into a 9.4 percent reduction in system noise.

---

### Slide 14 — Prototype Build (6:45 – 7:15) [David]

Here is our physical prototype. The main photo shows the completed EPU installed on our test rig. You can see the three Arctic P12 Pro fans mounted in the PETG housing, sitting on top of the case directly above the radiator. The interior view shows the stock Arctic Liquid Freezer III with its pump head and tubing routed to the top-mounted radiator. The electronics include the Arduino Nano control board with the potentiometer dial for manual speed control and the LED power indicator.

---

### Slide 15 — Test Methodology (7:15 – 7:45) [Shared]

Our testing followed industry-standard thermal benchmarking practices. We used Prime95 with the Small FFTs test to generate a consistent worst-case CPU thermal load. HWiNFO64 logged all system telemetry at 2 hertz. Each test ran for 45 continuous minutes to ensure the entire liquid cooling loop reached true thermal equilibrium. Acoustic measurements used a calibrated SPL meter at a standard distance of one meter with A-weighting. All thermal results are reported using Delta-T to eliminate ambient temperature as a variable.

---

### Slide 16 — Thermal Results (7:45 – 8:15) [Van]

The thermal results exceeded every target. The system sustained a continuous 336.3-watt heat load — surpassing our 320-watt goal by over 5 percent. The CPU temperature plateaued smoothly at 82.6 degrees Celsius — that's 17 degrees below the manufacturer's throttling limit of 100 degrees. This flat plateau in the graph confirms true thermal equilibrium was achieved. The Coefficient of Performance came in at 25.1, significantly exceeding our 19.0 target and demonstrating exceptional cooling efficiency.

---

### Slide 17 — Power & Safety (8:15 – 8:40) [Joel]

On the electrical side, the EPU's total power draw peaked at just 13.39 watts — well below the 20-watt safety limit of the SATA topology. We also validated the firmware's stall detection failsafe by introducing simulated stall faults during the test. The Arduino's watchdog timer instantly detected the absence of tachometer pulses and executed the kick-start recovery routine, proving the system's reliability under fault conditions.

---

### Slide 18 — Acoustic Results (8:40 – 9:10) [Joel]

The acoustic results are one of our proudest achievements. The stock cooler produced 38.1 decibels at 265 watts — failing our 32-decibel limit. With the EPU engaged at the same 265-watt load, noise dropped to just 29.3 decibels. That's an 8.8 decibel reduction — roughly a 50 percent decrease in *perceived* loudness. Even at the full 320-watt maximum load, we measured only 31.5 decibels. The silicone gasket and acoustic foam successfully eliminated chassis resonance.

---

### Slide 19 — Results Summary (9:10 – 9:35) [Shared]

Here is the complete results summary. Every single critical performance parameter was met or exceeded. 336 watts thermal capacity. A CoP of 25.1. 31.5 decibels at maximum load. Power draw of just 13.39 watts. An exhaust delta-T of only 3.16 degrees. Instant stall detection. And a total bill of materials cost of 64 dollars and 5 cents. Seven out of seven metrics — all passed.

---

### Slide 20 — Feedback Integration (9:35 – 9:55) [Joel]

Throughout the project, we actively incorporated feedback from our advisor and peers. After Milestone 3, we refined our CFD boundary conditions. After Milestone 5, we extended test durations from 30 to 45 minutes per our advisor's recommendation. And our FMEA analysis of over 50 failure modes drove key safety features including the inline fuse and the stall detection failsafe.

---

### Slide 21 — Broader Impacts (9:55 – 10:25) [Joel]

The EPU has significant broader impacts. Economically, it provides enthusiast-grade performance for 65 dollars instead of over 250 — making high-performance computing accessible to students and budget users. Environmentally, our upcycling approach extends hardware life and reduces electronic waste. And our manufacturing approach using 3D printing and silicone casting enables localized, low-cost production without expensive industrial tooling.

---

### Slide 22 — Conclusions (10:25 – 10:45) [Joel]

In conclusion, our project proved that mid-range cooling hardware *can* be upgraded to enthusiast-grade performance through a cost-effective, modular add-on — at one-quarter the cost of a premium replacement. The EPU achieved 336 watts of thermal dissipation, 31.5 decibels of acoustic output, a total cost of 64 dollars, and passed all seven critical performance metrics.

---

### Slide 23 — Future Work (10:45 – 11:00) [Joel]

For future work, we recommend three areas: implementing an RPM Sync Offset in the firmware to eliminate harmonic beat frequencies, conducting accelerated life testing to certify long-term durability, and transitioning from 3D printing to injection molding for commercial production.

---

### Slide 24 — Thank You (11:00 – 11:15) [All]

Thank you for watching our presentation. We're proud of what our team accomplished this year, and we'd be happy to discuss our project in more detail. Go Knights!

---

## Quick Reference — Key Numbers

| Metric | Value |
|--------|-------|
| TDP Achieved | 336.3 W |
| TDP Target | 320 W |
| Peak CPU Temp | 82.6 °C |
| Throttle Limit | 100 °C |
| CoP | 25.1 |
| Noise @ 265W (Stock) | 38.1 dBA |
| Noise @ 265W (EPU) | 29.3 dBA |
| Noise @ 320W (EPU) | 31.5 dBA |
| Max Power Draw | 13.39 W |
| BOM Cost | $64.05 |
| Airflow Increase | 31.3% |
| Vibration Reduction | 92.2% |
| Heat Transfer Coeff. Increase | 14.5% |

## Recording Tips

1. Open `presentation/index.html` in Chrome
2. Press **F** for fullscreen, or **F11** in browser
3. Press **Space** to start auto-advance, or click/arrow to manually advance
4. Press **N** to toggle speaker notes on/off
5. Record with OBS Studio at 1920x1080, 30fps
6. Record audio separately for each section, or do a full pass
7. Upload to YouTube as **unlisted**, enable auto-captions
8. Video title should be your project name
9. Add description: "Mechanical Engineering — Senior Design Spring 2026"
