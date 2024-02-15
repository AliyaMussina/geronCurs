
type TPeriod = {
    closeProjects: number,
    income: number,
    hired: number,
    dismissed: number,
    newProjects: number
}
type TSeason = {
    winter: TPeriod,
    spring: TPeriod,
    summer: TPeriod,
    autumn: TPeriod
}
const seasons: TSeason = {
    winter: {
        closeProjects: 10,
        income: 600000,
        hired: 10,
        dismissed: 10,
        newProjects: 10
    },
    spring: {
        closeProjects: 10,
        income: 750000,
        hired: 50,
        dismissed: 10,
        newProjects: 10
    },
    summer: {
        closeProjects: 10,
        income: 550000,
        hired: 10,
        dismissed: 60,
        newProjects: 10
    },
    autumn: {
        closeProjects: 10,
        income: 900000,
        hired: 10,
        dismissed: 10,
        newProjects: 10
    }
}
enum ETitleSeasons {
    winter = 'зимний',
    spring = 'весенний',
    summer = 'летнийr',
    autumn = 'осенний'
}
type TDifferenceSeason = {
    title: ETitleSeasons,
    season: TPeriod
}
const getTitleSeasons = (season: string) => {
    switch (season) {
        case 'winter':
            return ETitleSeasons.winter;
        case 'spring ':
            return ETitleSeasons.spring;
        case 'autumn':
            return ETitleSeasons.autumn;
        default:
            return ETitleSeasons.summer;
    }
}
let maxIncomeSeason: TDifferenceSeason | null = null;
let minIncomeSeason: TDifferenceSeason | null = null;

Object.entries(seasons).forEach(([seasonKey, seasonValues]) => {
    if (!maxIncomeSeason || seasonValues.income >= maxIncomeSeason.season.income) {
        maxIncomeSeason = {
            title: getTitleSeasons(seasonKey),
            season: seasonValues
        }
    }
    if (!minIncomeSeason || seasonValues.income <= minIncomeSeason.season.income) {
        minIncomeSeason = {
            title: getTitleSeasons(seasonKey),
            season: seasonValues
        }
    }
})
console.log (maxIncomeSeason);
console.log (minIncomeSeason);