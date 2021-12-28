import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import dsaQuestions from '../dsa-questions.json'
import NavBar from './NavBar'
import DsaCodeBlock from './components/dsa-code-block'
import Loader from './components/Loader'
import './problems.css'

/* TODO: This component is used to fetch "standard 450 dsa questions compiled by Love babbar"
and display all questions with solutions, component name is retained as "Problems.jsx"
instead of renaming it appropriately due to time crunch. */

function Problems() {
    const RECORD_COUNT = 10
    const [questionList, setQuestionList] = useState(
        dsaQuestions.slice(0, RECORD_COUNT)
    )

    const loaderRef = useRef()

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
        const termLowerCase = term.toLowerCase().trim()
        if (term) {
            const filteredQuestions = dsaQuestions.filter(
                (question) =>
                    question.question.toLowerCase().includes(termLowerCase) ||
                    question.questionDescription
                        .toLowerCase()
                        .includes(termLowerCase) ||
                    question.tags.some((word) =>
                        word.toLowerCase().includes(termLowerCase)
                    )
            )
            setQuestionList(filteredQuestions)
        } else {
            setQuestionList(dsaQuestions)
        }
    }

    const observerCB = useCallback((entries) => {
        entries.forEach((entry) => {
            if (
                entry.isIntersecting &&
                questionList.length < dsaQuestions.length
            ) {
                setQuestionList((prevQList) => [
                    ...prevQList,
                    ...dsaQuestions.slice(
                        prevQList.length,
                        prevQList.length + RECORD_COUNT
                    ),
                ])
            }
        })
    }, [])

    const observerOptions = useMemo(
        () => ({
            root: null,
            threshold: 0.8,
        }),
        []
    )

    const searchQuestion = debounce((event) => search(event.target.value))

    useEffect(() => {
        const observer = new IntersectionObserver(observerCB, observerOptions)
        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }
    }, [loaderRef])

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
                        <DsaCodeBlock
                            {...question}
                            key={`"id" + ${Math.random()
                                .toString(16)
                                .slice(2)}`}
                        />
                    ))}
                {questionList.length < dsaQuestions.length ? (
                    <Loader ref={loaderRef} />
                ) : null}
            </div>
        </>
    )
}

export default Problems
