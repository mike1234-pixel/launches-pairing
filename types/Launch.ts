interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_types: string;
  landpad: string;
}

export interface Failure {
  time: number;
  altitude: number;
  reason: string;
}

interface Link {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: string;
    launch: string;
    media: string;
    recovery: string;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
  auto_update: boolean;
  launch_library_id: string;
}

export interface Launch {
  id: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: 'half' | 'quarter' | 'year' | 'month' | 'day' | 'hour';
  static_fire_date_utc?: string;
  static_fire_date_unix?: number;
  tbd?: boolean;
  net: boolean;
  window?: number;
  rocket?: string;
  success: boolean;
  failures?: Failure[];
  upcoming: boolean;
  details?: string;
  fairings?: {
    refused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
  };
  crew?: string[];
  ships?: string[];
  capsules?: string[];
  payloads?: string[];
  launchpad?: string;
  cores?: Core[];
  links?: Link;
}
