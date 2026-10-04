import React from 'react';
import { motion } from 'framer-motion';

export interface BranchConnectorProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  isActive?: boolean;
  animated?: boolean;
  label?: string;
  subBranches?: boolean;
}

export const BranchConnector: React.FC<BranchConnectorProps> = ({
  startX,
  startY,
  endX,
  endY,
  isActive = false,
  animated = true,
  label,
  subBranches = true,
}) => {
  // Generate organic cubic Bezier curve
  const dx = endX - startX;
  const dy = endY - startY;

  // Control points curving naturally like world-tree boughs
  const cp1x = startX + dx * 0.45;
  const cp1y = startY + dy * 0.1;
  const cp2x = startX + dx * 0.55;
  const cp2y = startY + dy * 0.9;

  const mainPath = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

  // Organic sub-tendrils (twigs branching off)
  const midX = (startX + endX) * 0.5;
  const midY = (startY + endY) * 0.5;
  const twig1End = { x: midX + 25, y: midY - 20 };
  const twig2End = { x: startX + dx * 0.75 - 15, y: startY + dy * 0.75 + 25 };

  const twig1 = `M ${midX} ${midY} Q ${midX + 15} ${midY - 10}, ${twig1End.x} ${twig1End.y}`;
  const twig2 = `M ${startX + dx * 0.75} ${startY + dy * 0.75} Q ${startX + dx * 0.75 - 5} ${startY + dy * 0.75 + 15}, ${twig2End.x} ${twig2End.y}`;

  return (
    <g className="branch-connector">
      {/* Outer diffuse glow */}
      <path
        d={mainPath}
        fill="none"
        stroke={isActive ? 'rgba(0, 255, 136, 0.45)' : 'rgba(16, 185, 129, 0.2)'}
        strokeWidth={isActive ? 8 : 4}
        strokeLinecap="round"
      />

      {/* Primary branch fiber */}
      <motion.path
        d={mainPath}
        fill="none"
        stroke={isActive ? '#34d399' : '#059669'}
        strokeWidth={isActive ? 2.5 : 1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0.2, opacity: 0.4 }}
        animate={{
          pathLength: 1,
          opacity: isActive ? 1 : 0.65,
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Core temporal beam */}
      <path
        d={mainPath}
        fill="none"
        stroke={isActive ? '#e6fffa' : '#6ee7b7'}
        strokeWidth={isActive ? 1.2 : 0.75}
        strokeLinecap="round"
        opacity={isActive ? 0.95 : 0.6}
      />

      {/* Sub tendrils / twigs */}
      {subBranches && (
        <>
          <path
            d={twig1}
            fill="none"
            stroke="rgba(52, 211, 153, 0.4)"
            strokeWidth={1}
            strokeLinecap="round"
          />
          <circle cx={twig1End.x} cy={twig1End.y} r={2} fill="#6ee7b7" opacity={0.7} />

          <path
            d={twig2}
            fill="none"
            stroke="rgba(52, 211, 153, 0.35)"
            strokeWidth={0.8}
            strokeLinecap="round"
          />
          <circle cx={twig2End.x} cy={twig2End.y} r={1.5} fill="#34d399" opacity={0.6} />
        </>
      )}

      {/* Glowing terminal node (realm leaf / anchor) */}
      <circle
        cx={endX}
        cy={endY}
        r={isActive ? 5 : 3.5}
        fill={isActive ? '#00ff88' : '#10b981'}
        className={isActive ? 'leaf-glow' : ''}
      />
      {isActive && (
        <circle
          cx={endX}
          cy={endY}
          r={9}
          fill="none"
          stroke="rgba(0, 255, 136, 0.5)"
          strokeWidth={1.5}
        >
          {animated && (
            <animate
              attributeName="r"
              values="5;12;5"
              dur="2.5s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      )}

      {/* Animated temporal pulse traveling down the branch */}
      {animated && isActive && (
        <circle r={2.5} fill="#ffffff" filter="drop-shadow(0 0 6px #00ff88)">
          <animateMotion
            path={mainPath}
            dur="3s"
            repeatCount="indefinite"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      )}

      {/* Optional realm tag */}
      {label && isActive && (
        <text
          x={endX + 12}
          y={endY + 4}
          fill="#34d399"
          fontSize="10"
          fontFamily="monospace"
          letterSpacing="1px"
          opacity={0.85}
        >
          {label.toUpperCase()}
        </text>
      )}
    </g>
  );
};
