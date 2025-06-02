export default function Projects() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
      <div className="space-y-8">
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

