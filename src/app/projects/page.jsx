import Link from 'next/link';
import { projects } from '../../data/projects';

export const metadata = {
  title: 'Projects | Manu',
  description: 'Research and engineering projects at the intersection of neuroscience and machine learning.',
};

function ProjectCard({ project }) {
  const body = (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        {project.status && (
          <span className="shrink-0 text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
            {project.status}
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{project.blurb}</p>

      {(project.tags || project.period) && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {project.period && (
            <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">{project.period}</span>
          )}
        </div>
      )}

      {project.slug && (
        <span className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
          Read the write-up →
        </span>
      )}
    </>
  );

  const cardClass =
    'block border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700';

  // Linked cards suppress the site-wide animated <a> underline (globals.css),
  // which otherwise sweeps across the full card width on hover.
  return project.slug ? (
    <Link
      href={`/projects/${project.slug}`}
      className={`${cardClass} after:hidden hover:border-blue-500 dark:hover:border-blue-400`}
    >
      {body}
    </Link>
  ) : (
    <div className={cardClass}>{body}</div>
  );
}

export default function Projects() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug ?? project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
