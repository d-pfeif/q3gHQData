const express = require('express');
const db = require('./connection')

function getUsers() {
  return db('users').select()
}

function getOneUser(id) {
  return db('users').select().where('id', id)
}

function getCohorts() {
  return db('cohorts').select()
}

function getOneCohort(id) {
  return db('cohorts').select().where('id', id)
}

function daily() {
  return db('daily_plan').select()
}

function oneDaily(id) {
  return db('daily_plan').select().where('id', id)
}

function createUser(req.body) {
  return db('users').insert({
  name: req.body.name,
  email: req.body.email,
  cohort: req.body.cohort,
  github_handle: req.body.github_handle,
  linkedin_handle: req.body.linkedin_handle,
  password: req.body.password,
  role: req.body.role
  })
}

module.exports = {
  getUsers,
  getOneUser,
  getCohorts,
  getOneCohort,
  daily,
  oneDaily,
  createUser
}
