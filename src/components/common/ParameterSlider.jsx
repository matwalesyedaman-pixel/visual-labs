export default function ParameterSlider({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  displayValue,
  ticks,
  onChange,
}) {
  const handleChange = (e) => {
    const numericValue = Number(e.target.value)
    if (!Number.isNaN(numericValue) && onChange) {
      onChange(numericValue)
    }
  }

  const formattedValue = displayValue !== undefined ? displayValue : value
  const readoutText = unit
    ? unit === '°' || unit.startsWith('°')
      ? `${formattedValue}${unit}`
      : `${formattedValue} ${unit}`
    : formattedValue

  return (
    <div className="control-group">
      <div className="control-header">
        <label htmlFor={id}>{label}</label>
        <span className="control-readout">{readoutText}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="editorial-slider"
      />
      {ticks && ticks.length > 0 && (
        <div className="slider-ticks">
          {ticks.map((tick, index) => (
            <span key={index}>{tick}</span>
          ))}
        </div>
      )}
    </div>
  )
}
