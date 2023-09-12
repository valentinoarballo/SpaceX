export type Api4SpaceXResponse = {
    docs: Rocket[];
    totalDocs: number;
  }


export type Rocket = {
    height:           Diameter[];
    diameter:         Diameter[];
    mass:             Mass[];
    first_stage:      FirstStage;
    second_stage:     SecondStage;
    engines:          Engines;
    landing_legs:     LandingLegs;
    payload_weights:  PayloadWeight[];
    flickr_images:    string[];
    name:             string;
    type:             string;
    active:           boolean;
    stages:           number;
    boosters:         number;
    cost_per_launch:  number;
    success_rate_pct: number;
    first_flight:     Date;
    country:          string;
    company:          string;
    wikipedia:        string;
    description:      string;
    id:               string;
}

export type Diameter = {
    meters: number | null;
    feet:   number | null;
}

export type Engines = {
    isp:              ISP;
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    number:           number;
    type:             string;
    version:          string;
    layout:           null | string;
    engine_loss_max:  number | null;
    propellant_1:     string;
    propellant_2:     string;
    thrust_to_weight: number;
}

export type ISP = {
    sea_level: number;
    vacuum:    number;
}

export type Thrust = {
    kN:  number;
    lbf: number;
}

export type FirstStage = {
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number | null;
}

export type LandingLegs = {
    number:   number;
    material: null | string;
}

export type Mass = {
    kg: number;
    lb: number;
}

export type PayloadWeight = {
    id:   string;
    name: string;
    kg:   number;
    lb:   number;
}

export type SecondStage = {
    thrust:           Thrust;
    payloads:         Payloads;
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number | null;
}

export type Payloads = {
    composite_fairing: CompositeFairing;
    option_1:          string;
}

export type CompositeFairing = {
    height:   Diameter;
    diameter: Diameter;
}
