import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <div>
    DashboardPage content
    <Link className="button" to="/create-workout">Add Workout</Link>
  </div>
)

export default DashboardPage
