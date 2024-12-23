import { RoofCounts } from './types'

function calcBar1(buildX: number): number {
  if (buildX === 1) {
    return 1;
  }

  return 0;
}

function calcBar2(buildX: number): number {
  if (buildX === 2 || buildX === 5) {
    return 1;
  }

  if (buildX === 4) {
    return 2;
  }

  return 0;
}

function calcBar3(buildX: number): number {
  if (buildX === 3 || buildX === 5) {
    return 1;
  }

  if (buildX === 6) {
    return 2;
  }

  return 0;
}

export function calcRoofCounts(buildX: number, buildY: number): RoofCounts {
  if (buildX < 4) {
    if (buildY === 2) {
      return {
        roof1: 4,
        roof2: 0,
        roof3: 0,
        stolb: 0,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 3) {
      return {
        roof1: 2,
        roof2: 2,
        roof3: 0,
        stolb: 0,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 4) {
      return {
        roof1: 0,
        roof2: 4,
        roof3: 0,
        stolb: 0,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 5) {
      return {
        roof1: 0,
        roof2: 2,
        roof3: 2,
        stolb: 0,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 6) {
      return {
        roof1: 0,
        roof2: 0,
        roof3: 4,
        stolb: 1,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }
}

if (buildX >= 4) {
    if (buildY === 2) {
      return {
        roof1: 6,
        roof2: 0,
        roof3: 0,
        stolb: 1,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 3) {
      return {
        roof1: 3,
        roof2: 3,
        roof3: 0,
        stolb: 1,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 4) {
      return {
        roof1: 0,
        roof2: 6,
        roof3: 0,
        stolb: 1,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 5) {
      return {
        roof1: 0,
        roof2: 3,
        roof3: 3,
        stolb: 1,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }

    if (buildY === 6) {
      return {
        roof1: 0,
        roof2: 0,
        roof3: 6,
        stolb: 1,
        bar1: calcBar1(buildX),
        bar2: calcBar2(buildX),
        bar3: calcBar3(buildX),
      }
    }
  }

  return {
    roof1: 0,
    roof2: 0,
    roof3: 0,
    stolb: 0,
    bar1: 0,
    bar2: 0,
    bar3: 0,
  }
}