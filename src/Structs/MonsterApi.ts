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
}

export interface Experience {
    base: number;
    job: number;
    mvp: number;
}

export interface PrimaryStats {
    str: number;
    agi: number;
    vit: number;
    int: number;
    dex: number;
    luk: number;
}

export interface SecondaryStats {
    hp: number;
    sp: number;
    flee: number;
    hit: number;
    attackSpeed: number;
    attackRange: number;
}

export interface Location {
    locationName: string;
    mapUrl: string;
    mapCleanUrl: string;
    type: string;
    name: string;
    quantity: number;
    respawnTime: number;
}

export interface MonsterDrop {
    itemId: number;
    monsterId: number;
    dropRate: number;
    name: string;
    price: string;
    smallImageUrl: string;
    imageUrl: string;
    cardImageUrl: string;
    itemType: string;
}

export interface MonsterMvpDrop {
    itemId: number;
    monsterId: number;
    dropRate: number;
    name: string;
    smallImageUrl: string;
    imageUrl: string;
    cardImageUrl: string;
    itemType: string;
}

export interface MonsterRequest {
    id: number;
    name: string;
    DatabaseName: string;
    level: number;
    health: number;
    size: string;
    gifUrl: string;
    isMvp: boolean;
    scale: string;
    physicalAttack: string;
    magicAttack: string;
    magicDefense: string;
    physicalDefense: string;
    race: string;
    element: Element;
    experience: Experience;
    primaryStats: PrimaryStats;
    secondaryStats: SecondaryStats;
    locations: Location[];
    monsterDrops: MonsterDrop[];
    monsterMvpDrops: MonsterMvpDrop[];
}


