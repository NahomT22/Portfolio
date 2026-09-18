import clashDetail1 from '../assets/projects/clash-detection-detail-1.jpg'
import clashDetail2 from '../assets/projects/clash-detection-detail-2.jpg'
import clashDetail3 from '../assets/projects/clash-detection-detail-3.jpg'
import clashDetail4 from '../assets/projects/clash-detection-detail-4.jpg'
import clashHero from '../assets/projects/clash-detection-hero.jpg'
import bimHero from '../assets/projects/federated-bim-hero.jpg'
import fourPointsDiagram from '../assets/projects/four-points-diagram.jpg'
import fourPointsHero from '../assets/projects/four-points-hero.jpg'
import mepHero from '../assets/projects/mep-coordination-hero.jpg'
import shiftDiagram from '../assets/projects/shift-apartments-diagram.jpg'
import shiftHero from '../assets/projects/shift-apartments-hero.jpg'

export type Project = {
  slug: string
  index: string
  title: string
  location: string
  category: 'Academic Project' | 'Professional Project'
  building: string
  role: string
  software: string[]
  summary: string
  description: string
  cover: string
  gallery: { src: string; caption: string; size?: 'large' | 'small' }[]
}

export const projects: Project[] = [
  {
    slug: 'federated-bim-apartment-building',
    index: '01',
    title: 'Federated BIM Model Development',
    location: 'George Brown College',
    category: 'Academic Project',
    building: '8-storey mixed-use apartment building',
    role: 'Modeling, form development & coordination, mechanical design',
    software: ['Revit', 'Autodesk Construction Cloud'],
    summary:
      'A federated model built for an 8-storey mixed-use building, coordinated across disciplines from architectural form to mechanical systems.',
    description:
      'Focused on developing a federated model through multidisciplinary coordination. Developed architectural plans and building envelope designs, coordinated multidisciplinary project progress, and contributed to the design and coordination of mechanical systems.',
    cover: bimHero,
    gallery: [
      {
        src: bimHero,
        caption: 'Exterior render of the completed massing and envelope',
        size: 'large',
      },
    ],
  },
  {
    slug: 'mep-systems-coordination',
    index: '02',
    title: 'Modelling & Coordinating MEP Systems',
    location: 'George Brown College',
    category: 'Academic Project',
    building: '4-storey mixed-use building',
    role: 'BIM modeling & coordination, clash detection',
    software: ['Revit'],
    summary:
      'Coordinating three MEP disciplines within a tight floor-to-floor height, resolving over 40 major clashes to a conflict-free federated model.',
    description:
      'Focused on federated model coordination for a 4-storey mixed-use building. Coordinating three MEP disciplines within a tight floor-to-floor height required iterative clash resolution; resolved over 40 major clashes, improving constructability and achieving a conflict-free federated model by final submission.',
    cover: mepHero,
    gallery: [
      {
        src: mepHero,
        caption: 'Coordinated mechanical, electrical & plumbing systems',
        size: 'large',
      },
    ],
  },
  {
    slug: 'model-coordination-clash-detection',
    index: '03',
    title: 'Model Coordination & Clash Detection',
    location: 'George Brown College',
    category: 'Academic Project',
    building: 'Mixed-use, 5-storey building',
    role: 'BIM Coordinator',
    software: ['Revit', 'Navisworks'],
    summary:
      'Authored the architectural Revit model and led cross-disciplinary clash detection between structural and MEP sub-models.',
    description:
      'As BIM Coordinator, authored the architectural Revit model, coordinated with structural and MEP sub-models, conducted Navisworks clash detection, and prepared the coordination issue log for a mixed-use 5-storey building.',
    cover: clashHero,
    gallery: [
      {
        src: clashHero,
        caption: 'Composite structural, architectural & MEP model',
        size: 'large',
      },
      {
        src: clashDetail1,
        caption: 'Clash detection: structural steel vs. equipment',
        size: 'small',
      },
      { src: clashDetail2, caption: 'Clash detection: duct routing through truss', size: 'small' },
      {
        src: clashDetail3,
        caption: 'Clash detection: mechanical clearance check',
        size: 'small',
      },
      {
        src: clashDetail4,
        caption: 'Clash detection: coordination issue resolved',
        size: 'small',
      },
    ],
  },
  {
    slug: 'shift-apartments',
    index: '04',
    title: 'Shift Apartments',
    location: 'Addis Ababa Science and Technology University',
    category: 'Academic Project',
    building: '11-storey apartment building, 1,300 sq.m',
    role: 'Designing, drafting, modelling, rendering',
    software: ['Revit', 'Lumion'],
    summary:
      'A podium-neck-tower mixed-use building for a commercially active urban context, shaped by a series of shifted floor plates.',
    description:
      'Designed for a commercially active urban context, the building adopts a mixed-use program organized around a podium-neck-tower concept. The form is achieved through a series of shifted floor plates, lending the building both a distinctive and dynamic interior layout. The lower three floors accommodate commercial uses, transitioning to residential units above, and culminating in a luxury penthouse at the uppermost level.',
    cover: shiftHero,
    gallery: [
      {
        src: shiftHero,
        caption: 'Exterior render of the shifted tower massing',
        size: 'large',
      },
      { src: shiftDiagram, caption: 'Shifted floor-plate diagram', size: 'small' },
    ],
  },
  {
    slug: 'the-4-points-building',
    index: '05',
    title: 'The 4 Points Building',
    location: 'Addis Ababa, Ethiopia',
    category: 'Professional Project',
    building: '22-storey mixed-use tower, ~2,000 sq.m, 136 apartments',
    role: 'Drafter, modeller, rendering',
    software: ['Revit', 'AutoCAD', 'Lumion'],
    summary:
      'Four residential towers unified by a central core, with carved vertical voids that light circulation and articulate each tower.',
    description:
      'Four residential towers are united by a central core apartment, with vertical voids carved into the mid-faces of the block to articulate each tower and introduce natural openings. Internally, these voids double as well-lit circulation corridors, connecting apartments and vertical movement.',
    cover: fourPointsHero,
    gallery: [
      { src: fourPointsHero, caption: 'Street-level exterior render', size: 'large' },
      {
        src: fourPointsDiagram,
        caption: 'Tower massing and void concept diagram',
        size: 'small',
      },
    ],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
