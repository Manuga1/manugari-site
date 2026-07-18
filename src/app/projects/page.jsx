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
        <h3 className="text-2xl font-bold">DiffEx: Reducing Diagnostic Inequity in Guatemala with AI</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">DiffEx · Vanderbilt University · with Ami Singh</p>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          In Guatemala, most physicians are concentrated in a few cities while rural and Indigenous communities face delayed diagnosis—81% of HIV patients present late, and tuberculosis often goes undetected for months. I co-founded <strong>DiffEx</strong>, an AI clinical decision-support tool that suggests a ranked differential diagnosis and the single most informative next test, so minimally trained health workers can reason more like specialists. Against published clinical vignette sets it reached <strong>85% top-1 and 96% top-3 accuracy</strong>—beating a 67% physician baseline and leading symptom checkers like Ada, Babylon, and Isabel—with its biggest edge on the ambiguous cases where clinicians are most vulnerable to anchoring bias. DiffEx is being field-tested in Guatemala this summer to measure real-world usability and alignment with local epidemiology.
        </p>
        <details className="mt-4 group">
          <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">The science, in more detail</summary>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            DiffEx is a React/TypeScript tool built on a Supabase knowledge base of conditions, clinical features, and likelihood-ratio-weighted edges (LR+ and LR−). The engine generates candidate diagnoses, computes demographic-adjusted priors (age, sex, smoking status), accumulates log-likelihood scores normalized by matched edge count, and applies an unexplained-evidence penalty per unmatched finding before softmax normalization into a probability distribution. A <strong>Value-of-Information optimizer</strong> then ranks next diagnostic steps by expected Shannon-entropy reduction, penalized for cost, invasiveness, and turnaround time, while life-threatening diagnoses are always retained through a safety-net override (100% critical-diagnosis retention across vignettes). Edge-count normalization and the unexplained-evidence penalty produced tighter, better-calibrated posteriors; the VOI optimizer reduced diagnostic uncertainty by an average of 34% per recommendation cycle, converging to the correct top-1 within 2.3 cycles. In a Midwest pilot, clinicians reported strong alignment between DiffEx output and attending-level reasoning.
          </p>
        </details>
       </div>
       <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
        <h3 className="text-2xl font-bold">How Somatostatin Might Drive Alzheimer’s Disease</h3>
         <p className="text-gray-600 dark:text-gray-400 mt-2">
         We looked at a large gene database and saw that somatostatin (SST) levels are nearly 4× higher in Alzheimer’s brains. SST disrupts calcium balance in neurons, fueling production of the toxic amyloid‑β fragments. Our computer models suggest SST binds the pump‑regulator sarcolipin, further upsetting calcium control. Next steps: lab tests in cells and animal studies to see if blocking this interaction slows disease.
         </p>
        </div>
        <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
          <h3 className="text-2xl font-bold">Future Projects...</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            </p>
        </div>
      </div>
    </section>
  );
}
