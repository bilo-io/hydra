/* eslint-disable import/no-anonymous-default-export */
export const withCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export default {
    withCommas
}
