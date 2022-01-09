import React from 'react'
import lb_questions from '../../love-babbar-450-dsa.json'
import Tags from '../components/tag'
import './love-babbar.css'
import NavBar from '../components/NavBar'
import { ReactComponent as ExtLink } from '../assets/ext-link-icon.svg'
function LoveBabbar450Questions() {
    const getSolutionsUi = (sol_links) => {
        const solList = sol_links.map((link, idx) => {
            const loc = new URL(link)
            return (
                <li key={idx}>
                    <a href={link} target="_blank">
                        {loc.host}
                    </a>
                    <ExtLink />
                </li>
            )
        })
        return <ol>{solList}</ol>
    }
    const ui = lb_questions.map((question, idx) => {
        const {
            topic,
            question_title,
            question_practice_link,
            solution_links,
            tags,
            expected_time_complexity,
            expected_space_complexity,
            asked_by,
        } = question
        return (
            <div key={idx}>
                <div>
                    <p>
                        {idx + 1} )
                        <span className="label-highlight"> Question </span>:{' '}
                        {question_title}
                    </p>
                    <p>
                        <span className="label-highlight">Topic </span>: {topic}
                    </p>
                    {question_practice_link ? (
                        <p>
                            <span className="label-highlight">
                                Question / Practice Link{' '}
                            </span>
                            :{' '}
                            <a href={question_practice_link} target="_blank">
                                {new URL(question_practice_link).hostname}
                            </a>
                            <ExtLink />
                        </p>
                    ) : null}
                    <>
                        <p>
                            <span className="label-highlight">
                                Solution Links :
                            </span>
                        </p>
                        {getSolutionsUi(solution_links)}
                    </>
                    {tags && tags.length > 0 ? <Tags tags={tags} /> : null}
                    {expected_time_complexity ? (
                        <p>
                            <span className="label-highlight">
                                Time complexity{' '}
                            </span>
                            : {expected_time_complexity}
                        </p>
                    ) : null}
                    {expected_space_complexity ? (
                        <p>
                            <span className="label-highlight">
                                Space complexity{' '}
                            </span>
                            : {expected_space_complexity}
                        </p>
                    ) : null}
                    {asked_by & (asked_by.length > 0) ? (
                        <p>
                            <span className="label-highlight">Asked By: </span>{' '}
                            {asked_by}
                        </p>
                    ) : null}
                </div>
                <hr />
            </div>
        )
    })
    return (
        <>
            <NavBar />
            <div id="question-wrapper">{ui}</div>
        </>
    )
}

export default LoveBabbar450Questions
