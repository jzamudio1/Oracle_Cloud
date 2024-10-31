import { TyrParam } from "./TyrParam";

export interface EjecutarRequest {
    P_CNA_HANDLER: string;
    P_CNA_ACCION: string;
    p_param?: TyrParam[] | null;
}