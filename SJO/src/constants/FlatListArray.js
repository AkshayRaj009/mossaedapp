
import { useState } from "react";
import { profileImage, lockImage, arrowImage, carImage, watchImage, number, companiesImage, estateImage, investmentImage, horseImage, benzImage, loaction, carBack, carRing, carLocation, sendIcon, moadalLocation, arrow, jewelleyIcon, companyImage, rolexImage, jewImage, brownHorse, camelIamges, camelcon, qdbImage } from "../assests/index"
import { colors } from "./colors"
import { HEIGHT, WIDTH } from "./Dimensions"

export const loginData = [
    {
        id: 1,
        title: "User Name",
        text: "Please inter username",
        image: profileImage
    },
    {
        id: 2,
        title: "Password",
        text: "Please inter password",
        image: lockImage
    }
]

export const HomeData = [
    {
        id: 1,
        title: "Cars",
        arrow: arrowImage,
        image: carImage,
        // path: "PatternPrinting"
    },
    {
        id: 2,
        title: "Jeweller & Watches",
        arrow: arrowImage,
        image: watchImage,
        path: "JewelleryFilterScreen"
    },
    {
        id: 3,
        title: "Unique numbers",
        arrow: arrowImage,
        image: number,
        path: "UniqueFilterScreen"
    },
    {
        id: 4,
        title: "Companies",
        arrow: arrowImage,
        image: companiesImage,
        path: "CompaniesFilterScreen"
    },
    {
        id: 5,
        title: "Real estates",
        arrow: arrowImage,
        image: estateImage,
        path: "PropertyFilterScreen"
    },
    {
        id: 6,
        title: "Lands",
        arrow: arrowImage,
        image: investmentImage,
        path: "LandFilterScreen"
    },
    {
        id: 7,
        title: "Investment",
        arrow: arrowImage,
        image: carImage,
        path: "InvestmentFilterScreen"

    },
    {
        id: 8,
        title: "Horse & Camels",
        arrow: arrowImage,
        image: horseImage,
        path: "HorseFilterScreen"

    }
]

export const carFilterData = [
    {
        id: 1,
        title: "vehicle category",
        text: "Classic"
    },
    {
        id: 2,
        title: "Car type",
        text: "Car type"
    },
    {
        id: 3,
        title: "Model",
        text: "Model"
    },
    {
        id: 4,
        title: "Year",
        text: "Year"
    },
    {
        id: 5,
        title: "Country",
        text: "Qatar"
    },
    {
        id: 6,
        title: " Region",
        text: "Doha"
    },

]

export const carListData = [
    {
        id: 1,
        image: benzImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "CarsListScreen"
    },
    {
        id: 2,
        image: benzImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "CarsListScreen"

    },
    {
        id: 10,
        image: benzImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction
    },
    {
        id: 3,
        image: benzImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "CarsListScreen"

    },
    {
        id: 4,
        image: benzImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "CarsListScreen"

    },
    {
        id: 5,
        image: benzImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "CarsListScreen"

    },
    {
        id: 6,
        image: benzImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "CarsListScreen"

    }
]

export const carlistData = [
    {
        id: 1,
        title: "(i8) BMW",
        num: "2020",
        image: carRing,
        color: colors.grey

    },
    {
        id: 2,
        title: "(i8) BMW",
        num: "2020",
        image: carLocation,
        marginTop: HEIGHT * 0.06,
        send: sendIcon,
        color: colors.textColor,
        color2: colors.textColor

    },
    {
        id: 3,
        title: "unique number",
        num: "90000654345",
        image: carRing,
        color: colors.textColor,
        color2: colors.textColor


    },
]
export const carCase = [
    {
        id: 1,
        case: "SARA"
    },
    {
        id: 2,
        case: "LANA"
    },


]

