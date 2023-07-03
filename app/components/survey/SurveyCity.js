import SurveyForm from "./SurveyForm";
import SurveyChart from "./SurveyChart";
import { cookies } from "next/headers";

export default function SurveyCity() {
    const cookieStore = cookies();
    const survey1cookie = cookieStore.get("survey1cookie");

    return (
        <div className="survey-container">
            <h3>What city should I visit next?</h3>
            {survey1cookie ? <SurveyChart /> : <SurveyForm />}
        </div>
    );
}
