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

function getUsersInCohort(cohortId) {
  return db('users').select().where('cohort', cohortId)
}

function daily() {
  return db('daily_plan').select()
}

function oneDaily(id) {
  return db('daily_plan').select().where('id', id)
}

function updateUser(id, body) {
  return db('users').select().where('id', id).update(body).returning()
}

function createUser(body) {
  return db('users').insert({
  name: body.name,
  email: body.email,
  cohort: body.cohort,
  github_handle: body.github_handle,
  linkedin_handle: body.linkedin_handle,
  password: body.password,
  role: body.role,
  signedIn: false
  })
}

function getAllMastery() {
  return db('mastery_tracking').select()
  .join('users', 'user_id', 'users.id')
}

function getUsersMastery(id) {
  return db('mastery_tracking').select().where('user_id', id).join('users', 'user_id', 'users.id')
}

function submitMastery(body) {
  return db('mastery_tracking').insert(body)
}

module.exports = {
  getUsers,
  getOneUser,
  getCohorts,
  getOneCohort,
  daily,
  oneDaily,
  createUser,
  getUsersInCohort,
  updateUser,
  getAllMastery,
  getUsersMastery,
  submitMastery
}
