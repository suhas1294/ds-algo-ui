import React, { useEffect, useState } from 'react'
import { LB_URL } from '../constants'
import './love-babbar.css'
import NavBar from '../components/NavBar'
import LoveBabbarQuestionBlock from '../components/LoveBabbarQuestionBlock'
import Loader from '../components/Loader'

function LoveBabbar450Questions() {
    const [questionsData, setQuestionsData] = useState([])
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(LB_URL)
            .then((response) => response.json())
            .then((data) => setQuestionsData(data))
            .catch(() => setQuestionsData(null))
            .finally(() => setLoading(false))
    }, [])

    return !loading && questionsData ? (
        <>
            <NavBar />
            <div id="question-wrapper">
                {questionsData.map((question, idx) => {
                    return (
                        <LoveBabbarQuestionBlock
                            key={idx}
                            questionNo={idx}
                            topic={question.topic}
                            question_title={question.question_title}
                            question_practice_link={
                                question.question_practice_link
                            }
                            solution_links={question.solution_links}
                            tags={question.tags}
                            expected_time_complexity={
                                question.expected_time_complexity
                            }
                            expected_space_complexity={
                                question.expected_space_complexity
                            }
                            asked_by={question.asked_by}
                        />
                    )
                })}
            </div>
        </>
    ) : loading ? (
        <>
            <NavBar />
            <Loader />
        </>
    ) : null
}

export default LoveBabbar450Questions
