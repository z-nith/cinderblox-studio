import {
    Palette as BasePalette,
    PaletteOptions as BasePaletteOptions,
} from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface CommonColors {
        black: string;
        white: string;
    }

    type ColorVariants = {
        light?: string;
        mid?: string;
        dark?: string;
    };

    interface CustomColors {
        greyDefault: string;
        greyDark: string;
        greyLight: string;
        greyDarker: string;
        white75: string;
        white60: string;
        black75: string;
        black60: string;
        charcoal: string;
        charcoalDark: string;
        charcoalLight: string;
    }

    export interface Palette extends BasePalette {
        custom: Partial<CustomColors>;
    }

    export interface PaletteOptions extends BasePaletteOptions {
        custom: Partial<CustomColors>;
    }
}
