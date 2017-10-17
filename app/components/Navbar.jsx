import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default function NewCampus() {
  return (
    <div>
        <button>
            <NavLink to="/campuses">
                HOME
            </NavLink>
        </button>
        <button>
            <NavLink to="/new-campus">
                STUDENTS
            </NavLink>
        </button>
    </div>
  )
}