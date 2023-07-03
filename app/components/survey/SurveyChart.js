"use client";
import dynamic from "next/dynamic";
import { getSurveyCountByChoice, getSurveyCount } from "@/app/utils/apiCalls";
const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});
const choices = ["Austin, TX", "Miami, FL", "Denver, CO", "Madison, WI"];
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// loop thru cities

export default function SurveyChart() {
    const [totalCount, setTotalCount] = useState(0);
    const [seriesData, setSeriesData] = useState([]);
    const router = useRouter();

    const choiceLength = choices.length;
    const getSurveyDetails = async () => {
        const surveyCount = await getSurveyCount();
        setTotalCount(surveyCount._count);

        let data = [];
        for (let i = 0; i < choiceLength; i++) {
            const { _count } = await getSurveyCountByChoice(choices[i]);
            data.push(_count);
        }
        setSeriesData(data);
    };

    const handleRetake = async () => {
        await fetch("/api/cookie", {
            method: "PUT",
            cache: "no-cache",
        });
        router.refresh();
    };

    useEffect(() => {
        getSurveyDetails();
    }, []);

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
                height={270}
            />

            <p>
                Total respondents: {totalCount}{" "}
                <button onClick={handleRetake}>
                    Retake Survey
                </button>
            
            </p>
        </div>
    );
}
