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
