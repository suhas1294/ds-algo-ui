import React, { useState } from 'react'
import dsaQuestions from '../dsa-questions.json'
import NavBar from './NavBar'
import DsaCodeBlock from './components/dsa-code-block'
import './problems.css'

function Problems() {
    const [questionList, setQuestionList] = useState(dsaQuestions)

    function debounce(func, timeout = 200) {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args)
            }, timeout)
        }
    }

    const search = (term) => {
        if (term) {
            const filteredQuestions = questionList.filter(
                (question) =>
                    question.question.includes(term) ||
                    question.questionDescription.includes(term) ||
                    question.tags.some((word) => word.includes(term))
            )
            setQuestionList(filteredQuestions)
        } else {
            setQuestionList(dsaQuestions)
        }
    }

    const searchQuestion = debounce((event) => search(event.target.value))

    return (
        <>
            <NavBar />
            <div id="wrapper">
                <input
                    type="text"
                    id="search-dsa"
                    placeholder="search for tags, words in questions.."
                    onChange={searchQuestion}
                />
                {questionList &&
                    questionList.map((question) => (
                        <DsaCodeBlock {...question} key={question.id} />
                    ))}
            </div>
        </>
    )
}

export default Problems
