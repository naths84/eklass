import React from "react"

import Subjects from '../Subjects/Subjects';

import mockData from '../../data/data';

const Class = ({id}) => (
  <>
    <h1>{`Welcome to class #${id} !`}</h1>
    <Subjects />
  </>
)

export default Class;