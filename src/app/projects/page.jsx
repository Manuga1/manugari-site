export default function Projects() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
      <div className="space-y-8">
       <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
        <h3 className="text-2xl font-bold">Mapping How Huntington’s Disease Rewires the Brain</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Darby Lab · Vanderbilt University Medical Center, Department of Neurology</p>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Huntington’s disease slowly damages the brain years before symptoms appear, but why some people first lose <em>thinking</em> abilities and others first lose <em>movement</em> hasn’t been clear. Instead of asking <em>where</em> the brain shrinks, I asked <em>which networks</em> those shrinking regions connect to. Using brain scans from 96 gene carriers and 110 healthy controls, I mapped each person’s atrophy onto a wiring diagram of the brain—and found a clean split: before symptoms begin, damage concentrates in frontostriatal networks tied to cognition, while after symptoms appear, it shifts to visual and cerebellar networks that guide movement. In other words, the disease follows the brain’s wiring in a predictable, stage-specific way—which could help track how it progresses.
        </p>
        <details className="mt-4 group">
          <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">The science, in more detail</summary>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            I used <strong>atrophy network mapping (ANM)</strong>: subject-specific atrophy maps (voxel-wise w-scores adjusted for age and sex) were computed for HD gene carriers (pre-manifest n=45, manifest n=51) and healthy controls (n=110), then seeded into a normative functional connectome to derive an atrophy-network connectivity map per participant—no patient fMRI required. Voxel-wise regressions linked connectivity to motor (UHDRS) and cognitive (Stroop, verbal fluency, Symbol Digit Modalities Test) measures, covarying for group and CAG repeat length, with significance assessed via nonparametric permutation testing. Worse motor scores (driven by the manifest group) mapped to networks connected to occipital/visual cortex and posterior cerebellum (Crus I/II); worse cognition (driven by the pre-manifest group) mapped to a frontostriatal system spanning the basal ganglia, thalamus, anterior cingulate, and inferior frontal cortex—a <strong>double dissociation</strong> of cognitive-network localization pre-manifest and motor-network localization once manifest. The work supports ANM as a stage-specific framework for the pre-manifest-to-manifest transition and as a potential biomarker for tracking HD progression.
          </p>
        </details>
       </div>
       <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
        <h3 className="text-2xl font-bold">DiffEx: AI-Powered Differential Diagnosis</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Co-founded with Ami Singh · 1st place, Hult Prize @ Vanderbilt</p>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          <strong>DiffEx</strong> is an AI clinical decision-support tool I co-founded to reduce diagnostic error and strengthen medical reasoning. Given a patient’s symptoms, history, and vitals, it generates a ranked differential diagnosis and then recommends the single most informative next question or test to narrow it down—so even a minimally trained health worker can reason more like a specialist. Against published clinical vignette sets it reached <strong>85% top-1 and 96% top-3 accuracy</strong>, beating a 67% physician baseline and leading symptom checkers like Ada, Babylon, and Isabel, with its biggest edge on the ambiguous, overlapping presentations where clinicians are most vulnerable to anchoring bias. DiffEx won 1st place and $3,000 at the Hult Prize @ Vanderbilt and advanced to the U.S. National Competition in Boston.
        </p>
        <details className="mt-4 group">
          <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">How it works, in more detail</summary>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            DiffEx is a React/TypeScript tool built on a Supabase knowledge base of conditions, clinical features, and likelihood-ratio-weighted edges (LR+ and LR−). The engine generates candidate diagnoses, computes demographic-adjusted priors (age, sex, smoking status), accumulates log-likelihood scores normalized by matched edge count, and applies an unexplained-evidence penalty per unmatched finding before softmax normalization into a probability distribution. A <strong>Value-of-Information optimizer</strong> then ranks next diagnostic steps by expected Shannon-entropy reduction, penalized for cost, invasiveness, and turnaround time, while life-threatening diagnoses are always retained through a safety-net override (100% critical-diagnosis retention across vignettes). Edge-count normalization and the unexplained-evidence penalty produced tighter, better-calibrated posteriors; the VOI optimizer reduced diagnostic uncertainty by an average of 34% per recommendation cycle, converging to the correct top-1 within 2.3 cycles. In a Midwest pilot, clinicians reported strong alignment between DiffEx output and attending-level reasoning.
          </p>
        </details>
       </div>
       <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
        <h3 className="text-2xl font-bold">Reducing Diagnostic Inequity in Guatemala</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Public health research · Simon Collier Grant, Vanderbilt CLACX · with Ami Singh</p>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Diagnostic inequity—unequal access to timely, accurate diagnosis—is a central driver of global health disparities. In Guatemala, 65% of people live in rural areas but only 20% of physicians practice outside major cities, leaving Indigenous communities to face compounding linguistic, cultural, and structural barriers to care: 81% of HIV patients present at late stages, and tuberculosis routinely goes undetected for months. My research asks whether an AI differential-diagnosis system (DiffEx) can help close that gap in a real low-resource setting. This summer I’m field-testing it in Guatemala—alongside a free medical camp I organized solo, funded by the Simon Collier Grant from Vanderbilt’s CLACX—to measure real-world usability and how well it aligns with local epidemiology, using the findings to refine its knowledge base and demographic priors for low- and middle-income contexts.
        </p>
        <details className="mt-4 group">
          <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">The research, in more detail</summary>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            The demographic-aware prior system and information-theoretic test prioritization make a tool like DiffEx particularly suited to settings where disease burden, language, and resource constraints differ sharply from the environments where most clinical software is designed. In benchmarking, the accuracy advantage was most pronounced in high-ambiguity presentations with overlapping symptom profiles, and the safety-net override retained 100% of critical diagnoses even under sparse evidence—behavior that matters most when specialist backup is hours away. The Guatemala field study evaluates usability and alignment with local epidemiology across simple, moderate, and complex case tiers, and the results will feed iterative refinement of the knowledge base and priors—a necessary step toward equitable, scalable deployment across low- and middle-income countries.
          </p>
        </details>
       </div>
       <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
        <h3 className="text-2xl font-bold">How Somatostatin Might Drive Alzheimer’s Disease</h3>
         <p className="text-gray-600 dark:text-gray-400 mt-2">
         We looked at a large gene database and saw that somatostatin (SST) levels are nearly 4× higher in Alzheimer’s brains. SST disrupts calcium balance in neurons, fueling production of the toxic amyloid‑β fragments. Our computer models suggest SST binds the pump‑regulator sarcolipin, further upsetting calcium control. Next steps: lab tests in cells and animal studies to see if blocking this interaction slows disease.
         </p>
        </div>
      </div>
    </section>
  );
}
