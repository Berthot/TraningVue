export interface Element {
    name: string;
    tier: number;
    neutral: number;
    water: number;
    earth: number;
    fire: number;
    wind: number;
    poison: number;
    holy: number;
    dark: number;
    ghost: number;
    undead: number;
    monsters: MonsterRequest[];
    id: number;
}

export interface Scale {
    name: string;
    monsters: MonsterRequest[];
    id: number;
}

export interface Experience {
    base: number;
    job: number;
}

export interface PhysicalAttack {
    minimalDamage: number;
    maximumDamage: number;
}

export interface MagicAttack {
    minimalDamage: number;
    maximumDamage: number;
}

export interface Defense {
    magicDefense: number;
    physicalDefense: number;
}

export interface PrimaryAttribute {
    str: number;
    agi: number;
    vit: number;
    int: number;
    dex: number;
    luk: number;
}

export interface SecondaryAttribute {
    hp: number;
    sp: number;
    flee: number;
    hit: number;
    attackSpeed: number;
    attackRange: number;
}

export interface Race {
    name: string;
    monsters: MonsterRequest[];
    enName: string;
    id: number;
}

export interface MonsterItemMap {
    monsterId: number;
    itemId: number;
    item?: any;
    dropRate: number;
    stealable: boolean;
    id: number;
}

export interface MonsterMvpDropMap {
    monsterId: number;
    itemId: number;
    item?: any;
    stealable: boolean;
    dropRate: number;
    id: number;
}

export interface MonsterRequest {
    name: string;
    dbName: string;
    level: number;
    health: number;
    size: number;
    gifUrl: string;
    elementId: number;
    element: Element;
    hasDrop: boolean;
    hasLocation: boolean;
    isMvp: boolean;
    raceId: number;
    scaleId: number;
    scale: Scale;
    experience: Experience;
    physicalAttack: PhysicalAttack;
    magicAttack: MagicAttack;
    defense: Defense;
    primaryAttribute: PrimaryAttribute;
    secondaryAttribute: SecondaryAttribute;
    race: Race;
    monsterPerLocationMaps: any[];
    monsterItemMaps: MonsterItemMap[];
    monsterMvpDropMaps: MonsterMvpDropMap[];
    id: number;
}


