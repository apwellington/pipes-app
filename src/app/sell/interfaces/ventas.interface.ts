export enum Color {
    rojo = "rojo",
    negro = "negro",
    azul = "azul",
    verde = "verde"

}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color
}