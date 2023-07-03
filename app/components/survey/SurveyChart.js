"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { getSurveyCountByChoice, getSurveyCount } from "@/app/utils/apiCalls";

const choices = ["Austin, TX", "Miami, FL", "Denver, CO", "Madison, WI"];
export default async function SurveyChart() {
    const surveyCount = await getSurveyCount();
    const totalCount = surveyCount._count;

    // loop thru cities
    const choiceLength = choices.length;

    let seriesData = [];
    for (let i = 0; i < choiceLength; i++) {
        const { _count } = await getSurveyCountByChoice(choices[i]);
        seriesData.push(_count);
    }

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
    };
    const series = [{ name: "Count", data: seriesData }];
    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="bar"
                width={600}
                height={400}
            />

            <p>Total respondents: {totalCount}</p>
        </div>
    );
}
