import React, { useEffect, useState, useMemo } from 'react';
import { useTree } from '../context/TreeContext';
import { useSectionRegistry } from '../context/SectionRegistry';
import { BranchConnector } from './BranchConnector';

export function BranchConnectorsOverlay() {
  const { rootHubPos, animationEnabled, prefersReducedMotion } = useTree();
  const { sections, activeSection, registryVersion } = useSectionRegistry();
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    scrollY: 0,
  });

  useEffect(() => {
    const handleUpdate = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollY: window.scrollY || window.pageYOffset || 0,
      });
    };

    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate, { passive: true });
    handleUpdate();

    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate);
    };
  }, [registryVersion]);

  // Compute live screen coordinates for connectors
  const mainConnectors = useMemo(() => {
    // Only show on screens wider than 768px (desktop / tablet rail view)
    if (windowDimensions.width < 768) return [];

    const hubX = rootHubPos.x;
    const hubY = rootHubPos.y;

    const list: Array<{
      id: string;
      label?: string;
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      isActive: boolean;
    }> = [];

    const mainSectionIds = ['home', 'journey', 'expertise', 'projects', 'contact'];

    mainSectionIds.forEach((id) => {
      const sectionInfo = sections.get(id);
      if (sectionInfo && sectionInfo.ref.current) {
        const rect = sectionInfo.ref.current.getBoundingClientRect();
        // Visible in or near viewport (-rect.height to window.innerHeight + rect.height)
        if (rect.bottom > -200 && rect.top < windowDimensions.height + 200) {
          // Connect to the left boundary or title area of the section
          const targetX = Math.max(hubX + 30, rect.left + 40);
          const targetY = rect.top + Math.min(rect.height * 0.25, 140);

          list.push({
            id,
            label: sectionInfo.label || id,
            startX: hubX,
            startY: hubY,
            endX: targetX,
            endY: targetY,
            isActive: activeSection === id,
          });
        }
      }
    });

    return list;
  }, [sections, activeSection, rootHubPos, windowDimensions]);

  // Sub-branch connectors: Projects hub to featured project cards
  const subConnectors = useMemo(() => {
    if (windowDimensions.width < 1024) return []; // Only on wide screens

    const projectsInfo = sections.get('projects');
    if (!projectsInfo || !projectsInfo.ref.current) return [];

    const projRect = projectsInfo.ref.current.getBoundingClientRect();
    if (projRect.bottom < 0 || projRect.top > windowDimensions.height) return [];

    const parentHubX = Math.max(rootHubPos.x + 30, projRect.left + 40);
    const parentHubY = projRect.top + Math.min(projRect.height * 0.25, 140);

    const list: Array<{
      id: string;
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      isActive: boolean;
    }> = [];

    // Connect to first 3 featured project cards
    const subCardIds = ['project-1', 'project-2', 'project-3'];
    subCardIds.forEach((id) => {
      const cardInfo = sections.get(id);
      if (cardInfo && cardInfo.ref.current) {
        const cardRect = cardInfo.ref.current.getBoundingClientRect();
        if (cardRect.bottom > 0 && cardRect.top < windowDimensions.height) {
          list.push({
            id,
            startX: parentHubX,
            startY: parentHubY,
            endX: cardRect.left + 20,
            endY: cardRect.top + 30,
            isActive: activeSection === 'projects',
          });
        }
      }
    });

    return list;
  }, [sections, activeSection, rootHubPos, windowDimensions]);

  if (windowDimensions.width < 768) return null;

  return (
    <svg
      className="fixed inset-0 pointer-events-none z-30 w-full h-full overflow-visible"
      style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))' }}
    >
      <defs>
        <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Main branches from Root Hub */}
      {mainConnectors.map((branch) => (
        <BranchConnector
          key={branch.id}
          startX={branch.startX}
          startY={branch.startY}
          endX={branch.endX}
          endY={branch.endY}
          isActive={branch.isActive}
          animated={animationEnabled && !prefersReducedMotion}
          label={branch.label}
          subBranches={true}
        />
      ))}

      {/* Sub-branches from Projects to cards */}
      {subConnectors.map((sub) => (
        <BranchConnector
          key={sub.id}
          startX={sub.startX}
          startY={sub.startY}
          endX={sub.endX}
          endY={sub.endY}
          isActive={sub.isActive}
          animated={animationEnabled && !prefersReducedMotion}
          subBranches={false}
        />
      ))}
    </svg>
  );
}
