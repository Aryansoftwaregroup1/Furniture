import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window"); 

export const COLORS = {
    black: "#1a1919",
    white: "#FFFFFF",
    gray: "#242B2E",
    blue: "#5A20CB"
}


export const SIZES = {
    //Global Sizes
    base: 8,
    radius: 12,
    font: 14,
    padding: 24,

    //Font Sizes
    h1: 32,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    //App Dimensions
    width,
    height
}


export const FONTS = {
    h1: { fontFamily: "BalooDa2-Bold", fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: "BalooDa2-SemiBold", fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: "BalooDa2-SemiBold", fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: "BalooDa2-SemiBold", fontSize: SIZES.h4, lineHeight: 22},
    body1: { fontFamily: "BalooDa2-Regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: { fontFamily: "BalooDa2-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: { fontFamily: "BalooDa2-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: { fontFamily: "BalooDa2-Regualr", fontSize: SIZES.body4, lineHeight: 22},
}


const appTheme = { COLORS, SIZES, FONTS }

export default appTheme;