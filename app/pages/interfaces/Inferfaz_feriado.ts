
export interface RespuestaToFeriados {
    status: string;
    data: DATA[];
}

export interface DATA {
    date: string;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}
