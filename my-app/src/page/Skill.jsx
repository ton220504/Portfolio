const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Interfaces that work beautifully across screens.',
    skills: [
      ['HTML5', 'html-5.png'], ['CSS3', 'css-3.png'], ['JavaScript', 'js.png'],
      ['TypeScript', 'typescript.png'], ['ReactJS', 'reactjs.png'],
      ['Tailwind CSS', 'tailwind.png'], ['Bootstrap', 'bootstrap.png'],
    ],
  },
  {
    number: '02',
    title: 'Backend & Databases',
    description: 'Reliable logic and data behind the experience.',
    skills: [
      ['NodeJS', 'Node.js.png'], ['C#', 'c-sharp.png'],
      ['.NET', 'dotNet-core.png'], ['SQL Server', 'sql-server.png'],
      ['MySQL', 'mySQL.png'],['PostgreSQL', 'postgresql.png']
    ],
  },
  {
    number: '03',
    title: 'Tools & workflow',
    description: 'The toolkit that helps ideas become real products.',
    skills: [
      ['Git', 'git.png'], ['GitHub', 'github.png'],
      ['Material UI', 'material-UI.png'], ['Vercel', 'vercel.png'], ['Stack Overflow', 'stack-overflow.png'],
      ['NPM', 'npm.png'], ['VS Code', 'vscode.png'],
      ['Visual Studio', 'visualstudio.png'], ['Docker', 'docker.png'], ['Postman', 'postman.png'],
    ],
  },
];

export default function Skill() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-eyebrow"><span /> 02 / TOOLKIT</p>
          <h2 id="skills-title">Tools I use to <span>make it happen.</span></h2>
          <p>Technologies I work with across interfaces, APIs and development workflows.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <ul className="skill-list">
                {group.skills.map(([name, filename]) => (
                  <li key={name} title={name}>
                    <span className="skill-logo"><img src={`/images/${filename}`} alt="" loading="lazy" /></span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
