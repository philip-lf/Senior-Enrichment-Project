import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default function NewCampus() {
  return (
    <div>
        <button>
            <NavLink to="/home">
                HOME
            </NavLink>
        </button>
        <button>
            <NavLink to="/campuses">
                CAMPUSES
            </NavLink>
        </button>
        <button>
            <NavLink to="/students">
                STUDENTS
            </NavLink>
        </button>
    </div>
  )
}