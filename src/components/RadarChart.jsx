import { DIMENSIONS as DEFAULT_DIMENSIONS } from '../data/questions';

const DIM_KEYS = ['emotional', 'sensory', 'social', 'aesthetic'];
const SIZE = 360;
const CENTER = SIZE / 2;
const RADIUS = 105;
const LABEL_OFFSET = 40;
const LEVELS = 5;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export default function RadarChart({ scores, dimensions }) {
  const DIMENSIONS = dimensions || DEFAULT_DIMENSIONS;
  const angleStep = 360 / DIM_KEYS.length;

  // Build polygon points
  const dataPoints = DIM_KEYS.map((key, i) => {
    const angle = i * angleStep;
    const r = (scores[key] / 100) * RADIUS;
    return polarToCartesian(CENTER, CENTER, r, angle);
  });

  const polygonPoints = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

  // Grid lines
  const gridPolygons = [];
  for (let level = 1; level <= LEVELS; level++) {
    const r = (level / LEVELS) * RADIUS;
    const pts = DIM_KEYS.map((_, i) => {
      const { x, y } = polarToCartesian(CENTER, CENTER, r, i * angleStep);
      return `${x},${y}`;
    }).join(' ');
    gridPolygons.push(pts);
  }

  // Axis lines and labels
  const axes = DIM_KEYS.map((key, i) => {
    const angle = i * angleStep;
    const end = polarToCartesian(CENTER, CENTER, RADIUS + 10, angle);
    const labelPos = polarToCartesian(CENTER, CENTER, RADIUS + LABEL_OFFSET, angle);
    return (
      <g key={key}>
        <line
          x1={CENTER}
          y1={CENTER}
          x2={end.x}
          y2={end.y}
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <text
          x={labelPos.x}
          y={labelPos.y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-500"
          style={{ fontSize: '12px' }}
        >
          {DIMENSIONS[key].icon}
        </text>
        <text
          x={labelPos.x}
          y={labelPos.y + 18}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-600"
          style={{ fontSize: '11px', fontWeight: 500 }}
        >
          {DIMENSIONS[key].name}
        </text>
      </g>
    );
  });

  // Score dots
  const dots = DIM_KEYS.map((key, i) => {
    const angle = i * angleStep;
    const r = (scores[key] / 100) * RADIUS;
    const { x, y } = polarToCartesian(CENTER, CENTER, r, angle);
    return (
      <circle
        key={key}
        cx={x}
        cy={y}
        r="5"
        fill={DIMENSIONS[key].color}
        stroke="white"
        strokeWidth="2"
      />
    );
  });

  // Score labels
  const scoreLabels = DIM_KEYS.map((key, i) => {
    const angle = i * angleStep;
    const r = (scores[key] / 100) * RADIUS + 16;
    const { x, y } = polarToCartesian(CENTER, CENTER, r, angle);
    return (
      <text
        key={key}
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '11px', fontWeight: 700, fill: DIMENSIONS[key].color }}
      >
        {scores[key]}%
      </text>
    );
  });

  return (
    <div className="flex justify-center">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {/* Grid */}
        {gridPolygons.map((pts, i) => (
          <polygon
            key={i}
            points={pts}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={i === LEVELS - 1 ? 1.5 : 0.5}
            strokeDasharray={i < LEVELS - 1 ? '3,3' : 'none'}
          />
        ))}

        {/* Axes and labels */}
        {axes}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill="rgba(124, 92, 191, 0.15)"
          stroke="rgba(124, 92, 191, 0.6)"
          strokeWidth="2"
        />

        {/* Dots */}
        {dots}

        {/* Score labels */}
        {scoreLabels}
      </svg>
    </div>
  );
}