export const modalData = [
    {
        id: 1,
        title: "Bring a car to the current location",
        image: moadalLocation,
        arrow: arrow,
        // navigation:setModalVisible(true)

    },
    {
        id: 2,
        title: "remove a unique number",
        image: moadalLocation,
        arrow: arrow,
        path: "UniqueNumberScreen"

    },
    {
        id: 3,
        title: "add a unique number",
        image: moadalLocation,
        arrow: arrow

    }, {
        id: 4,
        title: "add a regular number",
        image: moadalLocation,
        arrow: arrow

    },
    {
        id: 5,
        title: "Open order",
        image: moadalLocation,
        arrow: arrow

    },
]

export const numData = [
    {
        id: 1,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 2,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 3,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 4,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 5,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 6,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 7,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 8,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    },
    {
        id: 9,
        date: "20/10/2019",
        title: "Qatar",
        numb: "333333",
        name: "Privet"
    }
]

export const JewelleryInput = [
    {
        id: 1,
        title: "sport watches",
        text: "Category"

    },
    {
        id: 2,
        title: "ROLEX",
        text: "Brand"

    },
    {
        id: 3,
        title: "Qatar",
        text: "Country"
    }
]

export const jewelleryCase = [
    {
        id: 1,
        case: "watches"
    },
    {
        id: 2,
        case: "Jewellery"
    }
]

