declare module "suncalc" {
    export function getPosition(
        timeAndDate: Date, 
        latitude: number, 
        longitude: number
    ): { altitude: number; azimuth: number };

    export function getTimes(
        timeAndDate: Date, 
        latitude: number, 
        longitude: number
    ): { 
        sunrise: Date; 
        sunset: Date;
        solarNoon: Date;
        [key: string]: Date;
    };
}