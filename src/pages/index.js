import React from "react"
import Layout from "../components/layout"

import styles from "./ideas.css"

const Idea = props => (
    <div >
        <div className={styles.description}>
            <h2 className={styles.title}>{props.title}</h2>
            <h4 className={styles.moto}>{props.moto}</h4>
            <h6 className={styles.mission}>{props.mission}</h6>
            {props.children}
        </div>

    </div>
)

const ColumnList = props => (
    <li style={{ display: "block", fontSize: "18px"}}>
        {props.children}
    </li>
)

export default () => (

    <Layout>
        <h1>Hi! These are my few ideas for next year!</h1>
        <p>
            App, website, project
        </p>

        <Idea
            title="Name of idea"
            moto={ "Moto of idea"}
            mission="description de l'idée (mission)"

        >
            <ul>
                <ColumnList>Col 1</ColumnList>
                <ColumnList>Col 2</ColumnList>
                <ColumnList>Col 3</ColumnList>
            </ul>
        </Idea>


  </Layout>
)