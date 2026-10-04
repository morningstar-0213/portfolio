// src/utils/lSystem.ts
// Deterministic L‑system generator for dense Yggdrasil‑style timeline branches.
// Emulates the Loki Season 2 finale world-tree cosmic fibers.

export interface BranchSegment {
  start: [number, number, number];
  end: [number, number, number];
  depth: number;
}

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Generate a tree using an L‑system with configurable branch limit.
 * @param iterations Number of L‑system iterations (default 5).
 * @param angleBase Base angle in degrees for branch divergence.
 * @param lengthBase Length of each segment.
 * @param seed Optional seed for deterministic pseudo‑randomness.
 * @param maxBranches Optional cap on total branches (prunes if exceeded).
 * @returns Array of branch segments.
 */
export function generateTree(
  iterations: number = 5,
  angleBase: number = 22,
  lengthBase: number = 1.2,
  seed?: number,
  maxBranches?: number
): BranchSegment[] {
  const axiom = 'F';
  const rules: Record<string, string> = {
    F: 'FF-[-F+F+F]+[+F-F-F]',
  };

  let current = axiom;
  for (let i = 0; i < iterations; i++) {
    let next = '';
    for (const ch of current) {
      next += rules[ch] ?? ch;
    }
    current = next;
    // Early limit if string grows excessively large
    if (maxBranches && current.length > maxBranches * 4) {
      break;
    }
  }

  const rng = (() => {
    let s = seed ?? 12345;
    return () => {
      s = (s * 1664525 + 1013904223) % 0xffffffff;
      return s / 0xffffffff;
    };
  })();

  const stack: { pos: [number, number, number]; dir: [number, number, number]; depth: number }[] = [];
  const segments: BranchSegment[] = [];
  let pos: [number, number, number] = [0, 0, 0];
  let dir: [number, number, number] = [0, 1, 0];
  let depth = 0;

  const cap = maxBranches ?? 350;

  for (const ch of current) {
    if (segments.length >= cap) break;

    switch (ch) {
      case 'F': {
        const length = lengthBase * (0.7 + 0.3 * rng());
        const newPos: [number, number, number] = [
          pos[0] + dir[0] * length,
          pos[1] + dir[1] * length,
          pos[2] + dir[2] * length,
        ];
        segments.push({
          start: [...pos],
          end: [...newPos],
          depth,
        });
        pos = newPos;
        break;
      }
      case '+': {
        const angle = degToRad(angleBase + angleBase * (rng() - 0.5));
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        dir = [
          dir[0] * cos - dir[1] * sin,
          dir[0] * sin + dir[1] * cos,
          dir[2],
        ];
        break;
      }
      case '-': {
        const angle = degToRad(-angleBase + angleBase * (rng() - 0.5));
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        dir = [
          dir[0] * cos - dir[1] * sin,
          dir[0] * sin + dir[1] * cos,
          dir[2],
        ];
        break;
      }
      case '[': {
        stack.push({ pos: [...pos], dir: [...dir], depth });
        depth++;
        break;
      }
      case ']': {
        const popped = stack.pop();
        if (popped) {
          pos = popped.pos;
          dir = popped.dir;
          depth = popped.depth;
        }
        break;
      }
      default:
        break;
    }
  }

  return segments;
}
