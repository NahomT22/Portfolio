import clashArchitectural from '../assets/projects/clash-detection-architectural.jpg'
import clashElectrical from '../assets/projects/clash-detection-electrical.jpg'
import clashHero from '../assets/projects/clash-detection-hero.jpg'
import clashMechanical from '../assets/projects/clash-detection-mechanical.jpg'
import clashPlumbing from '../assets/projects/clash-detection-plumbing.jpg'
import clashStructural from '../assets/projects/clash-detection-structural.jpg'
import bim3rdFloorUnits from '../assets/projects/federated-bim-3rd-floor-units.jpg'
import bimElevationEastWest from '../assets/projects/federated-bim-elevation-east-west.jpg'
import bimElevationSouthNorth from '../assets/projects/federated-bim-elevation-south-north.jpg'
import bimHero from '../assets/projects/federated-bim-hero.jpg'
import bimParkingP1 from '../assets/projects/federated-bim-parking-p1.jpg'
import bimParkingP2 from '../assets/projects/federated-bim-parking-p2.jpg'
import bimSection1 from '../assets/projects/federated-bim-section-1.jpg'
import bimSection2 from '../assets/projects/federated-bim-section-2.jpg'
import bimTypicalFloor from '../assets/projects/federated-bim-typical-floor.jpg'
import bimWallDetails from '../assets/projects/federated-bim-wall-details.jpg'
import fourPointsDiagram from '../assets/projects/four-points-diagram.jpg'
import fourPointsHero from '../assets/projects/four-points-hero.jpg'
import mepCover from '../assets/projects/mep-cover.jpg'
import mepFloor1PlumbingPlan from '../assets/projects/mep-floor1-plumbing-plan.jpg'
import mepFloor1SpacePlan from '../assets/projects/mep-floor1-space-plan.jpg'
import mepFloor2PlumbingPlan from '../assets/projects/mep-floor2-plumbing-plan.jpg'
import mepFloor2SpacePlan from '../assets/projects/mep-floor2-space-plan.jpg'
import mepPlumbingSection from '../assets/projects/mep-plumbing-section.jpg'
import mepSectionDetail from '../assets/projects/mep-section-detail.jpg'
import shiftDiagram from '../assets/projects/shift-apartments-diagram.jpg'
import shiftHero from '../assets/projects/shift-apartments-hero.jpg'

export type Project = {
  slug: string
  index: string
  title: string
  location: string
  category: 'Academic Project' | 'Professional Project'
  categories: string[]
  building: string
  role: string
  software: string[]
  summary: string
  description: string
  cover: string
  gallery: { src: string; caption: string; size?: 'large' | 'small'; tag?: string }[]
}

