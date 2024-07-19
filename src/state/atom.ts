import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrosDeEventos } from "../interfaces/IFiltrosDeEventos";


export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: []
})

export const filtroDeEventos = atom<IFiltrosDeEventos>({
    key:'filtroDeEventos',
    default:{}
})