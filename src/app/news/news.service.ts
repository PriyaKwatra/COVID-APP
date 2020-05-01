import { Injectable } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';
import localeHi from '@angular/common/locales/hi';


@Injectable({
    providedIn: 'root',
})
export class NewsService {
    news: {}[];
    now = new Date();
    fomattedOne = '';
    fomattedTwo = '';
    fomattedThree = '';
    fomattedFour = '';
    constructor() {
        if(this.news==undefined){
        this.initialiseData()}
    }

    initialiseData() {
        registerLocaleData(localeHi, 'hi');
        this.now.setDate(1)
        this.now.setHours(10, 50, 1)
        this.fomattedOne = formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'hi', 'UTC+4');
        this.now.setHours(11, 50, 1)
        this.fomattedTwo = formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'hi', 'UTC+4');
        this.now.setHours(13, 59, 10)
        this.fomattedThree = formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'hi', 'UTC+4');
        this.now.setHours(19, 89, 1)
        this.fomattedFour = formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'hi', 'UTC+4');
        this.news = [{
            title: "Health Ministry issued guidelines",
            content: "Health & Family Welfare Ministry has issued guidelines for home isolation of people who either have very mild #COVID19 symptoms or are in the pre-symptomatic phase. Such patients with requisite self-isolation facility at their residence will now have the option for home isolation",
            date: this.fomattedOne
        },
        {
            title: "Maharashtra lockdown LIVE: 13,448 industrial units get permission to restart",
            content: "The Union government had advised the states to allow resumption of industrial activities, which came to a standstill after lockdown due to coronavirus kicked in, from April 20. The issue was also discussed in the latest video conference between Prime Minister Narendra Modi and chief ministers of various states, and Modi had asked the states to frame their own policies on relaxation of norms",
            date: this.fomattedTwo
        },
        {
            title: "Nepal registers two new coronavirus cases",
            content: "Nepal on Tuesday recorded two new coronavirus cases, bringing the total number of the COVID-19 patients in the country to 54. Two men, aged 35 years and 24 years, from Ratahat district in southern Nepal have tested COVID-19 positive, the Ministry of Health and Population said.",
            date: this.fomattedThree
        },
        {
            title: "Govt clocks Rs 159 crore in procurement of coronavirus-related medical items through GeM",
            content: "Government e-Marketplace (GeM) has added about 146 medical products like thermal scanners and disinfectants and certain services on its dedicated page with a view to help the government fight the COVID-19 pandemic, GeM Chief Executive Officer Talleen Kumar said.",
            date: this.fomattedFour
        }
        ]
    }

    addNews(news: {}) {
        this.news.push(news)
    }

}  