export const projects: Project[] = [
  {
    slug: 'federated-bim-apartment-building',
    index: '01',
    title: 'Federated BIM Model Development',
    location: 'George Brown College',
    category: 'Academic Project',
    categories: [
      'Floor Plans',
      'Elevations',
      'Sections',
      'Details',
      'Clash Detection',
      'MEP Systems',
    ],
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
      {
        src: bimParkingP2,
        caption: 'Parking level 2 floor plan',
        size: 'small',
        tag: 'Floor Plans',
      },
      {
        src: bimParkingP1,
        caption: 'Parking level 1 floor plan',
        size: 'small',
        tag: 'Floor Plans',
      },
      {
        src: bimTypicalFloor,
        caption: 'Typical floor plan, 2nd–8th floor',
        size: 'small',
        tag: 'Floor Plans',
      },
      {
        src: bim3rdFloorUnits,
        caption: 'Third-floor unit type plan',
        size: 'small',
        tag: 'Floor Plans',
      },
      {
        src: bimElevationSouthNorth,
        caption: 'South and north elevations',
        size: 'small',
        tag: 'Elevations',
      },
      {
        src: bimElevationEastWest,
        caption: 'East and west elevations',
        size: 'small',
        tag: 'Elevations',
      },
      { src: bimSection1, caption: 'Building section 1', size: 'small', tag: 'Sections' },
      {
        src: bimSection2,
        caption: 'Building section 2, with sample units',
        size: 'small',
        tag: 'Sections',
      },
      { src: bimWallDetails, caption: 'Wall assembly details', size: 'small', tag: 'Details' },
    ],
  },
  {
    slug: 'mep-systems-coordination',
    index: '02',
    title: 'Modelling & Coordinating MEP Systems',
    location: 'George Brown College',
    category: 'Academic Project',
    categories: ['Plans', 'Section', 'Details'],
    building: 'Elementary school, 2-storey building',
    role: 'BIM modeling & coordination, clash detection',
    software: ['Revit'],
    summary:
      'Coordinating three MEP disciplines within a tight floor-to-floor height, resolving over 40 major clashes to a conflict-free federated model.',
    description:
      'Focused on federated model coordination for a 2-storey elementary school. Coordinating three MEP disciplines within a tight floor-to-floor height required iterative clash resolution; resolved over 40 major clashes, improving constructability and achieving a conflict-free federated model by final submission.',
    cover: mepCover,
    gallery: [
      {
        src: mepCover,
        caption: 'Cover sheet: drawing list and isometric MEP overview',
        size: 'large',
      },
      {
        src: mepFloor1SpacePlan,
        caption: 'First-floor mechanical space plan',
        size: 'small',
        tag: 'Plans',
      },
      {
        src: mepFloor2SpacePlan,
        caption: 'Second-floor space plan',
        size: 'small',
        tag: 'Plans',
      },
      {
        src: mepFloor1PlumbingPlan,
        caption: 'First-floor plumbing plan',
        size: 'small',
        tag: 'Plans',
      },
      {
        src: mepFloor2PlumbingPlan,
        caption: 'Second-floor plumbing plan',
        size: 'small',
        tag: 'Plans',
      },
      {
        src: mepPlumbingSection,
        caption: 'Plumbing sections',
        size: 'small',
        tag: 'Section',
      },
      {
        src: mepSectionDetail,
        caption: 'Mechanical sections & details',
        size: 'small',
        tag: 'Details',
      },
    ],
  },
  {
    slug: 'model-coordination-clash-detection',
    index: '03',
    title: 'Model Coordination & Clash Detection',
    location: 'George Brown College',
    category: 'Academic Project',
    categories: ['Disciplines', 'Report', '4D Simulation'],
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
        src: clashArchitectural,
        caption: 'Architectural model: massing, envelope and streetscape',
        size: 'small',
        tag: 'Disciplines',
      },
      {
        src: clashStructural,
        caption: 'Structural model: steel frame, cores and pile foundations',
        size: 'small',
        tag: 'Disciplines',
      },
      {
        src: clashMechanical,
        caption: 'Mechanical model: air handling units and duct distribution',
        size: 'small',
        tag: 'Disciplines',
      },
      {
        src: clashElectrical,
        caption: 'Electrical model: cable tray, lighting and ceiling devices',
        size: 'small',
        tag: 'Disciplines',
      },
      {
        src: clashPlumbing,
        caption: 'Plumbing model: supply, sanitary and storm risers',
        size: 'small',
        tag: 'Disciplines',
      },
    ],
  },
  {
    slug: 'shift-apartments',
    index: '04',
    title: 'Shift Apartments',
    location: 'Addis Ababa Science and Technology University',
    category: 'Academic Project',
    categories: [
      'Form Development',
      'Floor Plans',
      'Elevation',
      'Section',
      'Details',
      'MEP Systems',
    ],
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
      {
        src: shiftDiagram,
        caption: 'Shifted floor-plate diagram',
        size: 'small',
        tag: 'Form Development',
      },
    ],
  },
  {
    slug: 'the-4-points-building',
    index: '05',
    title: 'The 4 Points Building',
    location: 'Addis Ababa, Ethiopia',
    category: 'Professional Project',
    categories: [
      'Form Development',
      'Floor Plans',
      'Elevation',
      'Section',
      'Details',
      'MEP Systems',
    ],
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
        tag: 'Form Development',
      },
    ],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