export const watchesData = [
    {
        id: 1,
        image: rolexImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "WatchScreen"
    },
    {
        id: 2,
        image: rolexImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "WatchScreen"

    },
    {
        id: 3,
        image: rolexImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "WatchScreen"

    },
    {
        id: 4,
        image: rolexImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "WatchScreen"

    },
    {
        id: 5,
        image: rolexImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "WatchScreen"

    }


]
export const jewData = [
    {
        id: 1,
        image: jewImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "JewelleryScreen"
    },
    {
        id: 2,
        image: jewImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "JewelleryScreen"

    },
    {
        id: 3,
        image: jewImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "JewelleryScreen"

    },
    {
        id: 4,
        image: jewImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "JewelleryScreen"

    },
    {
        id: 5,
        image: jewImage,
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        location: loaction,
        path: "JewelleryScreen"

    }


]
export const uniqueFilter = [
    {
        id: 1,
        title: "Special transport",
        text: "Type"

    },
    {
        id: 2,
        title: "Qatar",
        text: "Country"

    },

]
export const uniqueNumber = [
    {
        id: 1,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 2,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 3,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 4,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 5,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 6,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 7,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 8,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    },
    {
        id: 9,
        date: "20/10/2019",
        name: "Qatar",
        num: "300000",
        use: "Unuse",
        order: "create an order",
        privet: "Privet",
        arrow: arrow
    }
]
export const num = [
    {
        id: 1,
        case: "phoneNumber"
    },
    {
        id: 2,
        case: "carsNumber"
    }
]
export const phnumb = [
    {
        id: 1,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 2,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 3,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 4,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 5,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 6,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 7,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 8,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    },
    {
        id: 9,
        date: "20/10/2019",
        name: "Qatar",
        num: "+974 44621428",
        use: "Use",
        order: "create an order",
        privet: "Vodavon"
    }
]
export const companyFilter = [
    {
        id: 1,
        title: "Chemical industries",
        text: "sactor"

    },
    {
        id: 2,
        title: "Qatar",
        text: "Country"

    },

]
export const companiesData = [
    {
        id: 1,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 2,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 3,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 4,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 5,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 6,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 7,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 8,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
    {
        id: 9,
        image: companyImage,
        title1: "Gulf Transport Company",
        text: "Chemical industries",
        title: "Qatar,Doha,Mirqab mall",
        order: "Create an order",
        arrow: carBack,
        location: loaction,
        path: "GoldenHorseScreen"
    },
]
export const horse = [
    {
        id: 1,
        case: "horse"
    },
    {
        id: 2,
        case: "vivre"
    }
]
export const estateFilter = [
    {
        id: 1,
        title: "Chemical industries",
        text: "sactor"

    },
    {
        id: 2,
        title: "Qatar",
        text: "Country"

    },
    {
        id: 3,
        title: "Chemical industries",
        text: "sactor"

    },
    {
        id: 4,
        title: "Qatar",
        text: "Country"

    },
    {
        id: 5,
        title: "Chemical industries",
        text: "sactor"

    },
    {
        id: 6,
        title: "Qatar",
        text: "Country"

    },


]
export const property = [
    {
        id: 1,
        case: "first"
    },
    {
        id: 2,
        case: "second"
    }
]
export const land = [
    {
        id: 1,
        case: "first"
    },
    {
        id: 2,
        case: "second"
    }
]
export const horseFilter = [
    {
        id: 1,
        title: "Turkmenistan",
        text: "Type"

    },
    {
        id: 2,
        title: "Qatar",
        text: "Country"

    },

]
export const camel = [
    {
        id: 1,
        case: "first"
    },
    {
        id: 2,
        case: "second"
    }
]
export const horseData = [
    {
        id: 1,
        image: brownHorse,
        title: "Brown",
        color: "Colors",
        order: "Create an order",
        location: loaction,
        path: "HorseListScreen"
    },
    {
        id: 2,
        image: brownHorse,
        title: "Brown",
        order: "Create an order",
        color: "Colors",
        location: loaction,
        path: "HorseListScreen"
    },
    {
        id: 3,
        image: brownHorse,
        title: "Brown",
        color: "Colors",
        order: "Create an order",
        location: loaction,
        path: "HorseListScreen"
    },
    {
        id: 4,
        image: brownHorse,
        title: "Brown",
        color: "Colors",
        order: "Create an order",
        location: loaction,
        path: "HorseListScreen"
    },
    {
        id: 5,
        image: brownHorse,
        title: "Brown",
        color: "Colors",
        order: "Create an order",
        location: loaction,
        path: "HorseListScreen"
    }
]
export const camelData = [
    {
        id: 1,
        image: camelIamges,
        title: "Camel Race",
        order: "Create an order",
        location: camelcon,
        path: "HorseListScreen"
    },
    {
        id: 2,
        image: camelIamges,
        title: "Camel Race",
        order: "Create an order",
        location: camelcon,
        path: "HorseListScreen"
    },
    {
        id: 3,
        image: camelIamges,
        title: "Camel Race",
        order: "Create an order",
        location: camelcon,
        path: "HorseListScreen"



    },
    {
        id: 4,
        image: camelIamges,
        title: "Camel Race",
        order: "Create an order",
        location: camelcon,
        path: "HorseListScreen"
    },
    {
        id: 5,
        image: camelIamges,
        title: "Camel Race",
        order: "Create an order",
        location: camelcon,
        path: "HorseListScreen"
    }
]
export const investmentData = [
    {
        id: 1,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 2,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 3,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 4,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 5,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 6,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 7,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 8,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
    {
        id: 9,
        image: qdbImage,
        title1: "QNB",
        text: "Investment12547",
        title: "2,500",
        order: "Create an order",
        arrow: carBack,
        qar: "QAR",
        path: "AlrayyanScreen"
    },
]
export const bank = [
    {
        id: 1,
        case: "first"
    },
    {
        id: 2,
        case: "second"
    }
]
export const calenderData = [
    {
        id: 1,
        time: "9:00 am",
        title: "Qatar Union Conference",
        text: "Qatar,Doha,Mirqab mall",
        location: loaction,
        path: "ConferenceScreen"
    },
    {
        id: 2,
        time: "9:00 am",
        title: "Qatar Union Conference",
        text: "Qatar,Doha,Mirqab mall",
        location: loaction,
        path: "ConferenceScreen"
    },
    {
        id: 3,
        time: "9:00 am",
        title: "Qatar Union Conference",
        text: "Qatar,Doha,Mirqab mall",
        location: loaction,
        path: "ConferenceScreen"
    },

]