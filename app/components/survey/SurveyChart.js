"use client";
import dynamic from "next/dynamic";
import { getSurveyCountByChoice, getSurveyCount } from "@/app/utils/apiCalls";
const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});
const choices = ["Austin, TX", "Miami, FL", "Denver, CO", "Madison, WI"];

// loop thru cities

const choiceLength = choices.length;

const LoopCities = async () => {
    let data = [];
    for (let i = 0; i < choiceLength; i++) {
        const { _count } = await getSurveyCountByChoice(choices[i]);
        data.push(_count);
    }
    return data;
};

export default async function SurveyChart() {
    const surveyCount = await getSurveyCount();
    const totalCount = surveyCount._count;

    const seriesData = await LoopCities();

    // apex chart options
    const options = {
        xaxis: {
            categories: choices,
            title: {
                text: "Count",
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 10,
            },
        },
        dataLabels: {
            style: {
                colors: ["#011B29"],
            },
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false,
                        },
                    },
                },
            },
        ],
    };

    const series = [{ name: "Count", data: seriesData }];
    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="bar"
                width="90%"
                height={350}
            />

            <p>Total respondents: {totalCount}</p>
        </div>
    );
}
