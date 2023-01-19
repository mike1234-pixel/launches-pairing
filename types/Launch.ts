interface Failure {
  time: number;
  altitude: number;
  reason: string;
}

interface Link {
  patch: {
    small: string;
    large: string;
  };
}

interface Payload {
  type: string;
  id: string;
}

interface Core {
  core: {
    serial: string;
  };
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean;
  failures?: Failure[];
  payloads?: Payload[];
  cores?: Core[];
  links?: Link;
}
