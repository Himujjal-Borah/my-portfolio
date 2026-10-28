const SHAPES = [
  { cls: 'shape-1', icon: 'fa-html5' },
  { cls: 'shape-2', icon: 'fa-css3-alt' },
  { cls: 'shape-3', icon: 'fa-js' },
  { cls: 'shape-4', icon: 'fa-node-js' },
  { cls: 'shape-5', icon: 'fa-database' },
  { cls: 'shape-6', icon: 'fa-python' },
  { cls: 'shape-7', icon: 'fa-java' },
]

export function FloatingShapes() {
  return (
    <div className="floating-shapes">
      {SHAPES.map((s) => (
        <div key={s.cls} className={`shape ${s.cls}`}>
          <i className={`fab ${s.icon}`} />
        </div>
      ))}
    </div>
  )
}
